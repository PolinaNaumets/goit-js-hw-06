"use strict";

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

let ulList = document.getElementById("ingredients");
ulList.classList.add("item");
for (let ingredient of ingredients){
  const itemEl = document.createElement("li");
  itemEl.textContent= ingredient;
  ulList.appendChild(itemEl);
}

console.log(ingredients);

//Напиши скрипт, який для кожного елемента масиву ingredients:

//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.