// Query Selectors
const placeStart = document.querySelector('.place-start');
const placeEnd = document.querySelector('.place-end');
const itemsPointStart = placeStart.querySelectorAll('div');
const itemsPointEnd = placeEnd.querySelectorAll('div');
const currentPlaceStart = document.querySelector('.point-start__left span');
const currentPlaceEnd = document.querySelector('.middle__point-end span');
const iconExitListPlacesStart = document.querySelector('.place-start i');
const iconExitListPlacesEnd = document.querySelector('.place-end i');

// Functions

// Places start
function handleDisplayPlacesStart() {
    // Display the list book place fly
    placeStart.classList.add('active');

}

function handleExitListStart() {
    placeStart.classList.remove('active');
}

function updateContentPointStart(event) {
    // Update current point start
    currentPlaceStart.textContent = event.target.textContent;
    placeStart.classList.remove('active');
}

// Places end
function handleDisplayPlacesEnd() {
    // Display the list book place fly
    placeEnd.classList.add('active');
}

function handleExitListEnd() {
    placeEnd.classList.remove('active');
}

function updateContentPointEnd() {
    // Update current point start
    currentPlaceEnd.textContent = event.target.textContent;
    placeEnd.classList.remove('active');
}

// Events listener
currentPlaceStart.addEventListener('click', handleDisplayPlacesStart);
iconExitListPlacesStart.addEventListener('click', handleExitListStart);
itemsPointStart.forEach((item) => item.addEventListener('click', updateContentPointStart));

currentPlaceEnd.addEventListener('click', handleDisplayPlacesEnd)
iconExitListPlacesEnd.addEventListener('click', handleExitListEnd)
itemsPointEnd.forEach((item) => item.addEventListener('click', updateContentPointEnd));