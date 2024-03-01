// calculator PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  console.log("display.value", display.value);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function removeBeforeCursor() {
  display.value =
    display.value.slice(0, display.selectionStart - 1) +
    display.value.slice(display.selectionStart);
}
