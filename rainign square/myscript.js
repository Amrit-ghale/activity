const square = document.getElementById("square");
const screenHeight = window.innerHeight;
const colors = ["red", "green", "blue", "yellow"];
let interval;
let topPos = -50;
let leftPos = 0;
let colorIndex = 0;

function changeColor() {
  square.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}

function animateSquare() {
  if (topPos >= screenHeight) {
    topPos = -50;
    leftPos += 50;

    if (leftPos >= window.innerWidth) {
      leftPos = 0;
    }
  }

  topPos += 10;
  square.style.top = topPos + "px";
  square.style.left = leftPos + "px";
  changeColor();
}

interval = setInterval(animateSquare, 90);