// weather.js

const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,cloud_cover,precipitation&temperature_unit=fahrenheit&precipitation_unit=inch";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = data.current.temperature_2m;
    const precipitation = data.current.precipitation;
    const cloudCover = data.current.cloud_cover;

    const emoji = cloudCover > 50 ? "☁️" : "☀️";

    document.querySelector('.weather').innerHTML = `
      <h4>Current Weather</h4>
      <div class="row">
        <div class="col-md-6">
          Precipitation: ${precipitation}"<br>
          Temperature: ${temp}°F
        </div>
        <div class="col-md-6 emoj">${emoji}</div>
      </div>
    `;
  })
  .catch(error => {
    console.error("Failed to fetch weather data:", error);
  });
