// Learning about splits
console.log('Grasiela Machado'.split(' '));

const [firstName, lastName] = 'Grasiela Machado'.split(' ');
console.log(firstName, lastName);

const newName = ['Miss.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

//Using a function
const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('grasiela machado de lima');

//Using PADDING
const message = 'Go to the gate 23!';
console.log(message.padStart(23, '+').padEnd(10, '+'));

console.log('Jonas'.padStart(23, '+').padEnd(20, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);

  return last.padEnd(str.length, '*');
};

console.log(maskCreditCard(8965432));
console.log(maskCreditCard('837465659300'));

//Using repeat()

const planeInLines = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planeInLines(8);
