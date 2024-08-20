function convertToCelsius(temp) {
    return ((temp - 32) * 5/9).toFixed(1);
}

function convertToFahrenheit(temp) {
    return ((temp * 9/5) + 32).toFixed(1);
}

console.log(convertToCelsius(100)); 
console.log(convertToFahrenheit(0)); 
