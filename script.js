let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
  let currentTime = new Date();

  hours.innerHTML = String(currentTime.getHours()).padStart(2, '0');
  minutes.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
  seconds.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');
}, 1000);
