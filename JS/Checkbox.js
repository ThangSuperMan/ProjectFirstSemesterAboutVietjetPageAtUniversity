// Selectors
const checkBoxBorder = document.querySelector(".bottom__checkbox div");
const checkBoxIcon = document.querySelector(".bottom__checkbox i");

// Events listener
checkBoxBorder.addEventListener("click", () => {
    if(!checkBoxIcon.matches(".fa-check-square")) {
        // Add checked box for icon
        checkBoxIcon.classList.add('fa-check-square');
    } else {
        checkBoxIcon.classList.remove('fa-check-square');
    }
})


