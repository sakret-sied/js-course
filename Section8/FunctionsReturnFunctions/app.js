"use strict";

const greet = (text) => (name) => console.log(`${text} ${name}`);
const hi = greet("Hi");
hi("Jack");
hi("Diana");
hi("Mick");

greet("Hey")("Lilu");
