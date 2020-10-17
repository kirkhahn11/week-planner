var daysOfTheWeek = document.querySelectorAll('.days-of-week');
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');

container.addEventListener('click', addEvent);

function addEvent() {
  if (event.target.id === 'container') {
    return
  } else {
      scheduleText.textContent = 'Scheduled Events For ' + event.target.textContent
      console.log(event.target)
  }
}
