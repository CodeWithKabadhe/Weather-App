const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('lookup-btn').addEventListener('click', () => {
  const locationInput = document.getElementById('location-input');
  const location = locationInput.value;

  // Make API call to OpenWeatherMap
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      displayWeather(data);
    })
    .catch(error => {
      console.log('Error fetching weather data:', error);
    });
});

function displayWeather(data) {
  const weatherInfo = document.getElementById('weather-info');

  if (data.cod === '404') {
    weatherInfo.innerHTML = '<p>Location not found. Please try again.</p>';
  } else {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    weatherInfo.innerHTML = `<p>Location: ${name}</p>
                              <p>Temperature: ${temperature}°C</p>
                              <p>Description: ${description}</p>`;
  }
}
