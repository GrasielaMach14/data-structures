'use strict';

const rest1 = {
  name: 'Z-Baiana',
  numGuest: 20,
};

const rest2 = {
  name: 'Z-Paraense',
  owner: 'Luzia do Pará',
};

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';

console.log(rest2);
console.log(rest1);
