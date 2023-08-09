"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const text = textarea.value;
    const textArray = text.split("\n");
    for (const line of textArray) {
        const lineArray = line.trim().toLowerCase().split("_");
        const lineFormated = [];
        let notFirstWord = false;
        for (const word of lineArray) {
            const wordFormated =
                (notFirstWord &&
                    word.replace(word[0], word[0].toUpperCase())) ||
                word;
            notFirstWord = true;
            lineFormated.push(wordFormated);
        }
        console.log(lineFormated.join(""));
    }
});
