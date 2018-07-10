let container = document.getElementById("container");
let squaresAmount = 16 * 16;

let createSquare = () => {
  let square = document.createElement("div");
  square.classList.add("new_div");
  container.appendChild(square);
  return square;
};

console.log(createSquare());

createSquares = () => {
  for (i = 0; i < squaresAmount - 1; i++) {
    container.appendChild(createSquare());
  }
};

createSquares();

let squaresArray = document.querySelectorAll(".new_div");

squaresArray.forEach(square => {
  square.addEventListener("mouseover", function(square) {
    this.classList.add("changed_color");
  });
});
