const person = {
  name: 'DaNya',
  lastName: 'Allakhverdov',
  birthYear: 1974,
  job: 'programming instructor',
  family: { wife: 'Irina', child: 'Michael', me: 'DaNya' },
};
console.log(person);

const property = prompt('What do you want');
console.log(person[property] ?? 'GTFO');

const familyKeys = Object.keys(person.family);
const familyValues = Object.values(person.family);
console.log(
  `${person.name} has ${familyKeys.length} and the first one is ${familyValues[0]}`,
);
