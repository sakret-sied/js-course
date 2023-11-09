import Module from '/node_modules/js-little-core/module.js';

export default class MapIteration extends Module {
  execute() {
    const question = new Map([
      [
        'question',
        'What is the most popular programming language for front-end?',
      ],
      [1, 'JavaScript'],
      [2, 'Java'],
      [3, 'Python'],
      ['currectAnswer', 1],
      [true, 'Correct answer'],
      [false, 'This is incorrect'],
    ]);

    let text = question.get('question');
    const textConcat = (line) => {
      text += line;
    };
    for (const [key, value] of question) {
      typeof key === 'number' && textConcat(`\n${key}. ${value}`);
    }
    const answer = Number(prompt(text));
    alert(question.get(question.get('currectAnswer') === answer));
  }
}
