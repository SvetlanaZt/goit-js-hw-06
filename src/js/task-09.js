const background = document.querySelector('.color')
const button = document.querySelector('.change-color')

button.addEventListener('click', onBtn)

function onBtn() {
  document.body.style.backgroundColor = getRandomHexColor();
  background.textContent = getRandomHexColor().textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  
}
console.log(getRandomHexColor)