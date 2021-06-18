// смотреть обучающее видео на ютубе
// https://vladilen.ru/marathon/board
// https://www.youtube.com/watch?v=gX3Ev1ATxfI

const board = document.querySelector("#board");
const colors = [
  "#06a192",
  "#318c83",
  "#4cc4b8",
  "#77efe3",
  "#067267",
  "#11dbc7",
  "#03544c",
  "#2c5b57",
  "#e5e547",
  "#efef45",
];
const SQUARES_NUMBER = 450;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  //   Можно так:
  //   square.addEventListener("mouseover", () => {
  //     //console.log("iinindfv");
  //     setColor(square);
  //   });

  //   square.addEventListener("mouseleave", () => {
  //     //console.log("iinindfv");
  //     removeColor(square);
  //   });

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

// если по закомментированному коду выше, то тогда так:
// function setColor(element) {
//   const color = getRandomColor();
//   element.style.backgroundColor = color;
//   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
// }

// function removeColor(element) {
//   element.style.backgroundColor = "#1d1d1d";
//   element.style.boxShadow = `0 0 2px #000`;
// }

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor(element) {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
