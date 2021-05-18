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

var currentDay = document.querySelector('#schedule-text > span.current-day');
var addEntryButton = document.getElementById('add-entry');

var container = document.getElementById('container');
var modal = document.getElementById('modal');
var descriptionText = document.getElementById('description');
var form = document.getElementById('modal-form');
var tbody = document.querySelector('tbody');
var updateFormBody = document.getElementById('update-modal-form');
var updateModal = document.getElementById('update-modal');
var deleteModal = document.getElementById('delete-modal');
var yesButton = document.getElementById('yes');
var noButton = document.getElementById('no');

container.addEventListener('click', switchToCurrentDay);
addEntryButton.addEventListener('click', modalAppear);
form.addEventListener('submit', addEntry);
updateFormBody.addEventListener('submit', updateText);
noButton.addEventListener('click', noButtonClick);
yesButton.addEventListener('click', yesButtonClick);

function switchToCurrentDay(event) {
  if (event.target.id === 'container') {
    return;
  }
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
  appState.currentDay = event.target.dataset.day;
  currentDay.textContent = appState.currentDay;
  for (var i = 0; i < appState.events[appState.currentDay].length; i++) {
    tbody.append(appState.events[appState.currentDay][i].domElement);
  }
}

function addEntry(event) {
  event.preventDefault();
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
  tableRow.classList.add('bottom-border');
  var timeTd = document.createElement('td');
  var descriptionTd = document.createElement('td');
  descriptionTd.classList.add('left-border');
  var buttonsTd = document.createElement('td');
  buttonsTd.classList.add('flex');
  var updateButton = document.createElement('button');
  updateButton.classList.add('update-button');
  updateButton.addEventListener('click', updateModalAppear);
  var deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', deleteModalAppear);
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

function updateModalAppear(event) {
  updateModal.classList.remove('hidden');
  event.target.classList.add('hidden');
  updateFormBody.firstElementChild.value = currentDay.textContent;
}

function deleteModalAppear(event) {
  deleteModal.classList.remove('hidden');
  event.target.classList.add('hidden');
}

function updateText(event){
  event.preventDefault();
  var formData = new FormData(event.target);
  var day = formData.get('day');
  var hours = formData.get('hours');
  var minutes = formData.get('minutes');
  var ampm = formData.get('ampm');
  var description = formData.get('description');
  var time = hours + ':' + minutes + ' ' + ampm;
  for(var i = 0; i < tbody.children.length; i++) {
    if (tbody.children[i].firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.className === 'update-button hidden') {
      tbody.children[i].remove();
      var domElement = generateTableRow(time, description);
      var object = {
        time: time,
        description: description,
        domElement: domElement
      };
      appState.events[day.toLowerCase()].push(object);
    }
    if (appState.events[appState.currentDay][i].domElement.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.className === 'update-button hidden'){
      appState.events[appState.currentDay].splice(i, 1);
    }
    if (appState.currentDay === day) {
      tbody.appendChild(domElement);
    }
  }

  updateModal.classList.add('hidden');
}

function noButtonClick() {
  for (var i = 0; i < appState.events[appState.currentDay].length; i++) {
    if (appState.events[appState.currentDay][i].domElement.lastElementChild.lastElementChild.className === 'delete-button hidden')
    appState.events[appState.currentDay][i].domElement.lastElementChild.lastElementChild.classList.remove('hidden');
  }
  deleteModal.classList.add('hidden');
}

function yesButtonClick() {
  deleteModal.classList.add('hidden');
  for (var i = 0; i < appState.events[appState.currentDay].length; i++) {
    if (appState.events[appState.currentDay][i].domElement.lastElementChild.lastElementChild.className === 'delete-button hidden') {
      appState.events[appState.currentDay].splice(i, 1);
      tbody.children[i].remove();
    }
  }
}
