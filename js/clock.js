const clocks = document.getElementById("clocks");

function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clocks.innerText = `${hours}:${minutes}`;
}
getTime();
setInterval(getTime, 1000);
