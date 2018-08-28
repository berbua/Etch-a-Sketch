const container = document.getElementById("container");
let squaresPerSide = 16;
let color = 0;
//create squares grid refactored

const createGrid = sideSize => {
  document.styleSheets[0].cssRules[3].style["grid-template-columns"] =
    "repeat(" + sideSize + ", 1fr)";
  document.styleSheets[0].cssRules[3].style["grid-template-rows"] =
    "repeat(" + sideSize + ", 1fr)";
  for (i = 0; i < sideSize * sideSize; i++) {
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
const buttonClear = document.getElementById("reset");
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
    color ? colourful() : "";
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
    for (let j = 0; j < 6; j++) {
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
