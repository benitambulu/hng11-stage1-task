function fetchAndDisplayUTCTime() {
    const timeElement = document.querySelector(".time");
    const now = new Date();
    const utcHours = now.getUTCHours();
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, "0");
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, "0");
    const amPm = utcHours >= 12 ? "PM" : "AM";
    const hours12 = utcHours % 12 || 12; 
    const utcTime = `${hours12}:${utcMinutes}:${utcSeconds} ${amPm}`;
    timeElement.innerHTML = `UTC Time: ${utcTime}`;
  }
  
  function fetchAndDisplayDayOfWeek() {
    const dayOfWeekElement = document.querySelector(".dayOfTheWeek");
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDayOfWeek = new Date().getDay();
    const dayName = daysOfWeek[currentDayOfWeek];
    dayOfWeekElement.innerHTML = `Day of the Week: ${dayName}`;
  }
  
  function updateDateTime() {
    fetchAndDisplayUTCTime();
    fetchAndDisplayDayOfWeek();
  }
  
  updateDateTime();
  
  setInterval(updateDateTime, 1000);

