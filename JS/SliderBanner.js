const sliderImage = document.querySelector(".slider-item-image");
console.log("super slider");

// Variables
let index = 0;

const images = [
    "/images/slider1.jpeg",
    "../images/slider2.jpeg",
    "../images/slider3.jpeg",
    "../images/slider4.jpeg",
    "../images/slider5.jpeg",
];

// Functions
function handleChangeImageSlider() {
    if (index == images.length) {
        // Reset the first image
        index = 0;
    }

    sliderImage.style.backgroundImage = `url('${images[index]}')`;

    // Update index
    index++;
}

setInterval(handleChangeImageSlider, 7000);
