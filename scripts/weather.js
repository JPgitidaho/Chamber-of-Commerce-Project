document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '39a93938e81e6967af92542761303653';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Santiago,cl&appid=${apiKey}&units=imperial`;

// Fetch forecast weather data from the OpenWeatherMap API
async function getForecastWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract current weather data
        const currentWeatherData = data.list[0];
        // Extract forecast weather data for today and the next three days
        const forecastData = data.list.filter((item, index) => index % 8 === 0);

        // Call the callback function to handle forecast weather data
        getForecastData(currentWeatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather forecast information:', error);
    }
}


    // Callback function to handle forecast weather data
    function getForecastData(currentWeatherData, forecastData) {
        // Extract relevant information from the forecast data object
        // Filter the forecast data to get information for the next three days
        const nextThreeDaysForecast = filterForecastData(forecastData);
        // Display forecast weather information on the page
        displayForecastWeather(nextThreeDaysForecast);
    }

// Function to filter the forecast data to get information for today and the next three days
function filterForecastData(forecastData) {
    const nextThreeDaysForecast = [];
    const today = new Date();
    let count = 0;

    forecastData.forEach(item => {
        const forecastDate = new Date(item.dt_txt);

        if (forecastDate >= today && count < 4) {
            nextThreeDaysForecast.push({
                date: forecastDate.toLocaleDateString('en-US', { weekday: 'long' }),
                temperature: item.main.temp.toFixed(1), // Temperature in Celsius
                description: item.weather[0].description,
                icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`
            });
            count++;
        }
    });

    return nextThreeDaysForecast;
}

    // Function to display forecast weather information on the page
    function displayForecastWeather(forecastData) {
        const weatherInfoElement = document.getElementById('weather-info');
        
        if (!weatherInfoElement) {
            console.error('Element with ID "weather-info" not found.');
            return;
        }

        // Clear previous forecast information
        weatherInfoElement.innerHTML = '';

        // Loop through the forecast data and create HTML elements to display it
        forecastData.forEach(dayForecast => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('card');

            const dateElement = document.createElement('p');
            dateElement.textContent = dayForecast.date;
            dayElement.appendChild(dateElement);

            const iconElement = document.createElement('img');
            iconElement.src = dayForecast.icon;
            iconElement.alt = dayForecast.description;
            dayElement.appendChild(iconElement);

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = `${dayForecast.description}`;
            dayElement.appendChild(descriptionElement);

            const temperatureElement = document.createElement('p');
            temperatureElement.textContent = `${dayForecast.temperature} °F`;
            dayElement.appendChild(temperatureElement);

            weatherInfoElement.appendChild(dayElement);
        });
    }
 

    // Call the function to get forecast weather information when the page loads
    getForecastWeather();
});
