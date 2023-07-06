function getWeather() {
  const city = document.getElementById('city-input').value;
  const apiKey = 'YOUR_API_KEY'; // 替换为你的OpenWeatherMap API密钥

  // 发送API请求获取天气数据
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        document.getElementById('weather-info').innerHTML = '未找到该城市的天气信息';
      } else {
        const weatherDescription = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const weatherInfo = `天气描述: ${weatherDescription}<br>温度: ${temperature}K<br>湿度: ${humidity}%`;

        document.getElementById('weather-info').innerHTML = weatherInfo;
      }
    })
    .catch(error => {
      console.log(error);
    });
}
