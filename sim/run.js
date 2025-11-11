const canvas = document.getElementById('canvas');

// canvas.parentElement.style.height = window.innerHeight + 'px';

// Ask for premultipliedAlpha:false to avoid premultiplication surprises in some browsers
const webGlOptions = {
    alpha: false,               // no alpha channel → faster opaque rendering
    antialias: false,           // disables multisampling
    depth: false,               // no z-buffer needed for 2D
    stencil: false,             // no stencil buffer
    premultipliedAlpha: false,  // skip blending handling
    preserveDrawingBuffer: false, // allows GPU to reuse frame buffer memory
    powerPreference: "high-performance"
}

const webGlContext = canvas.getContext('webgl', webGlOptions) || canvas.getContext('experimental-webgl', webGlOptions);


//|| canvas.getContext('experimental-webgl');
let canvasIsInViewport = true;
let canvasIsInViewportExtended = true;


if (!webGlContext) {
    alert('WebGL not supported');
    throw new Error('WebGL not supported');
}

// Enable blending so fragment alpha (0.5) actually shows as transparency
webGlContext.enable(webGlContext.BLEND);
webGlContext.blendFunc(webGlContext.SRC_ALPHA, webGlContext.ONE_MINUS_SRC_ALPHA);

// Optional: ensure depth testing is off for 2D blending
webGlContext.disable(webGlContext.DEPTH_TEST);


// --- Shaders ---
const vertexShaderSource = `
attribute vec2 aPosition;
attribute float aSize;
uniform vec2 uResolution;

void main() {
  // Convert from pixels to clip space in one step
  vec2 clipSpace = (aPosition / uResolution) * 2.0 - 1.0;

  // Flip Y by negating the y-component directly
  gl_Position = vec4(clipSpace.x, -clipSpace.y, 0.0, 1.0);
  gl_PointSize = aSize;
}
`;

const fragmentShaderSource = `
precision lowp float;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  if (dot(c, c) > 0.25) discard;

  gl_FragColor = vec4(1.0, 1.0, 1.0, 0.2);
}
`;


const vertexShader = compile(webGlContext.VERTEX_SHADER, vertexShaderSource);
const fragmentShader = compile(webGlContext.FRAGMENT_SHADER, fragmentShaderSource);


// create context and attach shaders
const program = webGlContext.createProgram();
webGlContext.attachShader(program, vertexShader);
webGlContext.attachShader(program, fragmentShader);
webGlContext.linkProgram(program);
if (!webGlContext.getProgramParameter(program, webGlContext.LINK_STATUS)) {
    console.error(webGlContext.getProgramInfoLog(program));
    throw new Error('Program link error');
}
webGlContext.useProgram(program);


const posLoc = webGlContext.getAttribLocation(program, 'aPosition');
const sizeLoc = webGlContext.getAttribLocation(program, 'aSize');
const resolutionLoc = webGlContext.getUniformLocation(program, 'uResolution');

// Particle data
let rescaleFactor = 0;
let plotSize = 0;

const sizes = new Float32Array(particleNumber);
const sizesUnscaled = new Float32Array(particleNumber);

for (let i = 0; i < particleNumber; i++) {
    sizesUnscaled[i] = Math.min(Math.abs(3 * generateGaussianRandom()) + 2, 6);
    sizes[i] = rescaleFactor * sizesUnscaled[i];
}


// initialize


initializeParticles();
copyValues();


/////////////////////////////////////////
// position buffer
function initializeBuffers() {

    posBuffer = webGlContext.createBuffer();
    webGlContext.bindBuffer(webGlContext.ARRAY_BUFFER, posBuffer);
// allocate
    webGlContext.bufferData(webGlContext.ARRAY_BUFFER, positions, webGlContext.STATIC_DRAW);
//set vertex attribute
    webGlContext.enableVertexAttribArray(posLoc);
    webGlContext.vertexAttribPointer(posLoc, 2, webGlContext.FLOAT, false, 0, 0);

////////////////////////////////////////
//size buffer
    sizeBuffer = webGlContext.createBuffer();
    webGlContext.bindBuffer(webGlContext.ARRAY_BUFFER, sizeBuffer);
// allocate
    webGlContext.bufferData(webGlContext.ARRAY_BUFFER, sizes, webGlContext.STATIC_DRAW);
//set vertex attribute
    webGlContext.enableVertexAttribArray(sizeLoc);
    webGlContext.vertexAttribPointer(sizeLoc, 1, webGlContext.FLOAT, false, 0, 0);

}

let posBuffer = null;
let sizeBuffer = null
initializeBuffers();


// animation
let last = 0;
const simulationUpdateTime = 15; //  below 60Hz and above 90Hz


