let container = document.getElementById("container");
let squaresPerSide = 16;

let createSquare = () => {
  let square = document.createElement("div");
  square.classList.add("new_div");
  container.appendChild(square);
  return square;
};

createSquares = squaresPerSide => {
  for (i = 0; i < squaresPerSide * squaresPerSide; i++) {
    container.appendChild(createSquare());
  }
};

createSquares(squaresPerSide);

let squaresArray = document.querySelectorAll(".new_div");

squaresArray.forEach(square => {
  square.addEventListener("mouseover", function(square) {
    this.classList.add("changed_color");
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
  let userSquares = prompt("How many squares per side?");
  createSquares(userSquares);
  squaresArray.forEach(square => {
    square.addEventListener("mouseover", function(square) {
      this.classList.add("changed_color");
    });
  });
});
