const API_KEY = "18f1a5facebfc6b4cd4e27fd58671da9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      city.innerHTML = data.name;
      weather.innerHTML = `</br> ${data.main.temp}℃ ${data.weather[0].main} `;
    });
}
function onGeoError() {
  alert("Can't find it");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
