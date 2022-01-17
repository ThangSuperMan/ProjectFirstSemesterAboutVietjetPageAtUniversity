const textDestination = document.querySelector('.destinate-vietnam');

const word = textDestination.innerText.split('');

// Reset value of textDestination
textDestination.children[0].innerHTML = '';

word.forEach((letter, index) => {
    textDestination.children[0].innerHTML += `<span style="--index: ${index};">${letter}</span>`
})

// Clone div
let cloneDiv = textDestination.children[0].cloneNode(true);
cloneDiv.style.position = 'absolute';
cloneDiv.style.top = '0';
cloneDiv.style.left = '0';
cloneDiv.style.zIndex = '4';


// Append child
textDestination.appendChild(cloneDiv);
