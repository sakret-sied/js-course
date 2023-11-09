import Module from '/node_modules/js-little-core/module.js';

export default class ArrayTask extends Module {
  execute() {
    const data = [11, 20, 47];
    const calculateTips = (bill) => (bill < 20 ? bill * 0.2 : bill * 0.15);
    let tips = [];
    let total = [];

    data.forEach(function (element) {
      const tip = calculateTips(element);
      tips.push(tip);
      total.push(element + tip);
    });

    console.log(data);
    console.log(tips);
    console.log(total);
  }
}
