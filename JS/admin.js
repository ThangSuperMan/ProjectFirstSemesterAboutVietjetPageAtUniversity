const inputs = document.querySelectorAll(".input")

function focusFunc(event) {
    event.target.parentNode.parentNode.classList.add("focus")
}

function focusoutFunc(event) {
    console.log(event.target.value)
    if (event.target.value === "") {
    event.target.parentNode.parentNode.classList.remove("focus")
    }
    
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc)
})

inputs.forEach((input) => {
    input.addEventListener("blur", focusoutFunc)
})