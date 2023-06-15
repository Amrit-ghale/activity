const square = document.getElementById("square");
    let size = 50;
    let increasing = true;
    let colorIndex = 0;
    const colors = ["red", "green", "blue", "yellow"];
    let interval;

    function changeColor() {
      square.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }

    function animateSquare() {
      if (size >= 500) {
        increasing = false;
      } else if (size <= 50) {
        increasing = true;
      }

      if (increasing) {
        size += 100;
      } else {
        size -= 100;
      }

      square.style.width = size + "px";
      square.style.height = size + "px";
      changeColor();

      if (!increasing && size === 50) {
        clearInterval(interval);
        fitToScreen();
        setTimeout(() => {
          interval = setInterval(animateSquare, 1000);
        }, 1000);
      }
    }

    interval = setInterval(animateSquare, 1000);