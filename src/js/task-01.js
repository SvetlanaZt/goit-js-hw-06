const numberEl = document.querySelectorAll('li.item');
const numberOfCategories = numberEl.length
console.log(`Number of categories: ${numberOfCategories}`)



const categoryEl = document.querySelector('#categories');
const title = categoryEl.querySelectorAll('h2')
const titleAn = title[0].textContent;
console.log(`Category: ${titleAn}`)

const listEl = categoryEl.querySelectorAll('ul')
const countNum = listEl[0].childElementCount
console.log(`Elements: ${countNum}`)


const titlePr = title[1].textContent;
console.log(`Category: ${titlePr}`)
const countPr = listEl[1].childElementCount
console.log(`Elements: ${countPr}`)


const titleTec = title[2].textContent;
console.log(`Category: ${titleTec}`)
const countTec = listEl[2].childElementCount
console.log(`Elements: ${countTec}`)
