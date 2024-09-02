const rest = new Map();
rest.set('name', 'Luzzitano Pizza');
rest.set(1, 'California Pizza');
rest.set(2, 'Vidrarias LTDA, Rodeio Restaurant');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 21)
  .set('close', 0)
  .set(true, 'We are open 😁')
  .set(false, 'We are close.');
console.log(rest.get(1));
console.log(true);
const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
console.log(rest.has('categories'));
