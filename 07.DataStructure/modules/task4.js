import Module from '/node_modules/js-little-core/module.js';

export default class Task4 extends Module {
  execute() {
    const textarea = document.createElement('textarea');
    this.content.append(textarea);

    const button = document.createElement('button');
    this.content.append(button);

    button.addEventListener('click', function () {
      const text = textarea.value;
      const textArray = text.split('\n');
      for (const line of textArray) {
        const lineArray = line.trim().toLowerCase().split('_');
        const lineFormated = [];
        let notFirstWord = false;
        for (const word of lineArray) {
          const wordFormated =
            (notFirstWord && word.replace(word[0], word[0].toUpperCase())) ||
            word;
          notFirstWord = true;
          lineFormated.push(wordFormated);
        }
        console.log(lineFormated.join(''));
      }
    });
  }
}
