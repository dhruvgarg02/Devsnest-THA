let buttons = document.querySelectorAll(".buttons");
let display = document.querySelector(".display");
let expression = "";

function displaytext(exp) {
    display.textContent = exp;
}

function handleExp(text) {
    if (text == "=") expression = "" + eval(expression);
    else if (text == "÷") expression += "/";
    else if (text == "×") expression += "*";
    else if (text == "←") expression = expression.slice(0, expression.length - 1);
    else if (text == "AC") expression = "";
    else expression += text;
    if (expression == Infinity) {
        displaytext(expression);
        expression = "";
    }
    else
    displaytext(expression);
}

function processKey(btn) {
    btn.addEventListener("click", function(event) {
        handleExp(event.target.textContent);
    })
}

buttons.forEach(processKey);
