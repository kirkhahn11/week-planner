var appState = {
  events: []
};
var daysOfTheWeek = document.querySelectorAll('.week');
var weeklyDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');
var modal = document.getElementById('modal');
var addEntryButton = document.getElementById('add-entry');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var amPm = document.getElementById('ampm');
var descriptionText = document.getElementById('description');
var hoursUpdate = document.getElementById('update-hours');
var minutesUpdate = document.getElementById('update-minutes');
var amPmUpdate = document.getElementById('update-ampm');
var descriptionTextUpdate = document.getElementById('update-description');
var form = document.getElementById('modal-form');
var formBodySunday = document.getElementById('form-body-sunday');
formBodySunday.classList.add('hidden');
var formBodyMonday = document.getElementById('form-body-monday');
formBodyMonday.classList.add('hidden');
var formBodyTuesday = document.getElementById('form-body-tuesday');
formBodyTuesday.classList.add('hidden');
var formBodyWednesday = document.getElementById('form-body-wednesday');
formBodyWednesday.classList.add('hidden');
var formBodyThursday = document.getElementById('form-body-thursday');
formBodyThursday.classList.add('hidden');
var formBodyFriday = document.getElementById('form-body-friday');
formBodyFriday.classList.add('hidden');
var formBodySaturday = document.getElementById('form-body-saturday');
formBodySaturday.classList.add('hidden');
var updateFormBody = document.getElementById('update-modal-form');
var updateModal = document.getElementById('update-modal');
var deleteModal = document.getElementById('delete-modal');
var yesButton = document.getElementById('yes');
var noButton = document.getElementById('no');

container.addEventListener('click', addEvent);

function addEvent() {
  if (event.target.id === 'container') {
    return;
  }
  scheduleText.textContent = 'Scheduled Events For ' + event.target.textContent;
  for(var i = 0; i < daysOfTheWeek.length; i++){
    if(scheduleText.textContent !== 'Scheduled Events For ' + weeklyDays[i]) {
      daysOfTheWeek[i].classList.add('hidden');
    }
    if(scheduleText.textContent === 'Scheduled Events For ' + weeklyDays[i]) {
      daysOfTheWeek[i].classList.remove('hidden');
    }
  }
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
  var eventDate = {
    eventDay: scheduleText.textContent.slice(21)
  };
  for(var i = 0; i < weeklyDays.length; i++){
    if(eventDate.eventDay === weeklyDays[i]) {
      var tr = document.createElement('tr');
      var tdContainer = document.createElement('span');
      tdContainer.classList.add('description-container');
      var buttonContainer = document.createElement('span');
      var deleteButton = document.createElement('button');
      var deleteButtonText = document.createTextNode('Delete');
      deleteButton.appendChild(deleteButtonText);
      deleteButton.addEventListener('click', deleteModalAppear);
      var tdTime = document.createElement('td');
      var tdDescription = document.createElement('td');
      var tdUpdate = document.createElement('button');
      tdUpdate.addEventListener('click', updateModalAppear);
      var updateButtonText = document.createTextNode('Update');
      var eventData = {
        eventDescription: descriptionText.value,
        eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
        eventUpdate: tdUpdate,
        eventDelete: deleteButton,
      };
      tdUpdate.appendChild(updateButtonText);
      tdUpdate.classList.add('update-button');
      tdUpdate.classList.remove('hidden');
      deleteButton.classList.add('delete-button');
      appState.events.push(eventData);
      tdTime.style.borderRight = '2px solid black';
      tdDescription.textContent = appState.events[appState.events.length - 1].eventDescription;
      tdTime.textContent = appState.events[appState.events.length - 1].eventTime;
      buttonContainer.append(tdUpdate);
      buttonContainer.append(deleteButton);
      tdContainer.append(tdDescription);
      tdContainer.append(buttonContainer);
      tr.append(tdTime);
      tr.append(tdContainer);
      daysOfTheWeek[i].append(tr);
      daysOfTheWeek[i].classList.remove('hidden');
    }
  }

  updateFormBody.addEventListener('submit', updateText);

  function updateText(event) {
    updateModal.classList.add('hidden');
    event.preventDefault();
    for (var i = 0; i < appState.events.length; i++) {
      if (appState.events[i].eventUpdate.className === 'update-button hidden') {
        appState.events[i].eventUpdate.classList.remove('hidden');
        appState.events[i].eventUpdate.parentElement.previousElementSibling.textContent = descriptionTextUpdate.value;
        appState.events[i].eventUpdate.parentElement.parentElement.previousElementSibling.textContent = hoursUpdate.value + ":" + minutesUpdate.value + " " + amPmUpdate.value;
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

function deleteModalAppear() {
  deleteModal.classList.remove('hidden');
  event.target.classList.add('hidden');
}

noButton.addEventListener('click', noButtonClick);

function noButtonClick() {
  for (var i = 0; i < appState.events.length; i++) {
    appState.events[i].eventDelete.classList.remove('hidden');
  }
  deleteModal.classList.add('hidden');
}

yesButton.addEventListener('click', yesButtonClick);

function yesButtonClick() {
  deleteModal.classList.add('hidden');
  for (var i = 0; i < appState.events.length; i++) {
    if (appState.events[i].eventDelete.className === 'delete-button hidden') {
      appState.events[i].eventDelete.parentElement.parentElement.parentElement.remove();
      appState.events.splice(i, 1);
    }
  }
}
