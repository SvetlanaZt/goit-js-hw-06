const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const kuglyg = document.querySelector('#ingredients')

const creatEl = ingredients.map(value => {
  const item = document.createElement('li');
  item.classList.add('item')
  item.textContent = value;
  return item
})

kuglyg.append(...creatEl)


// const itemPotat = document.createElement('li');
// itemPotat.textContent = ingredients[0];
// itemPotat.classList.add('item')

// const itemMushroom = document.createElement('li');
// itemMushroom.textContent = ingredients[1];
// itemMushroom.classList.add('item')

// const itemGarlic = document.createElement('li');
// itemGarlic.textContent = ingredients[2];
// itemGarlic.classList.add('item')

// const itemTomatos = document.createElement('li');
// itemTomatos.textContent = ingredients[3];
// itemTomatos.classList.add('item')

// const itemHerbs = document.createElement('li');
// itemHerbs.textContent = ingredients[4];
// itemHerbs.classList.add('item')

// const itemCondiments = document.createElement('li');
// itemCondiments.textContent = ingredients[5];
// itemCondiments.classList.add('item')

// const setIngredients = document.querySelector('#ingredients');

// setIngredients.append(itemPotat, itemMushroom, itemGarlic, itemTomatos, itemHerbs, itemCondiments);

// console.log(itemPotat)
// console.log(itemMushroom)
// console.log(itemGarlic)
// console.log(itemTomatos)
// console.log(itemHerbs)
// console.log(itemCondiments)
// console.log(setIngredients)
