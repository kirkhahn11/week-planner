var appState = {
  events: []
};
var daysOfTheWeek = document.querySelectorAll('.days-of-week');
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
  if (scheduleText.textContent !== 'Scheduled Events For Sunday') {
    formBodySunday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Sunday') {
    formBodySunday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Monday') {
    formBodyMonday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Monday') {
    formBodyMonday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Tuesday') {
    formBodyTuesday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Tuesday') {
    formBodyTuesday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Wednesday') {
    formBodyWednesday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Wednesday') {
    formBodyWednesday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Thursday') {
    formBodyThursday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Thursday') {
    formBodyThursday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Friday') {
    formBodyFriday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Friday') {
    formBodyFriday.classList.remove('hidden');
  }
  if (scheduleText.textContent !== 'Scheduled Events For Saturday') {
    formBodySaturday.classList.add('hidden');
  }
  if (scheduleText.textContent === 'Scheduled Events For Saturday') {
    formBodySaturday.classList.remove('hidden');
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
  if(eventDate.eventDay === 'Monday') {
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
    formBodyMonday.append(tr);
    formBodyMonday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Sunday') {
    var trSunday = document.createElement('tr');
    var tdContainerSunday = document.createElement('span');
    tdContainerSunday.classList.add('description-container');
    var buttonContainerSunday = document.createElement('span');
    var deleteButtonSunday = document.createElement('button');
    var deleteButtonTextSunday = document.createTextNode('Delete');
    deleteButtonSunday.appendChild(deleteButtonTextSunday);
    deleteButtonSunday.addEventListener('click', deleteModalAppear);
    var tdTimeSunday = document.createElement('td');
    var tdDescriptionSunday = document.createElement('td');
    var tdUpdateSunday = document.createElement('button');
    tdUpdateSunday.addEventListener('click', updateModalAppear);
    var updateButtonTextSunday = document.createTextNode('Update');
    var eventDataSunday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateSunday,
      eventDelete: deleteButtonSunday,
    };
    tdUpdateSunday.appendChild(updateButtonTextSunday);
    tdUpdateSunday.classList.add('update-button');
    tdUpdateSunday.classList.remove('hidden');
    deleteButtonSunday.classList.add('delete-button');
    appState.events.push(eventDataSunday);
    tdTimeSunday.style.borderRight = '2px solid black';
    tdDescriptionSunday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeSunday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerSunday.append(tdUpdateSunday);
    buttonContainerSunday.append(deleteButtonSunday);
    tdContainerSunday.append(tdDescriptionSunday);
    tdContainerSunday.append(buttonContainerSunday);
    trSunday.append(tdTimeSunday);
    trSunday.append(tdContainerSunday);
    formBodySunday.append(trSunday);
    formBodySunday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Tuesday') {
    var trTuesday = document.createElement('tr');
    var tdContainerTuesday = document.createElement('span');
    tdContainerTuesday.classList.add('description-container');
    var buttonContainerTuesday = document.createElement('span');
    var deleteButtonTuesday = document.createElement('button');
    var deleteButtonTextTuesday = document.createTextNode('Delete');
    deleteButtonTuesday.appendChild(deleteButtonTextTuesday);
    deleteButtonTuesday.addEventListener('click', deleteModalAppear);
    var tdTimeTuesday = document.createElement('td');
    var tdDescriptionTuesday = document.createElement('td');
    var tdUpdateTuesday = document.createElement('button');
    tdUpdateTuesday.addEventListener('click', updateModalAppear);
    var updateButtonTextTuesday = document.createTextNode('Update');
    var eventDataTuesday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateTuesday,
      eventDelete: deleteButtonTuesday,
    };
    tdUpdateTuesday.appendChild(updateButtonTextTuesday);
    tdUpdateTuesday.classList.add('update-button');
    tdUpdateTuesday.classList.remove('hidden');
    deleteButtonTuesday.classList.add('delete-button');
    appState.events.push(eventDataTuesday);
    tdTimeTuesday.style.borderRight = '2px solid black';
    tdDescriptionTuesday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeTuesday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerTuesday.append(tdUpdateTuesday);
    buttonContainerTuesday.append(deleteButtonTuesday);
    tdContainerTuesday.append(tdDescriptionTuesday);
    tdContainerTuesday.append(buttonContainerTuesday);
    trTuesday.append(tdTimeTuesday);
    trTuesday.append(tdContainerTuesday);
    formBodyTuesday.append(trTuesday);
    formBodyTuesday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Wednesday') {
    var trWednesday = document.createElement('tr');
    var tdContainerWednesday = document.createElement('span');
    tdContainerWednesday.classList.add('description-container');
    var buttonContainerWednesday = document.createElement('span');
    var deleteButtonWednesday = document.createElement('button');
    var deleteButtonTextWednesday = document.createTextNode('Delete');
    deleteButtonWednesday.appendChild(deleteButtonTextWednesday);
    deleteButtonWednesday.addEventListener('click', deleteModalAppear);
    var tdTimeWednesday = document.createElement('td');
    var tdDescriptionWednesday = document.createElement('td');
    var tdUpdateWednesday = document.createElement('button');
    tdUpdateWednesday.addEventListener('click', updateModalAppear);
    var updateButtonTextWednesday = document.createTextNode('Update');
    var eventDataWednesday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateWednesday,
      eventDelete: deleteButtonWednesday,
    };
    tdUpdateWednesday.appendChild(updateButtonTextWednesday);
    tdUpdateWednesday.classList.add('update-button');
    tdUpdateWednesday.classList.remove('hidden');
    deleteButtonWednesday.classList.add('delete-button');
    appState.events.push(eventDataWednesday);
    tdTimeWednesday.style.borderRight = '2px solid black';
    tdDescriptionWednesday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeWednesday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerWednesday.append(tdUpdateWednesday);
    buttonContainerWednesday.append(deleteButtonWednesday);
    tdContainerWednesday.append(tdDescriptionWednesday);
    tdContainerWednesday.append(buttonContainerWednesday);
    trWednesday.append(tdTimeWednesday);
    trWednesday.append(tdContainerWednesday);
    formBodyWednesday.append(trWednesday);
    formBodyWednesday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Thursday') {
    var trThursday = document.createElement('tr');
    var tdContainerThursday = document.createElement('span');
    tdContainerThursday.classList.add('description-container');
    var buttonContainerThursday = document.createElement('span');
    var deleteButtonThursday = document.createElement('button');
    var deleteButtonTextThursday = document.createTextNode('Delete');
    deleteButtonThursday.appendChild(deleteButtonTextThursday);
    deleteButtonThursday.addEventListener('click', deleteModalAppear);
    var tdTimeThursday = document.createElement('td');
    var tdDescriptionThursday = document.createElement('td');
    var tdUpdateThursday = document.createElement('button');
    tdUpdateThursday.addEventListener('click', updateModalAppear);
    var updateButtonTextThursday = document.createTextNode('Update');
    var eventDataThursday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateThursday,
      eventDelete: deleteButtonThursday,
    };
    tdUpdateThursday.appendChild(updateButtonTextThursday);
    tdUpdateThursday.classList.add('update-button');
    tdUpdateThursday.classList.remove('hidden');
    deleteButtonThursday.classList.add('delete-button');
    appState.events.push(eventDataThursday);
    tdTimeThursday.style.borderRight = '2px solid black';
    tdDescriptionThursday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeThursday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerThursday.append(tdUpdateThursday);
    buttonContainerThursday.append(deleteButtonThursday);
    tdContainerThursday.append(tdDescriptionThursday);
    tdContainerThursday.append(buttonContainerThursday);
    trThursday.append(tdTimeThursday);
    trThursday.append(tdContainerThursday);
    formBodyThursday.append(trThursday);
    formBodyThursday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Friday') {
    var trFriday = document.createElement('tr');
    var tdContainerFriday = document.createElement('span');
    tdContainerFriday.classList.add('description-container');
    var buttonContainerFriday = document.createElement('span');
    var deleteButtonFriday = document.createElement('button');
    var deleteButtonTextFriday = document.createTextNode('Delete');
    deleteButtonFriday.appendChild(deleteButtonTextFriday);
    deleteButtonFriday.addEventListener('click', deleteModalAppear);
    var tdTimeFriday = document.createElement('td');
    var tdDescriptionFriday = document.createElement('td');
    var tdUpdateFriday = document.createElement('button');
    tdUpdateFriday.addEventListener('click', updateModalAppear);
    var updateButtonTextFriday = document.createTextNode('Update');
    var eventDataFriday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateFriday,
      eventDelete: deleteButtonFriday,
    };
    tdUpdateFriday.appendChild(updateButtonTextFriday);
    tdUpdateFriday.classList.add('update-button');
    tdUpdateFriday.classList.remove('hidden');
    deleteButtonFriday.classList.add('delete-button');
    appState.events.push(eventDataFriday);
    tdTimeFriday.style.borderRight = '2px solid black';
    tdDescriptionFriday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeFriday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerFriday.append(tdUpdateFriday);
    buttonContainerFriday.append(deleteButtonFriday);
    tdContainerFriday.append(tdDescriptionFriday);
    tdContainerFriday.append(buttonContainerFriday);
    trFriday.append(tdTimeFriday);
    trFriday.append(tdContainerFriday);
    formBodyFriday.append(trFriday);
    formBodyFriday.classList.remove('hidden');
  }
  if (eventDate.eventDay === 'Saturday') {
    var trSaturday = document.createElement('tr');
    var tdContainerSaturday = document.createElement('span');
    tdContainerSaturday.classList.add('description-container');
    var buttonContainerSaturday = document.createElement('span');
    var deleteButtonSaturday = document.createElement('button');
    var deleteButtonTextSaturday = document.createTextNode('Delete');
    deleteButtonSaturday.appendChild(deleteButtonTextSaturday);
    deleteButtonSaturday.addEventListener('click', deleteModalAppear);
    var tdTimeSaturday = document.createElement('td');
    var tdDescriptionSaturday = document.createElement('td');
    var tdUpdateSaturday = document.createElement('button');
    tdUpdateSaturday.addEventListener('click', updateModalAppear);
    var updateButtonTextSaturday = document.createTextNode('Update');
    var eventDataSaturday = {
      eventDescription: descriptionText.value,
      eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
      eventUpdate: tdUpdateSaturday,
      eventDelete: deleteButtonSaturday,
    };
    tdUpdateSaturday.appendChild(updateButtonTextSaturday);
    tdUpdateSaturday.classList.add('update-button');
    tdUpdateSaturday.classList.remove('hidden');
    deleteButtonSaturday.classList.add('delete-button');
    appState.events.push(eventDataSaturday);
    tdTimeSaturday.style.borderRight = '2px solid black';
    tdDescriptionSaturday.textContent = appState.events[appState.events.length - 1].eventDescription;
    tdTimeSaturday.textContent = appState.events[appState.events.length - 1].eventTime;
    buttonContainerSaturday.append(tdUpdateSaturday);
    buttonContainerSaturday.append(deleteButtonSaturday);
    tdContainerSaturday.append(tdDescriptionSaturday);
    tdContainerSaturday.append(buttonContainerSaturday);
    trSaturday.append(tdTimeSaturday);
    trSaturday.append(tdContainerSaturday);
    formBodySaturday.append(trSaturday);
    formBodySaturday.classList.remove('hidden');
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
