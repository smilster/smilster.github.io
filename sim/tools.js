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








function generateGaussianRandom() {
  let u1 = Math.random();
  let u2 = Math.random();
  let z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  // if (z0 < -5) {
  //     z = -5;
  // } else if (z0 > 5) {
  //     z = 5;
  //  }
  return z0;
}


function isInViewport(element) {
  isInVP = element.getBoundingClientRect().bottom >= 0.05 * Math.min(window.innerHeight, window.innerWidth)
  setTimeout(() => {
    isInViewport(element)
  }, 100);
}



