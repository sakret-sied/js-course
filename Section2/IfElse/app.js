let age = 6;
const adultAge = 18;

if (age >= adultAge) {
  console.log("You can watch this video");
} else {
  console.log(`Your are still child for ${adultAge - age} years`);
}

const birthYear = 2012;
age = new Date().getFullYear() - birthYear;
const answer = age >= adultAge ? "Yes" : "No";
console.log(`Am I adult? - ${answer}`);

const color = "green";
function command(color) {
  switch (color) {
    case "green":
      return "Go!";
    case "red":
      return "Stop!";
    case "yellow":
      return "Wait";
    default:
      return "It's broke";
  }
};
console.log(command(color));
