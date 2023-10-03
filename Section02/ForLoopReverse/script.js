const danya = [
  'DaNya',
  'Allakhverdov',
  1974,
  'developer',
  ['Irina', 'Michael'],
  false,
];

loopFor: for (let i = danya.length - 1; i >= 0; i--) {
  const elemType = typeof danya[i];
  switch (elemType) {
    case 'string':
      continue loopFor;
    case 'object':
      break loopFor;
    default:
      console.log(danya[i], typeof danya[i]);
  }
}

for (let exercise = 1; exercise <= 3; exercise++) {
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} Rep ${rep}`);
  }
}
