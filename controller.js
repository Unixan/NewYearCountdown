function getCurrentTimeInfo() {
  model.timeInfo = "";
  model.currentTimeInfo.Date = new Date();
  let currentDate = model.currentTimeInfo.Date;
  model.currentTimeInfo.Month = currentDate.getMonth();
  model.currentTimeInfo.Day = currentDate.getDate();
  model.currentTimeInfo.Hour = currentDate.getHours();
  model.currentTimeInfo.Minute =
    currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes();
  model.currentTimeInfo.Second =
    currentDate.getSeconds() < 10
      ? "0" + currentDate.getSeconds()
      : currentDate.getSeconds();
}

function getTimeLeft() {
  getCurrentTimeInfo();
  let countDown = "";
  daysLeft = model.targetTimeInfo.Day - model.currentTimeInfo.Day - 1;
  hoursLeft = model.targetTimeInfo.Hour - model.currentTimeInfo.Hour - 1;
  minutesLeft = 59 - model.currentTimeInfo.Minute;
  secondsLeft = 59 - model.currentTimeInfo.Second;
  model.html = /*HTML*/ `
<h1> Time Left of 2022!</h1>
  <div class="countDown">
    <div class="countdownBox">${daysLeft} Days</div>
    <div class="countdownBox">${hoursLeft} Hours</div>
    <div class="countdownBox">${minutesLeft} Minutes</div>
    <div class="countdownBox">${secondsLeft} seconds</div>
</div>
  `;
  model.appDiv.innerHTML = model.html;
}
