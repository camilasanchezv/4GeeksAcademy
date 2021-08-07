const who = [
  "My dog",
  "My grandma",
  "My broher",
  "My neighbor",
  "His turtle",
  "A homeless man",
  "Michael Jordan"
];
const action = ["ate", "peed", "broke", "threw up"];
const what = ["my house", "my homework", "my macbook", "my keys", "my car"];
const when = [
  "while I was working",
  "during my lunch",
  "before the class",
  "in the morning",
  "in the night"
];

window.onload = () => {
  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  let excuse =
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex] +
    ".";

  document.getElementById("excuse").innerHTML = excuse;
};
