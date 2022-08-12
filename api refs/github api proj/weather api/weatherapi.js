
class WeatherHTTP {
  constructor() {
    this.client_secret = '8c725e9a3b59bbf33cbdf401211092ca';
  }

  async getWeather(someCity, someCountryCode) {
    // GET latitude and logitute with weather API
    let locationResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${someCity},${someCountryCode}&limit=1&appid=${this.client_secret}`);

    if(!locationResponse.ok) {
      throw new Error(`HTTP error! status: ${locationResponse.status}`);
    }
    let locationJson = await locationResponse.json();
    let locationLat = locationJson[0].lat;
    let locationLong = locationJson[0].lon;

    let weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLong}&appid=${this.client_secret}`);

    if(!weatherResponse.ok) {
      throw new Error(`HTTP error! status: ${weatherResponse.status}`)
    }
    return await weatherResponse.json();
  }
}
