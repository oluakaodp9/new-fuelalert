<<<<<<< HEAD:old-user/reportfuel.js
const reportFuelPriceForm = document.getElementById('reportFuelPrice-form');

reportFuelPriceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const stationName = document.getElementById('stationName').value;
  const stationArea = document.getElementById('stationArea').value;
  const stationPrice = document.getElementById('stationPrice')
  const stationState = document.getElementById('stationState').value;
  const stationCountry = document.getElementById('stationCountry').value;

  // Prepare API request data
  const reportData = {
    stationName,
    stationArea,
    stationPrice,
    stationState,
    stationCountry,
  };

  // Send API request using fetch 
  fetch('https://FuelAlert.myf2.net/api/fuel_price_apis/create_fuel_price.php ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reportData)
  })
    .then(response => response.json())
    .then(responseData => {
      // Handle successful response
      console.log('Station reported successfully!');
    })
    .catch(error => {
      // Handle API error
      console.error('Error reporting station:', error);
    });
=======
const reportFuelPriceForm = document.getElementById('reportFuelPrice-form');

reportFuelPriceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const stationName = document.getElementById('stationName').value;
  const stationArea = document.getElementById('stationArea').value;
  const stationPrice = document.getElementById('stationPrice').value;
  const stationState = document.getElementById('stationState').value;
  const stationCountry = document.getElementById('stationCountry').value;

  // Prepare API request data
  const reportData = {
    stationName,
    stationArea,
    stationPrice,
    stationState,
    stationCountry,
  };

  // Send API request using fetch 
  fetch('https://FuelAlert.myf2.net/api/fuel_price_apis/create_fuel_price.php ', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reportData)
  })
    .then(response => response.json())
    .then(responseData => {
      // Handle successful response
      console.log('Station reported successfully!');
    })
    .catch(error => {
      // Handle API error
      console.error('Error reporting station:', error);
    });
>>>>>>> 04caa00f8a65eb486531bb999e42f1aae6dac611:user/reportfuel.js
});