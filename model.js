const model = {
  appDiv: document.getElementById("app"),
  html: "",
  currentTimeInfo: {
    Date: "",
    Month: "",
    Day: "",
    Hour: "",
    Minute: "",
    Second: "",
  },
  targetTimeInfo: {
    Month: 12,
    Day: 31,
    Hour: 24,
    Minute: 0,
    Second: 0,
  },
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  daysInMonth: [31, 28, 31, 30, , 31, 30, 31, 31, 30, 31, 30, 31],
};