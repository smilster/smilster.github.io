
function findMax(array) {
  if (array.length === 0) {
    return undefined; // Handle empty array case
  }

  let yMax = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > yMax) {
      yMax = array[i];
    }
  }

  return yMax;
}






// for (let targetIter = 0; targetIter < targetNumber; targetIter++) {
//   targetX.push([]);
//   targetY.push([]);
//   for (let i = 0; i < particleNumber; i++) {
//     targetX[targetIter].push(L * Math.random()- L * 0.5);
//     targetY[targetIter].push(-0.5 *L  + 0.5 * L * targetIter);
//   }

// }

// const targetXX = [];
// const targetYY = [];



// targetXX.push([0,0,0,0,0]);
// targetYY.push([0,0,0,0,0]);


// targetXX.push([100,100,100,100,100]);
// targetYY.push([100,100,100,100,100]);




function generateGaussianRandom() {
  let u1 = Math.random();
  let u2 = Math.random();
  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  return z0;
}

function initializeParticles() {


  particles = [];
  for (let i = 0; i < particleNumber; i++) {

    const phi = 2 * Math.PI * Math.random();
    const radius = 1 * (Math.random() -0.5)
    particles.push({


      positionX: initialRadius * radius * Math.cos(phi),//L/2+0.1*L*generateGaussianRandom(), // Initial positionX between 0 and 10
      positionY: initialRadius * radius * Math.sin(phi),//L/2+0.1*L*generateGaussianRandom(), // Initial positionX between 0 and 10

      velocityX: 0*generateGaussianRandom(), //- 50 * Math.cos(phi), //100 * Math.sqrt(2 * dt) * generateGaussianRandom(),
      velocityY: 0*generateGaussianRandom(), //- 50 * Math.sin(phi), //-100 -200 * Math.sqrt(2 * dt) * generateGaussianRandom(),

    });
  }

}

function resetVelocity() {
  for (let i = 0; i < particleNumber; i++) {
    particles[i].velocityX = - 10 * particles[i].positionY * ((i % 2) - 0.5) + 20 * generateGaussianRandom();
    particles[i].velocityY = 10 * particles[i].positionX * ((i % 2) - 0.5) + 20 * generateGaussianRandom();

  }
}


function harmonicForce(position, equilibrium) {
  const F = k * (equilibrium - position)
  return F;
}

function softBoundary(position, wall) {
  const F = - wallForce * Math.sign(position) * Math.exp(8 / L * (Math.abs(position) - wall))
  return F;
}



function LangevinEuler() {




  for (let i = 0; i < particleNumber; i++) {
    // x direction
    noiseX = noiseStrength * generateGaussianRandom();
    Fx = - particles[i].velocityX * gamma + (harmonicForce(particles[i].positionX, targetX[targetIter][i]));
    Fx = Fx + softBoundary(particles[i].positionX, wallPosition);
    particles[i].velocityX = particles[i].velocityX + dt * Fx + noiseX;
    particles[i].positionX = particles[i].positionX + particles[i].velocityX * dt;

    // y direction

    noiseY = noiseStrength * generateGaussianRandom();

    Fy = - particles[i].velocityY * gamma + (harmonicForce(particles[i].positionY, targetY[targetIter][i]));
    Fy = Fy + softBoundary(particles[i].positionY, wallPosition);
    particles[i].velocityY = particles[i].velocityY + dt * Fy + noiseY;
    particles[i].positionY = particles[i].positionY + particles[i].velocityY * dt;


  }
}

function LangevinEulerVectorfield() {




  for (let i = 0; i < particleNumber; i++) {
    // x direction
    noiseX = noiseStrength * generateGaussianRandom();
    noiseY = noiseStrength * generateGaussianRandom();

    phi = Math.atan2(particles[i].positionY, particles[i].positionX);
    r = Math.sqrt(particles[i].positionX * particles[i].positionX + particles[i].positionY * particles[i].positionY);
    r0 = 2.5 * L / 3 * (0.5 + 0.5 * Math.sin(radialSymmetry * phi));


    Fx = - gamma * particles[i].velocityX;
    Fx = Fx - veloForce * Math.sin(velocityPeriod * Math.PI * r / L) * (Math.exp(-r / L / velocityScreening) + 0.1) * (particles[i].positionY);
    Fx = Fx + posForceOne * Math.sin(periodOne * Math.PI * r / L) * (equilibriumDistanceScaleOne * r0 - r) * Math.cos(phi)
    Fx = Fx + posForceTwo * (equilibriumDistanceScaleTwo * r0 - r) * Math.cos(phi);

    Fy = - particles[i].velocityY * gamma;
    Fy = Fy + veloForce * Math.sin(velocityPeriod * Math.PI * r / L) * (Math.exp(-r / L / velocityScreening) + 0.1) * (particles[i].positionX);
    Fy = Fy + posForceOne * Math.sin(periodOne * Math.PI * r / L) * (equilibriumDistanceScaleOne * r0 - r) * Math.sin(phi)
    Fy = Fy + posForceTwo * (equilibriumDistanceScaleTwo * r0 - r) * Math.sin(phi);



    particles[i].velocityX = particles[i].velocityX + dt * Fx + noiseX;
    particles[i].velocityY = particles[i].velocityY + dt * Fy + noiseY;




    particles[i].positionX = particles[i].positionX + particles[i].velocityX * dt;
    particles[i].positionY = particles[i].positionY + particles[i].velocityY * dt;


  }
}



function simulate() {

  setTimeout(updateScatter,0);


  if (stepCount == -80) {
    dt = 0.01;
    veloForce = 60;
    posForceOne = 0;
    posForceTwo = 0;
    gamma = 50;
  }

  if (stepCount == -1) {
    dt = 0.01;
    noiseStrength = 2 * Math.sqrt(dt);
   
  }


  // noiseStrength = 0;
  if (stepCount == loop) {
    stepCount = 0;
    

  }

  if (stepCount == 0) {
    noiseStrength = 60 * Math.sqrt(dt);
    gamma = 0.3;
    k = 1;
    // targetIter = Math.floor(targetNumber * Math.random());
    targetIter = (targetIter + 1) % targetNumber;
    // console.log(1)
    // resetVelocity();
  }

  if (stepCount == Math.floor(loop * 0.30)) {
    k = 4
    gamma = 1.5;
    noiseStrength = 55 * Math.sqrt(dt);
    // console.log(2)

    // targetIter = Math.floor(targetNumber * Math.random());
    // resetVelocity();
  }

  if (stepCount == Math.floor(loop * 0.5)) {
    noiseStrength = 18 * Math.sqrt(dt);
    gamma = 6;
    k = 16;
    // console.log(3)

    // targetIter = Math.floor(targetNumber * Math.random());
    // resetVelocity();
  }

  if (targetIter < 0) {
    setTimeout(LangevinEulerVectorfield,0);
  } else {
    setTimeout(LangevinEuler,0);
  }
  stepCount++;
 
  requestAnimationFrame(simulate);

}
