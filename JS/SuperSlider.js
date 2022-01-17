// Query selectors
const sliderContainer = document.querySelector('.sliderContainer');
const slideList = document.querySelector('.slides');
let slideItems = slideList.querySelectorAll('.slide');
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Variables
let indexSlide = 1;
const intervalTime = 3000;
let slideFunctionInterval;
const widthSlide = slideItems[indexSlide].clientWidth;

const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideItems.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slideList.appendChild(firstClone);
slideList.prepend(lastClone);

// Move to first slide
slideList.style.transform = `translateX(${-widthSlide * indexSlide}px)`;

// Functions
const getSlideItems = () => document.querySelectorAll('.slide');

function handleCheckIndexSlide() {
    slideItems = getSlideItems();

    // Check first slide clone
    if (slideItems[indexSlide].id === firstClone.id) {
        // Reset the index slide to the first slide
        indexSlide = 1;

        slideList.style.transition = 'none';
        slideList.style.transform = `translateX(${-widthSlide * indexSlide}px)`;
    }

    // Check last slide clone
    if (slideItems[indexSlide].id === lastClone.id) {

        //Reset the index slide to the last slide
        indexSlide = slideItems.length - 2;

        slideList.style.transition = 'none';
        slideList.style.transform = `translateX(${-widthSlide * indexSlide}px)`;
    }
}

function moveToPreviousSlide() {
    // Handle when user click previous slide so fast
    if (indexSlide <= 0) {
        return;
    } 

    indexSlide--;
    slideList.style.transform = `translateX(${-widthSlide * indexSlide}px)`;
    slideList.style.transition = 'all 0.7s ease-in-out';
}

function moveToNextSlide() {

    //Handle when user click next slide so fast
    if (indexSlide >= (slideItems.length - 1)) {
        return;
    }

    indexSlide++;
    slideList.style.transform = `translateX(${-widthSlide * indexSlide}px)`;
    slideList.style.transition = 'all 0.7s ease-in-out';
}

function startSlide() {
    slideFunctionInterval = setInterval(() => {
        moveToNextSlide();
    }, intervalTime)
}

// Event listeners
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPreviousSlide);

sliderContainer.addEventListener('mouseenter', () => {
    // Stop move slide
    clearInterval(slideFunctionInterval);
})

sliderContainer.addEventListener('mouseleave', () => {
    // Continue move slide
    startSlide();
})

slideList.addEventListener('transitionend', handleCheckIndexSlide);

// Call functions
startSlide();
