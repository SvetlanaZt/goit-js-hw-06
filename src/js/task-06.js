const inputEl = document.querySelector('#validation-input')
// const spantEl =  document.querySelector('#name-output')
// const lengthEl = inputEl.querySelector('[data-length]')


inputEl.addEventListener('focus', onFocus)
inputEl.addEventListener('blur', onBlur)
// inputEl.addEventListener('input', onInput)

function onFocus() {
  console.log('foc')
}
function onBlur(event) {
    if (event.currentTarget.value.length >= inputEl.dataset.length) {
        event.currentTarget.classList.add('valid')
    }
else 
     event.currentTarget.classList.toggle('invalid')
}
