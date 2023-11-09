import Module from '/node_modules/js-little-core/module.js';

export default class FunctionCalling extends Module {
  execute() {
    function colorMixer(color1, color2) {
      return `${color1} + ${color2}`;
    }

    function colorizer(item, color1, color2) {
      const color = colorMixer(color1, color2);
      return `The ${item} is ${color}`;
    }

    console.log(colorizer('car', 'red', 'black'));
  }
}
