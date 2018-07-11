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

console.log(document.styleSheets[0].cssRules[1]);

createGrid(16);
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

createSquares(squaresPerSide); */

//add hover
let squaresArray = document.querySelectorAll(".new_div");

//first layout
/*squaresArray.forEach(square => {
  square.addEventListener("mouseover", function(square) {
    this.classList.add("changed_color");
  });
});*/

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
  });*/
});
