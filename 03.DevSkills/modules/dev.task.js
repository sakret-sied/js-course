import Module from '/node_modules/js-little-core/module.js';

export default class DevTask extends Module {
  execute() {
    const data1 = [49, 51, 63];
    const data2 = [31, 29, 43, 58, 52];

    Array.prototype.print = function () {
      let message = '...';
      this.forEach((value, index) => {
        message += ` ${value}% humidity in ${index + 1} days ...`;
      });
      return message;
    };

    console.log(data1.print());
    console.log(data2.print());
  }
}
