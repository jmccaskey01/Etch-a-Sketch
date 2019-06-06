const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function setupCanvas(){

  sideSize = prompt("Please enter the number of squares you would like each side to contain.");

  etchSquareSize = container.clientWidth/sideSize;

  for (i=0; i < sideSize**2; i++) {
    etchSquare = document.createElement('div');
    etchSquare.className = "etchSquare";
    etchSquare.style.height = `${etchSquareSize}px`;
    etchSquare.style.width = `${etchSquareSize}px`;



    etchSquare.addEventListener("mouseover", function(e) {
      e.currentTarget.className = "etchSquareDrawn";
    });

    container.appendChild(etchSquare);
  }
}

resetButton.addEventListener("click", function(){

  for (i=container.childNodes.length; i > 0; i--) {
    container.removeChild(container.childNodes[0]);
  }
  setupCanvas();
});

setupCanvas();
//add button that calls a function that does the thing below
