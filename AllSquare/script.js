 const growingSquare = document.getElementById("growingSquare");
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const colors = ["red", "green", "blue", "yellow"];
    let interval;
    let size = 50;
    let increasing = true;
    let colorIndex = 0;

    function changeColor(element) {
      element.style.backgroundColor = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }

    function animateGrowingSquare() {
      if (size >= 500) {
        increasing = false;
      } else if (size <= 50) {
        increasing = true;
        clearInterval(interval);
        setTimeout(() => {
          interval = setInterval(animateGrowingSquare, 1000);
        }, 1000);
      }

      if (increasing) {
        size += 100;
      } else {
        size -= 100;
      }

      growingSquare.style.width = size + "px";
      growingSquare.style.height = size + "px";
      changeColor(growingSquare);
    }

    interval = setInterval(animateGrowingSquare, 1000);

    // Rain Effect
    const rainContainer = document.body;
    const rainSquares = [];

    function createRainSquare() {
      const rainSquare = document.createElement("div");
      rainSquare.className = "rainSquare";
      rainSquare.style.top = "-50px";
      rainSquare.style.left = Math.random() * screenWidth + "px";
      changeColor(rainSquare);
      rainContainer.appendChild(rainSquare);
      rainSquares.push(rainSquare);
    }

    function animateRainSquare() {
      for (let i = 0; i < rainSquares.length; i++) {
        const rainSquare = rainSquares[i];
        let topPos = parseInt(rainSquare.style.top);
        topPos += 10;

        if (topPos >= screenHeight) {
          rainContainer.removeChild(rainSquare);
          rainSquares.splice(i, 1);
          i--;
        } else {
          rainSquare.style.top = topPos + "px";
        }
      }
    }

    setInterval(() => {
      createRainSquare();
    }, 500);

    setInterval(animateRainSquare, 100);

