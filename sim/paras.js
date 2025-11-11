

let timeScaling =  1.5;  //1.2;

const loop = Math.round(420 * timeScaling);
const offset = -  Math.round(280 * timeScaling);
let stepCount = offset;

const L = 250;



const forthPi = 3.1415 / 4;
const halfPi = 3.1415 / 2;
const onePi = 3.1415;
const twoPi = 2 * 3.1415;
const fourPi = 4 * 3.1415;



const defaultDt = 0.01 / timeScaling;
const vectorDt = 0.004 / timeScaling;




let k = 1;

// globals
let particleNumber = targetX[0].length;

const x = new Float32Array(particleNumber);
const y = new Float32Array(particleNumber);

const vx = new Float32Array(particleNumber);
const vy = new Float32Array(particleNumber);


const positions = new Float32Array(particleNumber * 2);




// set target, -1 will use the vector field animation
let targetIndex = -1;



//  initial values for velocity-field animation

let dt = vectorDt;

const r00 = 2.5 * L / 3;




let noiseStrength = 300 * Math.sqrt(0.004);
let gamma = 32;

let radialSymmetry = 9;

let veloForce = 95;
let posForceOne = 20;
let posForceTwo = 100;

let periodOne = 7;

let equilibriumDistanceScaleOne = 0.3;
let equilibriumDistanceScaleTwo = 1;

let velocityPeriod = periodOne;
let velocityScreening = 5;

