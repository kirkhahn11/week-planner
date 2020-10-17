var daysOfTheWeek = document.querySelectorAll('.days-of-week');
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');
var modal = document.getElementById('modal')
var addEntryButton = document.getElementById('add-entry')
var submitButton = document.getElementById('submit')
var timeData = document.querySelectorAll('.time-data')
var descriptionData = document.querySelectorAll('.description-data')
var hours = document.getElementById('hours')
var minutes = document.getElementById('minutes')
var amPm = document.getElementById('ampm')
var descriptionText = document.getElementById('description')

container.addEventListener('click', addEvent);

function addEvent() {
  if (event.target.id === 'container') {
    return
  }
  scheduleText.textContent = 'Scheduled Events For ' + event.target.textContent
  console.log(event.target)
}

addEntryButton.addEventListener('click', modalAppear)

function modalAppear() {
  modal.style.display = 'initial'
}

submitButton.addEventListener('click', addText)

function addText() {
  modal.style.display = 'none'
  for(var i = 0; i < timeData.length; i++) {
    if(timeData[i].textContent === '') {
      timeData[i].textContent = hours.value + ':' + minutes.value + ' ' + amPm.value
      descriptionData[i].textContent = descriptionText.value
      descriptionText.value = ''
      minutes.value = ''
      hours.value = ''
      return
    }
  }
}
