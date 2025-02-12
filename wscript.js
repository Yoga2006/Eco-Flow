const apiKey = '878fe336e5b97e43504b522bf29ceaa3'; // Replace with your OpenWeatherMap API key
const weatherInfo = document.getElementById('weather-info');
const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('getWeather');

getWeatherButton.addEventListener('click', () => {
    const cityName = cityInput.value.trim();
    if (cityName) {
        fetchWeather(cityName);
    } else {
        weatherInfo.innerHTML = `<p id="error-message">Please enter a city name.</p>`;
    }
});

async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === 200) {
            const { name, main, weather } = data;
            weatherInfo.innerHTML = `
                <h2>${name}</h2>
                <p>${weather[0].description}</p>
                <p><strong>Temperature:</strong> ${main.temp}°C</p>
                <p><strong>Humidity:</strong> ${main.humidity}%</p>
                <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
            `;
        } else {
            weatherInfo.innerHTML = `<p id="error-message">City not found. Please try again.</p>`;
        }
    } catch (error) {
        weatherInfo.innerHTML = `<p id="error-message">An error occurred. Please try again later.</p>`;
    }
}
