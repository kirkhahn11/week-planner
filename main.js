var daysOfTheWeek = document.querySelectorAll('.days-of-week');
var scheduleText = document.getElementById('schedule-text')

for (var i = 0; i < daysOfTheWeek.length; i++) {
  daysOfTheWeek[i].addEventListener('click', addEvent)
}

function addEvent() {
  scheduleText.textContent = 'Scheduled Events for ' + event.target.textContent
  console.log(event.target)
}
