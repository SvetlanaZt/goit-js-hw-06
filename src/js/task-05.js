
const inputEl = document.querySelector('#name-input')
const spantEl =  document.querySelector('#name-output')


inputEl.addEventListener('input', onInput)


function onInput(event) {
    if (event.currentTarget.value === '') {
        spantEl.textContent = 'Anonymous'
    }
    else {
        spantEl.textContent = event.currentTarget.value;
    }
}
