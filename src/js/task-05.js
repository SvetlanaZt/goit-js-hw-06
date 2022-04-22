
const inputEl = document.querySelector('#name-input')
const spantEl =  document.querySelector('#name-output')


inputEl.addEventListener('input', onInput)


function onInput(event) {
    spantEl.textContent = event.currentTarget.value;
 if (event.currentTarget.value === '') {
 spantEl.textContent
    }
}
