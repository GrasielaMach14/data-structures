// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(text);
  console.log(rows);

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});
console.log('####################################################');
//HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b

const dts = [
  'underscore_case',
  ' first_name',
  'Some_Variable ',
  '  calculate_AGE',
  'delayed_departure',
];

for (let i = 0; i < dts.length; i++) {
  if (dts[i].indexOf('ab') != -1) {
    console.log('a_b: ' + dts[i]);
    const [frst, scnd] = dts[i].toLowerCase().trim().split('_');
    console.log(frst, scnd);

    const output = `${frst}${scnd.replace(scnd[5], '_b')}`;
    console.log('output: ' + output);
  }
}

/* HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅ */

const new_array = [
  'underscore_case',
  ' first_name',
  'Some_Variable ',
  '  calculate_AGE',
  'delayed_departure',
];
console.log('####################################################');
//Need to find the index and repeat using entries()
for (const [i, arr] of new_array.entries()) {
  const [first, second] = arr.toLowerCase().trim().split('_');
  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;
  console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
}
