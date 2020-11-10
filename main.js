var appState = {
  events: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  currentDay: 'monday'
};

var dayObject = {
  time: '',
  description: '',
  domElement: document.createElement('div')
};

appState.events[appState.currentDay].length;

var currentDay = document.querySelector('#schedule-text > span.current-day');
var addEntryButton = document.getElementById('add-entry');

var daysOfTheWeek = document.querySelectorAll('.week');
var weeklyDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var scheduleText = document.getElementById('schedule-text');
var container = document.getElementById('container');
var modal = document.getElementById('modal');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var amPm = document.getElementById('ampm');
var descriptionText = document.getElementById('description');
var hoursUpdate = document.getElementById('update-hours');
var minutesUpdate = document.getElementById('update-minutes');
var amPmUpdate = document.getElementById('update-ampm');
var descriptionTextUpdate = document.getElementById('update-description');
var form = document.getElementById('modal-form');
var tbody = document.querySelector('tbody');
var updateFormBody = document.getElementById('update-modal-form');
var updateModal = document.getElementById('update-modal');
var deleteModal = document.getElementById('delete-modal');
var yesButton = document.getElementById('yes');
var noButton = document.getElementById('no');

container.addEventListener('click', addEvent);
addEntryButton.addEventListener('click', modalAppear);
form.addEventListener('submit', addEntry);

function addEvent(event) {
  if (event.target.id === 'container') {
    return;
  }
  appState.currentDay = event.target.dataset.day;
  currentDay.textContent = appState.currentDay;
}

function addEntry(event) {
  event.preventDefault();
  console.log(event.target);
  var formData = new FormData(event.target);
  var day = formData.get('day');
  var hours = formData.get('hours');
  var minutes = formData.get('minutes');
  var ampm = formData.get('ampm');
  var description = formData.get('description');
  var time = hours + ':' + minutes + ' ' + ampm;

  var domElement = generateTableRow(time, description);

  var object = {
    time: time,
    description: description,
    domElement: domElement
  };
  appState.events[day].push(object);
  if(appState.currentDay === day) {
    tbody.appendChild(domElement);
  }
  modal.classList.add('hidden');
}

// Returns a dom element
function generateTableRow(time, description) {
  var tableRow = document.createElement('tr');
  var timeTd = document.createElement('td');
  var descriptionTd = document.createElement('td');
  var buttonsTd = document.createElement('td');
  var updateButton = document.createElement('button');
  var deleteButton = document.createElement('button');
  timeTd.textContent = time;
  descriptionTd.textContent = description;
  updateButton.textContent = 'Update';
  deleteButton.textContent = 'Delete';
  buttonsTd.append(updateButton, deleteButton);
  tableRow.append(
    timeTd,
    descriptionTd,
    buttonsTd
  );
  return tableRow;
}

function modalAppear() {
  modal.classList.remove('hidden');
  descriptionText.value = '';
}



// function addText(event) {
//   event.preventDefault();
//   modal.classList.add('hidden');
//   var eventDate = {
//     eventDay: scheduleText.textContent.slice(21)
//   };
//   for(var i = 0; i < weeklyDays.length; i++){
//     if(eventDate.eventDay === weeklyDays[i]) {
//       var tr = document.createElement('tr');
//       var tdContainer = document.createElement('span');
//       tdContainer.classList.add('description-container');
//       var buttonContainer = document.createElement('span');
//       var deleteButton = document.createElement('button');
//       var deleteButtonText = document.createTextNode('Delete');
//       deleteButton.appendChild(deleteButtonText);
//       deleteButton.addEventListener('click', deleteModalAppear);
//       var tdTime = document.createElement('td');
//       var tdDescription = document.createElement('td');
//       var tdUpdate = document.createElement('button');
//       tdUpdate.addEventListener('click', updateModalAppear);
//       var updateButtonText = document.createTextNode('Update');
//       var eventData = {
//         eventDescription: descriptionText.value,
//         eventTime: hours.value + ':' + minutes.value + ' ' + amPm.value,
//         eventUpdate: tdUpdate,
//         eventDelete: deleteButton,
//       };
//       tdUpdate.appendChild(updateButtonText);
//       tdUpdate.classList.add('update-button');
//       tdUpdate.classList.remove('hidden');
//       deleteButton.classList.add('delete-button');
//       appState.events.push(eventData);
//       tdTime.style.borderRight = '2px solid black';
//       tdDescription.textContent = appState.events[appState.events.length - 1].eventDescription;
//       tdTime.textContent = appState.events[appState.events.length - 1].eventTime;
//       buttonContainer.append(tdUpdate);
//       buttonContainer.append(deleteButton);
//       tdContainer.append(tdDescription);
//       tdContainer.append(buttonContainer);
//       tr.append(tdTime);
//       tr.append(tdContainer);
//       daysOfTheWeek[i].append(tr);
//       daysOfTheWeek[i].classList.remove('hidden');
//     }
//   }

//   updateFormBody.addEventListener('submit', updateText);

//   function updateText(event) {
//     updateModal.classList.add('hidden');
//     event.preventDefault();
//     for (var i = 0; i < appState.events.length; i++) {
//       if (appState.events[i].eventUpdate.className === 'update-button hidden') {
//         appState.events[i].eventUpdate.classList.remove('hidden');
//         appState.events[i].eventUpdate.parentElement.previousElementSibling.textContent = descriptionTextUpdate.value;
//         appState.events[i].eventUpdate.parentElement.parentElement.previousElementSibling.textContent = hoursUpdate.value + ":" + minutesUpdate.value + " " + amPmUpdate.value;
//         appState.events[i].eventDescription = descriptionTextUpdate.value;
//         appState.events[i].eventTime = hoursUpdate.value + ":" + minutesUpdate.value + " " + amPmUpdate.value;
//       }
//     }
//   }
// }

// function updateModalAppear() {
//   updateModal.classList.remove('hidden');
//   descriptionTextUpdate.value = appState.events[appState.events.length - 1].eventDescription;
//   event.target.classList.add('hidden');
// }

// function deleteModalAppear() {
//   deleteModal.classList.remove('hidden');
//   event.target.classList.add('hidden');
// }

// noButton.addEventListener('click', noButtonClick);

// function noButtonClick() {
//   for (var i = 0; i < appState.events.length; i++) {
//     appState.events[i].eventDelete.classList.remove('hidden');
//   }
//   deleteModal.classList.add('hidden');
// }

// yesButton.addEventListener('click', yesButtonClick);

// function yesButtonClick() {
//   deleteModal.classList.add('hidden');
//   for (var i = 0; i < appState.events.length; i++) {
//     if (appState.events[i].eventDelete.className === 'delete-button hidden') {
//       appState.events[i].eventDelete.parentElement.parentElement.parentElement.remove();
//       appState.events.splice(i, 1);
//     }
//   }
// }
