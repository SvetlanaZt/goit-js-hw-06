const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', onFocus)

function onFocus() { 
    textEl.style.fontSize = inputEl.value +'px';
}
