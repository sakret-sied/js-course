import Module from '/node_modules/js-little-core/module.js';

export default class Variable2Example extends Module {
  execute() {
    const name = 'Jack';
    console.log(name);
    //name = 'Jane';

    const color = 'red';

    const user = {
      name: 'Jack',
      gender: 'male',
      age: 24,
    };
    console.log(user);

    user.name = 'Jacky';
    user.age = 25;
    console.log(user);

    // user = {
    //   name: 'Kayle',
    //   gender: 'male',
    //   age: 21,
    // }

    const colors = ['red', 'orange', 'green'];
    console.log(colors);

    colors.push('blue');
    console.log(colors);

    //const colors = ['red', 'orange', 'green'];
  }
}
