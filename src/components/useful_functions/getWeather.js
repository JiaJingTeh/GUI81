
export async function getWeather(cityName) {
  const apiKey = '041c6095b46899deeb41d26b502d85a7';
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      const weatherData = {
        main: data.weather[0].main,
        city: data.name,
        weather: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      };
      return weatherData;
    } else {
      throw new Error(data.message || 'Failed to fetch weather data');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
