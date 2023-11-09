import Module from '/node_modules/js-little-core/module.js';

export default class Variable1Example extends Module {
  execute() {
    let name = 'Jack';
    console.log(name);
    name = 'Kayle';
    console.log(name);
    var color;
    console.log(color);

    // mainColor = 'green'; // camel case
    // main_color; // snake case
    // main-color; // kebab case
    // MyMainCase; // Pascal case
  }
}
