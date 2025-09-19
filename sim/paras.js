
let loop = 380;

let stepCount = - 300;
let particles = [];

let positions = [];

let distances = [];



let L = 250;

let wallPosition = 0.9 * L;
let wallForce = 400;


let k = 1;



let particleNumber = targetX[0].length;
// let Nold = 1;



let targetIter = -1;



//  initial values for velocity-field animation

let dt = 0.004;

let initialRadius = L/20 ;

let noiseStrength = 300 * Math.sqrt(dt);
let gamma = 32;

let radialSymmetry = 9;

let veloForce = 95;
let posForceOne = 20;
let posForceTwo = 100;

let periodOne =7;

let equilibriumDistanceScaleOne = 0.3;
let equilibriumDistanceScaleTwo = 1;

let velocityPeriod = periodOne ;
let velocityScreening = 5 ;


// BACKUP
//  initial values for velocity-field animation

// let initialRadius = L / 10;

// let noiseStrength = 0 * Math.sqrt(dt);
// let gamma = 2.8;

// let radialSymmetry = 7;

// let veloForce = 12;
// let posForceOne = 5;
// let posForceTwo = 1;

// let periodOne = 5;

// let equilibriumDistanceScaleOne = 0.3;
// let equilibriumDistanceScaleTwo = 0.6;

// let velocityPeriod = 3 / L;
// let velocityScreening = L / 3;


