const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const createList = document.querySelector('ul.gallery')

const createEl = images.map(value => {
const imagEl = `<li><img src = ${value.url}, alt = ${value.alt}, width = 200></img></li>`
  return imagEl
})
console.log(createEl)
createList.insertAdjacentHTML('afterbegin', createEl)


const listStyle = document.querySelector('.gallery')
listStyle.style.listStyle = 'none'
listStyle.style.display = 'flex'




