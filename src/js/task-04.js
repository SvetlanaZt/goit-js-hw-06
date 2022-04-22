
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const counter = document.querySelector('#value')



decrementBtn.addEventListener('click', onDecrement)
incrementBtn.addEventListener('click', onIncrement)

let counterVal = 0;

function onDecrement() {
    counterVal--
    counter.innerHTML = counterVal; 
    console.log('показ')
}

function onIncrement() {
    counterVal++
    counter.innerHTML = counterVal; 
    console.log('показ')
}

