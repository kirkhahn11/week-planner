var daysOfTheWeek = document.querySelectorAll('.days-of-week');
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');

container.addEventListener('click', addEvent);

function addEvent() {
  if (event.target.textContent === 'Sunday' || event.target.textContent === 'Monday' ||
    event.target.textContent === 'Tuesday' || event.target.textContent === 'Wednesday' ||
    event.target.textContent === 'Thursday' || event.target.textContent === 'Friday' ||
    event.target.textContent === 'Saturday') {
      scheduleText.textContent = 'Scheduled Events For ' + event.target.textContent
      console.log(event.target)
  }
}
