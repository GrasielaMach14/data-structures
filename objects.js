/**
 * author Grasiela Machado
 * created on 02-09-2024-16h-26m
 * github: https://github.com/GrasielaMach14
 * copyright 2024
 */

'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sad: {
      open: 0,
      close: 24,
    },
  },
  order: function (startIndex, menuIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[menuIndex]];
  },
  oderDelivery: function ({ startIndex, menuIndex, address, time }) {
    console.log(
      `Order received! ${this.starterMenu[startIndex]} and ${this.mainMenu[menuIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPizza: function (mainIngredient, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(othersIngredients);
  },
};

restaurant.oderDelivery({
  time: '22:30',
  address: 'Via Coletora, n° 78',
  menuIndex: 0,
  startIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restName, openingHours: hours, categories: tags } = restaurant;
console.log(restName, hours, tags);
// SPREAD OPERATOR
const [pizza, , risoto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risoto, otherfood);
// SPREAD OPERATOR USING NUMBERS
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(7, 8);
add(12, 365, 28, 101);
add(9, 8, 1, 5, 7, 3, 6);

restaurant.orderPizza('Portuguesa', 'Mussarela', 'Americano', 'Sertanejo');
console.log();
