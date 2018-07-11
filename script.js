let container = document.getElementById("container");
let squaresPerSide = 16;
//create squares grid refactored

let createGrid = sideSize => {
  document.styleSheets[0].cssRules[1].style["grid-template-columns"] =
    "repeat(" + sideSize + ", 1fr)";
  document.styleSheets[0].cssRules[1].style["grid-template-rows"] =
    "repeat(" + sideSize + ", 1fr)";
  for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
    let square = document.createElement("div");
    square.className = "new_div";
    container.appendChild(square);
  }
};
//load starting grid

createGrid(16);

//add hover

onHover = () => {
  let squaresArray = Array.from(document.querySelectorAll(".new_div"));
  for (i = 0; i < squaresArray.length; i++) {
    squaresArray[i].addEventListener("mouseover", function(e) {
      //change css value based on current value
      this.style.opacity
        ? (this.style.opacity = parseFloat(this.style.opacity) + 0.1)
        : (this.style.opacity = 0.1);
    });
  }
};

//apply listeners to initial grid
onHover();

//clear board on click
let buttonClear = document.getElementById("reset");
buttonClear.addEventListener("click", e => {
  let newSize = Number(window.prompt("How many squares per side?", 16));
  //only if new size is provided remove old grid
  if (newSize) {
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
    //create new grid from size
    createGrid(newSize);
    onHover();
    color ? colorful() : "";
  }
});

// toggle B/W and color pixels
document.querySelector("#color_change").addEventListener("click", e => {
  if (color) {
    color = 0;
    bw();
  } else {
    color = 1;
    colourful();
  }
});

//add color to pixels
function colourful() {
  let squares = Array.from(document.querySelectorAll(".new_div"));
  const hexSymbol = "0123456789abcdef";

  // loop through each pixel
  for (i = 0; i < squares.length; i++) {
    let color = "#";
    squares[i].style.opacity = 0;
    //create a random hexcode for each pixel
    for (var j = 0; j < 6; j++) {
      color += hexSymbol.charAt(Math.floor(Math.random() * hexSymbol.length));
    }
    //set pixel to new color
    console.log(Math.floor(Math.random() * hexSymbol.length));
    squares[i].style.backgroundColor = color;
  }
}

// remove color from pixels
function bw() {
  let squares = Array.from(document.querySelectorAll(".new_div"));
  for (i = 0; i < squares.length; i++) {
    squares[i].style.opacity = 0;
    squares[i].style.backgroundColor = "black";
  }
}

//before refactoring

/*
//create one square
let createSquare = () => {
  let square = document.createElement("div");
  square.className = "new_div";
  container.appendChild(square);
  return square;
};

//create squares grid
createSquares = squaresPerSide => {
  for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
    container.appendChild(createSquare());
  }
};

createSquares(squaresPerSide); 

let squaresArray = document.querySelectorAll(".new_div");

//first layout
/*squaresArray.forEach(square => {
  square.addEventListener("mouseover", function(square) {
    this.classList.add("changed_color");
  });
});

//second layout
squaresArray.forEach(square => {
  square.addEventListener("mouseover", function(square) {
    if (this.classList.contains("changed_color") == true) {
      this.classList.add("changed_color2");
    } else {
      this.classList.add("changed_color");
    }
  });
});

clearSketchPad = () => {
  let paintedSquares = document.querySelectorAll(".changed_color");
  paintedSquares.forEach(square => {
    square.classList.remove("changed_color");
  });
};

let buttonClear = document.getElementById("reset");
buttonClear.addEventListener("click", function() {
  clearSketchPad();
  /*let userSquares = prompt("How many squares per side?");
  createSquares(userSquares);
  squaresArray.forEach(square => {
    square.addEventListener("mouseover", function(square) {
      this.classList.add("changed_color");
    });
  });
}); */
