//Напиши скрипт, який змінює кольори фону елемента <body> 
//через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorButton = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

const bodyEl = document.querySelector("body");

changeColorButton.addEventListener('click', displayChangedColor);

function displayChangedColor(color) {
  color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorName.textContent = color;
};