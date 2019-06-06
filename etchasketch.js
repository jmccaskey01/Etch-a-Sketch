const container = document.getElementById('container')



//add button that calls a function that does the thing below


sideSize = prompt("Please enter the number of squares you would like each side to contain.");
etchSquareSize = container.clientWidth/sideSize;

for (i=0; i < sideSize**2; i++) {
  etchSquare = document.createElement('div');
  etchSquare.className = "etchSquare";
  etchSquare.style.height = `${etchSquareSize}px`;
  etchSquare.style.width = `${etchSquareSize}px`;



  etchSquare.addEventListener("mouseover", function(e) {
      let i = 1;
      e.currentTarget.className = "etchSquareDrawn";
      console.log("I was moused over " + i + " times!");
      i++;
  });

  container.appendChild(etchSquare);
}
