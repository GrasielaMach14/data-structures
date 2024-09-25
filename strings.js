const airline = 'TAP AIR Portugal';
// console.log(airline.slice(0, airline.indexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log(`Your seat is ${seat}, you got the middle seat 🫤`);
  } else {
    console.log(`Your seat is ${seat}, you are lucky 😎`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('76C');
checkMiddleSeat('9E');

console.log('#######################################################');

const passenger = 'grAsiELa';
console.log(passenger);
const passengerLower = passenger.toLowerCase();
console.log(passengerLower);
const includeUpp = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(includeUpp);

console.log('#######################################################');

const email = 'grasiela.m@gmail.com';
const loginEmail = ' Grasiela.m@GMAIL.com \n';
const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === normalEmail);

console.log('#######################################################');

const priceGB = '123,09£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);

console.log('#######################################################');
const announcement =
  'All passengers come to boarding door 23. Boarding door 23.';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
//USING REGULAR EXPRESSION
console.log(announcement.replaceAll(/door/g, 'gate'));

console.log('#######################################################');
const plane = 'Airbus EA20neo';
console.log(plane.includes('Airbus'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

console.log('#######################################################');
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log(`${items}, you not allowed on board.`);
  } else {
    console.log(items, 'Welcome aboard.');
  }
};

checkBaggage('I have laptop, food and a poccket knife');
checkBaggage('Socks and camera.');
checkBaggage('Got some snacks and a gun for protection');
