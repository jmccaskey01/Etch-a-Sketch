const container = document.getElementById('container');
const resetButton = document.getElementById('reset');
const colorButton = document.getElementById('resetRandColor');
const clearButton = document.getElementById('clear');

function setupCanvas(color="black"){

  sideSize = prompt("Please enter the number of squares you would like each side to contain.");
  if(sideSize > 125) {
    sideSize = prompt("Please enter a number lower than 125 or the page will break");
  }
  etchSquareSize = container.clientWidth/sideSize;

  for (i=0; i < sideSize**2; i++) {
    etchSquare = document.createElement('div');
    etchSquare.className = "etchSquare";
    etchSquare.style.height = `${etchSquareSize}px`;
    etchSquare.style.width = `${etchSquareSize}px`;



    etchSquare.addEventListener("mouseover", function(e) {
      e.currentTarget.style.backgroundColor = color;
    });

    container.appendChild(etchSquare);
  }
}

function clearCanvas() {
  for (i=container.childNodes.length; i > 0; i--) {
    container.removeChild(container.childNodes[0]);
  }
}

function getRandomColor() {
  function c() {
    var hex = Math.floor(Math.random()*256).toString(16);
    return ("0"+String(hex)).substr(-2); // pad with zero
  }
  return "#"+c()+c()+c();
}

function setupCanvasRandomColor(){

    sideSize = prompt("Please enter the number of squares you would like each side to contain.");
    if(sideSize > 125) {
      sideSize = prompt("Please enter a number lower than 125 or the page will break");
    }
    etchSquareSize = container.clientWidth/sideSize;

    for (i=0; i < sideSize**2; i++) {
      etchSquare = document.createElement('div');
      etchSquare.className = "etchSquare";
      etchSquare.style.height = `${etchSquareSize}px`;
      etchSquare.style.width = `${etchSquareSize}px`;



      etchSquare.addEventListener("mouseover", function(e) {
        e.currentTarget.style.backgroundColor = getRandomColor();
      });

      container.appendChild(etchSquare);
    }

}

clearButton.addEventListener("click", function(){clearCanvas()})
resetButton.addEventListener("click", function(){
  clearCanvas();
  setupCanvas();
});
colorButton.addEventListener("click", function(){
  clearCanvas();
  setupCanvasRandomColor();
});