checkCanvasVisibility(canvas);
clear();
buffer();
setTimeout(() => {
    canvas.style.opacity = '1';
    requestAnimationFrame(updateFrame);
}, 600)


function updateFrame(timestamp) {
    checkCanvasVisibility(canvas)


    if (canvasIsInViewport) {


        if ((timestamp - last) >= simulationUpdateTime) {
            last = timestamp;
            resizeCanvasWrapper();
            resizeCanvas();
            clear();
            draw();
            setTimeout(() => {

                simulate();
                copyValues();
                buffer();

            }, 0);


        }
        // let last
        requestAnimationFrame(updateFrame);
        return;
    }

    if (canvasIsInViewportExtended) {
        resizeCanvasWrapper();
        resizeCanvas();
        clear();
        copyValues();
        buffer();
        draw();
        requestAnimationFrame(updateFrame);

        return;

    }

    setTimeout(() => {
        requestAnimationFrame(updateFrame);
    }, 100);

}


function buffer() {

// update positions
    webGlContext.bindBuffer(webGlContext.ARRAY_BUFFER, posBuffer);
    // webGlContext.bufferData(webGlContext.ARRAY_BUFFER, positions, webGlContext.DYNAMIC_DRAW);
    webGlContext.bufferSubData(webGlContext.ARRAY_BUFFER, 0, positions);

    // update sizes
    webGlContext.bindBuffer(webGlContext.ARRAY_BUFFER, sizeBuffer);
    webGlContext.bufferSubData(webGlContext.ARRAY_BUFFER, 0, sizes);
    webGlContext.bufferData(webGlContext.ARRAY_BUFFER, sizes, webGlContext.STATIC_DRAW);

}

function clear() {
    // webGlContext.clearColor(1.2980, 0.5020, 0.7176, 1); // pink debug color
    webGlContext.clearColor(0.2980, 0.5020, 0.7176, 1);
    webGlContext.clear(webGlContext.COLOR_BUFFER_BIT);
}

function draw() {

    webGlContext.drawArrays(webGlContext.POINTS, 0, particleNumber);
}


function checkCanvasVisibility(element) {
    canvasIsInViewport = element.getBoundingClientRect().bottom >= transparencyThresholds[transparencyThresholdId]; //0.05 * Math.min(window.innerHeight, window.innerWidth)
    canvasIsInViewportExtended = element.getBoundingClientRect().bottom >= -window.visualViewport.height; //0.05 * Math.min(window.innerHeight, window.innerWidth)
    // setTimeout(() => {
    //     checkCanvasVisibility(element)
    // }, 100);

}


function copyValues() {
    for (let i = 0; i < particleNumber; i++) {
        positions[i * 2] = canvas.width / 2 + rescaleFactor * x[i];
        positions[i * 2 + 1] = canvas.height / 2 - rescaleFactor * y[i];
        sizes[i] = rescaleFactor * sizesUnscaled[i];
        // random size (pixel units). Increase multiplier if using high-dpr canvas to keep visual size
    }
}

function compile(type, source) {
    const s = webGlContext.createShader(type);
    webGlContext.shaderSource(s, source);
    webGlContext.compileShader(s);
    if (!webGlContext.getShaderParameter(s, webGlContext.COMPILE_STATUS)) {
        console.error(webGlContext.getShaderInfoLog(s));
        throw new Error('Shader compile error');
    }
    return s;
}

// Resize 

//
//
function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    // canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';


    const plotSizeTarget = Math.min(canvas.width, canvas.height)


    if (plotSize !== plotSizeTarget) {


        let deltaPlotSize = 0.05 * (plotSizeTarget - plotSize);

        if (Math.abs(deltaPlotSize) < 1) {
            deltaPlotSize = Math.sign(deltaPlotSize);
        }


        plotSize = plotSize + deltaPlotSize;
        rescaleFactor = plotSize / 400;


        webGlContext.viewport(0, 0, canvas.width, canvas.height);
        webGlContext.uniform2f(resolutionLoc, canvas.width, canvas.height);

    }
}


function resizeCanvasWrapper() {

    const heightTarget = window.innerHeight + 10;
    let height = canvas.parentElement.clientHeight;


    if (height !== heightTarget) {
        const delta = 0.15
        let deltaHeight = delta * (heightTarget - height) ;
        if (Math.abs(deltaHeight) < 1) {
            deltaHeight = Math.sign(deltaHeight);
        }
        height = height + deltaHeight;
        canvas.parentElement.style.height = height + 'px';
    }


}


function generateGaussianRandom() {
    let u1 = Math.random();
    let u2 = Math.random();
    return Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
}




