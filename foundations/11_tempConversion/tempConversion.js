const convertToCelsius = function(tempInF) {
  //  temp-32 * (5/9)
  // Round to 1 dp
  let tempInC = (tempInF - 32) * (5/9);
  return Math.round(tempInC*10)/10;
};

const convertToFahrenheit = function(tempInC) {
  // temp * (9/5) + 32 
  // Round to 1 dp
  let tempInF = tempInC * (9/5) + 32;
  return Math.round(tempInF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
