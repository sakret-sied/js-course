import Module from '/node_modules/js-little-core/module.js';

export default class FunctionsTask1 extends Module {
  execute() {
    const survey = {
      question: 'What programming language would you like to learn?',
      options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
      answers: new Array(5).fill(0),
      logNewAnswer() {
        const text =
          this.question +
          '\n' +
          this.options.join('\n') +
          '\n' +
          '(Enter option number)';
        const answer = Number(prompt(text));

        typeof answer === 'number' &&
          Object.keys(this.answers).hasOwnProperty(answer) &&
          this.answers[answer]++;

        this.printResults('string');
      },
      printResults(type = 'array') {
        type === 'array' && console.log(this.answers);
        type === 'string' &&
          console.log(`Survey results: ${this.answers.join(', ')}`);
      },
    };
    const takeSurvey = document.createElement('button');
    takeSurvey.id = takeSurvey.textContent = 'takeSurvey';
    this.content.prepend(takeSurvey);

    takeSurvey.addEventListener('click', survey.logNewAnswer.bind(survey));

    survey.printResults.call({ answers: [7, 1, 4] }, 'string');
    survey.printResults.call({ answers: [3, 6, 9, 2, 5, 4, 4] }, 'string');
  }
}
