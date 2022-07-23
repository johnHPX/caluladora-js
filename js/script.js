var display = document.querySelector("#display")
var signalHasSelected = false

function addNumber(num) {
    if (display.textContent.length == 1 && display.textContent == "0") {
        display.textContent = ""
    }
    display.textContent += display.textContent = num
}

function operator(sin) {
    display.textContent += display.textContent = sin
}

function clearDisplay() {
    display.textContent = "0"
}

function equalResult() {
    display.textContent = eval(display.textContent)
}
