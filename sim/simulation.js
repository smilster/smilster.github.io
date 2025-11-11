


function initializeParticles() {

  for (let i = 0; i < particleNumber; i++) {

    const phiInitial = twoPi * Math.random();
    
    const radiusScale = (Math.random() - 0.5)

    x[i] = L/5 * radiusScale * Math.cos(phiInitial);
    y[i] = L/5 * radiusScale * Math.sin(phiInitial);
    vx[i] = 0;
    vy[i] = 0;


  }

}







function LangevinEuler() {


  for (let i = 0; i < particleNumber; i++) {
    const noiseX = noiseStrength * 2 * (Math.random() - 0.5);
    const Fx = -vx[i] * gamma + k * (targetX[targetIndex][i] - x[i]);
    vx[i] += dt * Fx + noiseX;
    x[i] += vx[i] * dt;

    const noiseY = noiseStrength * 2 * (Math.random() - 0.5);;
    const Fy = - vy[i] * gamma + k * (targetY[targetIndex][i] - y[i]);
    vy[i] += dt * Fy + noiseY;
    y[i] += vy[i] * dt;
  }



}

function LangevinEulerVectorfield() {



  for (let i = 0; i < particleNumber; i++) {




    const phi = Math.atan2(y[i], x[i]);


    const r = Math.sqrt(x[i] * x[i] + y[i] * y[i]);
    const r0 = r00 * (0.5 + 0.5 * Math.sin(radialSymmetry * phi));



    const noiseX = noiseStrength * 2 * (Math.random() - 0.5);
    let Fx = 0;

    Fx = -gamma * vx[i];
    Fx -= veloForce * Math.sin(velocityPeriod * onePi * r / L) * (Math.exp(-r / L / velocityScreening) + 0.1) * (y[i]);
    Fx += posForceOne * Math.sin(periodOne * onePi * r / L) * (equilibriumDistanceScaleOne * r0 - r) * Math.cos(phi)
    Fx += posForceTwo * (equilibriumDistanceScaleTwo * r0 - r) * Math.cos(phi);



    const noiseY = noiseStrength * 2 * (Math.random() - 0.5);
    let Fy = 0;
    Fy = -gamma * vy[i];
    Fy += veloForce * Math.sin(velocityPeriod * onePi * r / L) * (Math.exp(-r / L / velocityScreening) + 0.1) * (x[i]);
    Fy += posForceOne * Math.sin(periodOne * onePi * r / L) * (equilibriumDistanceScaleOne * r0 - r) * Math.sin(phi)
    Fy += posForceTwo * (equilibriumDistanceScaleTwo * r0 - r) * Math.sin(phi);


    vx[i] += dt * Fx + noiseX;
    x[i] += vx[i] * dt;
    vy[i] += dt * Fy + noiseY;
    y[i] += vy[i] * dt;
  }




}






function simulate() {



  if (stepCount == loop) {
    stepCount = 0;


  }

  if (stepCount == 0) {
    noiseStrength = 100 * Math.sqrt(dt);
    gamma = 0.05;
    k = 1;
    targetIndex = (targetIndex + 1) % targetNumber;

  }

  if (stepCount == Math.floor(loop * 0.30)) {
    k = 4
    gamma = 1.5;
    noiseStrength = 55 * Math.sqrt(dt);

  }

  if (stepCount == Math.floor(loop * 0.5)) {
    noiseStrength = 18 * Math.sqrt(dt);
    gamma = 6;
    k = 16;
 
  }


  if (targetIndex < 0) {
    

    if (stepCount >= -80) {
       veloForce = 1.01*veloForce;
      dt = 1.01 * dt;
      posForceOne = 0.95*posForceOne;
      posForceTwo = 0.95*posForceTwo;
    }

    


    LangevinEulerVectorfield();

  } else {
    dt = defaultDt;

    LangevinEuler();

  }

  stepCount++;



}



