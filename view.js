function view() {
  const countdownInterval = setInterval(getTimeLeft, 1000);
  model.appDiv.innerHTML = model.html;
}
