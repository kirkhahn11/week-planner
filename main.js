var appState = {
  events: []
};

var daysOfTheWeek = document.querySelectorAll('.days-of-week');
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');
var modal = document.getElementById('modal');
var addEntryButton = document.getElementById('add-entry');
var submitButton = document.getElementById('submit');
var timeData = document.querySelectorAll('.time-data');
var descriptionData = document.querySelectorAll('.description-data');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var amPm = document.getElementById('ampm');
var descriptionText = document.getElementById('description');
var hoursUpdate = document.getElementById('update-hours');
var minutesUpdate = document.getElementById('update-minutes');
var amPmUpdate = document.getElementById('update-ampm');
var descriptionTextUpdate = document.getElementById('update-description');
var form = document.getElementById('modal-form');
var formBody = document.getElementById('form-body');
var updateFormBody = document.getElementById('update-modal-form');
var updateModal = document.getElementById('update-modal');

container.addEventListener('click', addEvent);

function addEvent() {
  if (event.target.id === 'container') {
    return;
  }
  scheduleText.textContent = 'Scheduled Events For ' + event.target.textContent;
  console.log(event.target);
}

addEntryButton.addEventListener('click', modalAppear);

function modalAppear() {
  modal.classList.remove('hidden');
  descriptionText.value = '';
}

form.addEventListener('submit', addText);

function addText(event) {
  event.preventDefault();
  modal.classList.add('hidden');
  var tr = document.createElement('tr');
  var tdContainer = document.createElement('span');
  tdContainer.classList.add('description-container');
  var tdTime = document.createElement('td');
  var tdDescription = document.createElement('td');
  var tdUpdate = document.createElement('button');
  tdUpdate.addEventListener('click', updateModalAppear);
  var updateButtonText = document.createTextNode('Update');
  tdUpdate.appendChild(updateButtonText);
  tdUpdate.classList.add('update-button');
  tdUpdate.classList.remove('hidden');
  var eventData = {
    eventDescription: descriptionText.value,
    eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
    eventUpdate: tdUpdate
  };
  appState.events.push(eventData);
  tdTime.style.borderRight = '2px solid black';
  tdDescription.textContent = appState.events[appState.events.length - 1].eventDescription;
  tdTime.textContent = appState.events[appState.events.length -1].eventTime;
  tdContainer.append(tdDescription);
  tdContainer.append(tdUpdate);
  tr.append(tdTime);
  tr.append(tdContainer);
  formBody.append(tr);

  updateFormBody.addEventListener('submit', updateText);

  function updateText(event) {
    updateModal.classList.add('hidden');
    event.preventDefault();
    for(var i = 0; i < appState.events.length; i++) {
      if(appState.events[i].eventUpdate.className === 'update-button hidden') {
        appState.events[i].eventUpdate.classList.remove('hidden');
        appState.events[i].eventUpdate.previousElementSibling.textContent = descriptionTextUpdate.value;
        appState.events[i].eventUpdate.parentElement.previousElementSibling.textContent = hoursUpdate.value + ":" + minutesUpdate.value + " " + amPmUpdate.value;
        appState.events[i].eventDescription = descriptionTextUpdate.value;
        appState.events[i].eventTime = hoursUpdate.value + ":" + minutesUpdate.value + " " + amPmUpdate.value;
      }
    }
  }
}

function updateModalAppear() {
  updateModal.classList.remove('hidden');
  descriptionTextUpdate.value = appState.events[appState.events.length - 1].eventDescription;
  event.target.classList.add('hidden');
}
