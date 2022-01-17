// Query selectors
const container = document.querySelector('.container');

// Variables
let current = 0;
let target = 0;
const ease = 0.05; // 5% jump step

let containerHeight;

// Functions
function linearInterpolating(start, end, jumpStep) {
    return start * (1 - jumpStep) + (end * jumpStep);
}

function setTransform(element, transformStyle) {
    element.style.transform = transformStyle;
}

function setupAnimation() {
    containerHeight = container.getBoundingClientRect().height;
    
    // Setting height for body help us have the scroll bar
    document.body.style.height = `${containerHeight}px`;
    
    scrollSmooth();
}

function scrollSmooth() {
    current = linearInterpolating(current, target, ease);
    current = parseFloat(current.toFixed(2));
    target = window.scrollY;

    // Call function set for body can move
    setTransform(container, `translateY(${-current}px)`);

    // Keep call function scroll smooth and after that the value will closer to the variable target
    requestAnimationFrame(scrollSmooth);
}

setupAnimation();