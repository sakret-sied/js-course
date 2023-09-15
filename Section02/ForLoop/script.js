const youra = [
    'YouRa',
    'Allakhverdov',
    1974,
    'developer',
    ['Irina', 'Michael'],
    false,
];

// const types = [];
// for (let i = 0; i < youra.length; i++) {
//     console.log(youra[i], typeof youra[i]);
//     types.push(typeof youra[i]);
// }
// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];
// const ages = [];
// birthYears.forEach((year) => {
//     ages.push(new Date().getFullYear() - year);
// });
// console.log(ages);

// continue & break

loopFor: for (let i = 0; i < youra.length; i++) {
    const elemType = typeof youra[i];
    switch (elemType) {
        case 'string':
            continue loopFor;
        case 'object':
            break loopFor;
        default:
            console.log(youra[i], typeof youra[i]);
    }
}
