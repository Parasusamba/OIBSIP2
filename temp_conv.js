document.getElementById('convert').addEventListener('click', function() {
  let temperature = parseFloat(document.getElementById('temperature').value);
  let unit = document.getElementById('unit').value;
  let convertTo = document.getElementById('convert-to').value;
  let result;

  if (isNaN(temperature)) {
      alert("Please enter a valid number");
      return;
  }

  if (unit === 'celsius') {
      if (convertTo === 'fahrenheit') {
          result = (temperature * 9/5) + 32;
          document.getElementById('result').innerText = `${result.toFixed(2)} Fahrenheit`;
      } else if (convertTo === 'kelvin') {
          result = temperature + 273.15;
          document.getElementById('result').innerText = `${result.toFixed(2)} Kelvin`;
      } else {
          document.getElementById('result').innerText = `${temperature.toFixed(2)} Celsius`;
      }
  } else if (unit === 'fahrenheit') {
      if (convertTo === 'celsius') {
          result = (temperature - 32) * 5/9;
          document.getElementById('result').innerText = `${result.toFixed(2)} Celsius`;
      } else if (convertTo === 'kelvin') {
          result = (temperature - 32) * 5/9 + 273.15;
          document.getElementById('result').innerText = `${result.toFixed(2)} Kelvin`;
      } else {
          document.getElementById('result').innerText = `${temperature.toFixed(2)} Fahrenheit`;
      }
  } else { // Kelvin
      if (convertTo === 'celsius') {
          result = temperature - 273.15;
          document.getElementById('result').innerText = `${result.toFixed(2)} Celsius`;
      } else if (convertTo === 'fahrenheit') {
          result = (temperature - 273.15) * 9/5 + 32;
          document.getElementById('result').innerText = `${result.toFixed(2)} Fahrenheit`;
      } else {
          document.getElementById('result').innerText = `${temperature.toFixed(2)} Kelvin`;
      }
  }
});