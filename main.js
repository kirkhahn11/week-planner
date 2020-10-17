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
var form = document.getElementById('modal-form')
var formBody = document.getElementById('form-body')

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
  modal.classList.remove('hidden')
}

form.addEventListener('submit', addText)

function addText() {
  event.preventDefault()
  modal.classList.add('hidden')
  var tr = document.createElement('tr')
  var tdTime = document.createElement('td')
  var tdDescription = document.createElement('td')
  tdTime.textContent = hours.value + ':' + minutes.value + ' ' + amPm.value
  tdTime.style.borderRight = '2px solid black'
  tdDescription = descriptionText.value
  tr.append(tdTime)
  tr.append(tdDescription)
  formBody.append(tr)
  descriptionText.value = ''
  minutes.value = ''
  hours.value = ''
}
