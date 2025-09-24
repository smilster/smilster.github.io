const canvas = document.getElementById('canvas');
// Ask for premultipliedAlpha:false to avoid premultiplication surprises in some browsers
const gl = canvas.getContext('webgl', { premultipliedAlpha: false }) || canvas.getContext('experimental-webgl');
if (!gl) {
  alert('WebGL not supported');
  throw new Error('WebGL not supported');
}

// Enable blending so fragment alpha (0.5) actually shows as transparency
gl.enable(gl.BLEND);
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

// Optional: ensure depth testing is off for 2D blending
gl.disable(gl.DEPTH_TEST);

let rescaleFactor = 0;
let plotSize = 0;
let canvasWidth = 0;
let canvasHeight = 0;

// Resize 
function resize() {
  plotSize = Math.min(canvas.clientWidth, canvas.clientHeight);
  rescaleFactor = plotSize / 400;


  canvas.width = Math.floor(canvas.clientWidth);
  canvas.height = Math.floor(canvas.clientHeight);
  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  gl.viewport(0, 0, canvas.width, canvas.height);
}
window.addEventListener('resize', resize);
resize();

// --- Shaders ---
const vsSource = `
  attribute vec2 aPosition;
  attribute float aSize;
  uniform vec2 uResolution;
  void main() {
    vec2 zeroToOne = aPosition / uResolution;
    vec2 clipSpace = zeroToOne * 2.0 - 1.0;
    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
    gl_PointSize = aSize;
  }
`;

const fsSource = `
  precision mediump float;
  void main() {
    // make the square point into a circle
    vec2 c = gl_PointCoord - vec2(0.5);
    float r = length(c);
    if (r > 0.5) discard;

    gl_FragColor = vec4(1, 1, 1, 0.2);
  }
`;


function compile(type, source) {
  const s = gl.createShader(type);
  gl.shaderSource(s, source);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(s));
    throw new Error('Shader compile error');
  }
  return s;
}

const vs = compile(gl.VERTEX_SHADER, vsSource);
const fs = compile(gl.FRAGMENT_SHADER, fsSource);

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  console.error(gl.getProgramInfoLog(program));
  throw new Error('Program link error');
}
gl.useProgram(program);


const posLoc = gl.getAttribLocation(program, 'aPosition');
const sizeLoc = gl.getAttribLocation(program, 'aSize');
const resolutionLoc = gl.getUniformLocation(program, 'uResolution');

// Particle data



const sizes = new Float32Array(particleNumber);
const sizezUnscaled = new Float32Array(particleNumber);

for (let i = 0; i < particleNumber; i++) {
  sizezUnscaled[i] = Math.min(Math.abs(3 * generateGaussianRandom()) + 2, 6);
  sizes[i] = rescaleFactor * sizezUnscaled[i];
}


// initialize
initializeParticles();
copyValues();

// Create and bind buffers
const posBuffer = gl.createBuffer();
const sizeBuffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
gl.enableVertexAttribArray(posLoc);
gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
gl.enableVertexAttribArray(sizeLoc);
gl.vertexAttribPointer(sizeLoc, 1, gl.FLOAT, false, 0, 0);


// animation
let last = 0;
const simulationUpdateTime = 16; // 16ms just below 60Hz and above 120Hz
function updateFrame(timestamp) {
  
  if (isInVP) {
    if ((timestamp - last) >= simulationUpdateTime) {
      last = timestamp;
      
      simulate();
      copyValues();
      draw();
    
    } 
    // let last 
    


    requestAnimationFrame(updateFrame);

  } else {
    setTimeout(() => {
      requestAnimationFrame(updateFrame);
    }, 100);
  }
}




function draw() {
  let opacity = 1;

  if (targetIndex == -1) {
    opacity = Math.min((stepCount - offset) / 100 + 0, 1.0);
  }

  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);

  gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
  // if sizes don't change, you could bufferData once outside the loop and skip this every frame.
  gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);

  // render
  gl.viewport(0, 0, canvasWidth, canvasHeight);
  gl.clearColor(0.2980, 0.5020, 0.7176, opacity);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.uniform2f(resolutionLoc, canvasWidth, canvasHeight);
  gl.drawArrays(gl.POINTS, 0, particleNumber);
}

function copyValues() {
  for (let i = 0; i < particleNumber; i++) {
    positions[i * 2] = canvasWidth / 2 + rescaleFactor * x[i];
    positions[i * 2 + 1] = canvasHeight / 2 - rescaleFactor * y[i];
    sizes[i] = rescaleFactor * sizezUnscaled[i];
    // random size (pixel units). Increase multiplier if using high-dpr canvas to keep visual size
  }
}



isInViewport(canvas);

requestAnimationFrame(updateFrame);