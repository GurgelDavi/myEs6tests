/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);
console.log('deconstructing');
for (const member of members) {
  const [key,value] = member;
     console.log(key, value);
}
console.log('usingNext');
let iteratorObjForKeys = members.keys();
console.log(iteratorObjForKeys.next());
console.log('forEach');
members.forEach((value, key) => console.log(value, key));
