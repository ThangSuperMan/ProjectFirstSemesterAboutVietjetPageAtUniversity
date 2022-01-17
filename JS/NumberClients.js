// Query Selectors
const exitButton = document.querySelector('.client-fly .exit-icon');
const numberClients = document.querySelector('.client-fly');
const middleClient = document.querySelector('.middle__client');
const minusClientButton = document.querySelectorAll('.adult__number button:first-child');
const plusClientButton = document.querySelectorAll('.adult__number button:last-child');

// Functions
function handleDisplayChooseClient() {
    numberClients.classList.add('active');
}

function exitTableChooseClient() {
    numberClients.classList.remove('active');
}

function minusNumberClient(event) {
    
    var numberClient = parseInt(event.target.parentNode.children[1].innerText);

    if(numberClient === 0) {
        // Dont do anything
    } else if(numberClient < 9) {
        event.target.parentNode.children[1].innerText = numberClient - 1;
    }
     
}

function  plusNumberClient (event) {

    var numberClient = parseInt(event.target.parentNode.children[1].innerText);

    if(numberClient === 9) {
        // Dont do anything
    } else if(numberClient < 9) {
        event.target.parentNode.children[1].innerText = numberClient + 1;
    }
    
}

// Events Listener
middleClient.addEventListener('click', handleDisplayChooseClient);
exitButton.addEventListener('click', exitTableChooseClient);
minusClientButton.forEach((button) => button.addEventListener('click', minusNumberClient));
plusClientButton.forEach((button) => button.addEventListener('click', plusNumberClient));