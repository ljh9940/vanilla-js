const clock = document.querySelector("#clock");

function getTime() {
  const xdate = new Date("2022-12-25");
  const date = new Date();
  const diff = xdate - date;

  const secondsIn = Math.floor(diff / 1000);
  const minutuesIn = Math.floor(secondsIn / 60);
  const hoursIn = Math.floor(minutuesIn / 60);
  const days = Math.floor(hoursIn / 24);
  const seconds = secondsIn % 60;
  const minutues = minutuesIn % 60;
  const hours = hoursIn % 24;
  const daysStr = `${days < 10 ? `0${days}` : days}`;
  const hoursStr = `${hours < 10 ? `0${hours}` : hours}`;
  const minutuesStr = `${minutues < 10 ? `0${minutues}` : minutues}`;
  const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}`;

  clock.innerText = `${daysStr}d ${hoursStr}h ${minutuesStr}m ${secondsStr}s`;
}

getTime();
setInterval(getTime, 1000);
