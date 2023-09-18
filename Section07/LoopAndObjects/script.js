'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const workingHours = {
  [weekdays[2]]: {
    open: 10,
    close: 23,
  },
  [weekdays[4]]: {
    open: 10,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
  [weekdays[6]]: {
    open: 12,
    close: 23,
  },
};

// Property keys
const props = Object.keys(workingHours);
console.log(props.length);
for (const day of props) {
  console.log(day);
}

// Property values
const values = Object.values(workingHours);
for (const day of values) {
  console.log(day);
}

// Propery entries
const entries = Object.entries(workingHours);
for (const [key, { open, close }] of entries) {
  console.log(key, open, close);
}
