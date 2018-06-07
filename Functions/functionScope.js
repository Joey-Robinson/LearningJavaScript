const tempConversion = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};

console.log(tempConversion(32));