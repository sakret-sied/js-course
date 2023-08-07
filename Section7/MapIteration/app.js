"use strict";

const question = new Map([
    [
        "question",
        "What is the most popular programming language for front-end?",
    ],
    [1, "JavaScript"],
    [2, "Java"],
    [3, "Python"],
    ["currectAnswer", 1],
    [true, "Correct answer"],
    [false, "This is incorrect"],
]);

let text = question.get("question");
for (const [key, value] of question) {
    if (typeof key === "number") {
        text += `\n${key}. ${value}`;
    }
}
const answer = Number(prompt(text));
alert(question.get(question.get("currectAnswer") === answer));
