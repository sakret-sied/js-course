import Module from '/node_modules/js-little-core/module.js';

export default class ArrayExample extends Module {
  execute() {
    const red = 'red';
    const orange = 'orange';
    const yellow = 'yellow';
    const green = 'green';
    const blue = 'blue';
    const indigo = 'indigo';
    const violet = 'violet';

    console.log(orange);

    const rainbowColors = [red, orange, yellow, green, blue, indigo, violet];

    rainbowColors[rainbowColors.length] = 'dark blue';

    rainbowColors.forEach((element) => {
      console.log(element);
    });
    console.log('\n');
    console.log(
      rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
    );
  }
}
