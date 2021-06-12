let buttons = document.querySelectorAll(".buttons");
let display = document.querySelector(".display");
let expression = "";

function displaytext(exp) {
    display.textContent = expression;
}

function handleExp(text) {
    if (text == "=") expression = "" + eval(expression);
    else if (text == "÷") expression += "/";
    else if (text == "×") expression += "*";
    else if (text == "←") expression = expression.slice(0, expression.length - 1);
    else if (text == "AC") expression = "";
    else expression += text;
    displaytext(expression);
}

function processKey(btn) {
    btn.addEventListener("click", function(event) {
        handleExp(event.target.textContent);
    })
}

buttons.forEach(processKey);
