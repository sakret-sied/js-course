import Module from '/node_modules/js-little-core/module.js';

export default class QuestionaryTask extends Module {
  execute() {
    const firstName = prompt(`What is your first name`);
    console.log(`Your first name is ${firstName}`);

    const lastName = prompt(`What is your second name`);
    console.log(`Your last name is ${lastName}`);

    const age = prompt(`What is your age`);
    console.log(`Your age is ${age}`);
  }
}
