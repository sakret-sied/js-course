import Module from '/node_modules/js-little-core/module.js';

export default class StringMethods extends Module {
  execute() {
    let result;
    const firstName = 'Jack';
    const lastName = 'Brown';
    const age = 25;
    const greeting = 'Hello there!';

    result = `${firstName} ${lastName} says "${greeting}. I'm ${age} years old"`;

    // Properties and methods
    result = greeting.length;

    result = firstName.concat(' ', lastName);
    result = greeting.concat(' My name is ', firstName, ' ', lastName);

    result = result.toLocaleUpperCase();
    result = result.toLocaleLowerCase();

    result = firstName[0];

    result = greeting.indexOf('lo');
    result = greeting.lastIndexOf('lo');
    result = greeting.charAt(6);
    result = greeting.charAt(greeting.length - 1);

    result = greeting.substring(0, greeting.indexOf(' '));
    result = greeting.slice(greeting.lastIndexOf(' ') + 1);
    result = greeting.split(' ');
    result = greeting.replace('Hello', 'Hi');
    result = greeting.includes('there');

    console.log(result);
  }
}
