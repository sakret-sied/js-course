import Module from '/node_modules/js-little-core/module.js';

export default class SwitchExample extends Module {
  execute() {
    const color = 'red';
    switch (color) {
      case 'green':
        console.log('Go');
        break;
      case 'red':
        console.log('Stop');
        break;
      case 'yellow':
        console.log('Wait');
        break;
      default:
        console.log('Incorrect');
    }

    const weekday = 'monday';
    switch (weekday) {
      case 'monday':
        console.log("It's monday");
        break;
      case 'tuesday':
        console.log("It's tuesday");
        break;
      case 'wednesday':
        console.log("It's wednesday");
        break;
      case 'thursday':
        console.log("It's thursday");
        break;
      case 'friday':
        console.log("It's friday");
        break;
      case 'saturday':
        console.log("It's saturday");
        break;
      case 'sunday':
        console.log("It's sunday");
        break;
      default:
        console.log('Incorrect');
        break;
    }
  }
}
