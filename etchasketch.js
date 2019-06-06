const container = document.getElementById('container')
//do container styling in styles.css


let etchSquare;
sideSize = prompt("Please enter the number of squares you would like each side to contain.");
etchSquareSize = container.clientWidth/sideSize;
console.log("etchSquareSize " + etchSquareSize);
console.log(container.clientWidth);


for (i=0; i < sideSize**2; i++) {
  etchSquare = document.createElement('div');
  etchSquare.className = "etchSquare";
  etchSquare.style.height = `${etchSquareSize}px`;
  etchSquare.style.width = `${etchSquareSize}px`;
  etchSquare.style.lineHeight = `${etchSquareSize}px`;
  container.appendChild(etchSquare);
}
