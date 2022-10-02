let turn = "X";
let allBoxes = document.querySelectorAll(".box");
allBoxes = Array.from(allBoxes);
let textBox = document.querySelector("p");
let allTextBox = document.querySelector(".text-box");
let winnerText = document.querySelector(".winner-text");
let x = false;
let i, j, k = 0;
let resetButton = document.querySelector(".btn");
let setX = new Set();
let set0 = new Set();

allBoxes.forEach((element, index) => {
  element.addEventListener("click", () => {
    if (element.textContent == "" && x == false) {
      turn == "X" ? (element.textContent = "X") : (element.textContent = "0");
      turn == "X"
        ? (textBox.textContent = "It Is The Turn Of: 0")
        : (textBox.textContent = "It Is The Turn Of: X");
      textBox.textContent == "It Is The Turn Of: 0"
        ? (textBox.style.marginRight = "0.711rem")
        : (textBox.style.marginRight = "0rem");
      element.textContent == "X" ? (turn = "0") : (turn = "X");

      if (element.textContent == "X") {
        setX.add(index);

        if (setX.has(0) && setX.has(1) && setX.has(2)){
          i = 0, j = 1, k = 2;
        }
        else if (setX.has(3) && setX.has(4) && setX.has(5)){
          i = 3, j = 4, k = 5;
        }
        else if (setX.has(6) && setX.has(7) && setX.has(8)){
          i = 6, j = 7, k = 8;
        }
        else if (setX.has(0) && setX.has(3) && setX.has(6)){
          i = 0, j = 3, k = 6;
        }
        else if (setX.has(1) && setX.has(4) && setX.has(7)){
          i = 1, j = 4, k = 7;
        }
        else if (setX.has(2) && setX.has(5) && setX.has(8)){
          i = 2, j = 5, k = 8;
        }
        else if (setX.has(0) && setX.has(4) && setX.has(8)){
          i = 0, j = 4, k = 8;
        }
        else if (setX.has(2) && setX.has(4) && setX.has(6)){
          i = 2, j = 4, k = 6;
        }
        if((i + j + k) > 0){
          allBoxes[i].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[i].style.color = "white";
          allBoxes[j].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[j].style.color = "white";
          allBoxes[k].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[k].style.color = "white";
          winnerText.innerHTML = "<p>Winner Is X !!!</p>";
          textBox.textContent = "Game Is Finished !!!";
          x = true;
        }
      } else if (element.textContent == "0") {
        set0.add(index);

        if (set0.has(0) && set0.has(1) && set0.has(2)){
          i = 0, j = 1, k = 2;
        }
        else if (set0.has(3) && set0.has(4) && set0.has(5)){
          i = 3, j = 4, k = 5;
        }
        else if (set0.has(6) && set0.has(7) && set0.has(8)){
          i = 6, j = 7, k = 8;
        }
        else if (set0.has(0) && set0.has(3) && set0.has(6)){
          i = 0, j = 3, k = 6;
        }
        else if (set0.has(1) && set0.has(4) && set0.has(7)){
          i = 1, j = 4, k = 7;
        }
        else if (set0.has(2) && set0.has(5) && set0.has(8)){
          i = 2, j = 5, k = 8;
        }
        else if (set0.has(0) && set0.has(4) && set0.has(8)){
          i = 0, j = 4, k = 8;
        }
        else if (set0.has(2) && set0.has(4) && set0.has(6)){
          i = 2, j = 4, k = 6;
        }
        if((i + j + k) > 0){
          allBoxes[i].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[i].style.color = "white";
          allBoxes[j].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[j].style.color = "white";
          allBoxes[k].style.backgroundColor = "rgb(221 162 84)";
          allBoxes[k].style.color = "white";
          winnerText.innerHTML = "<p>Winner Is 0 !!!</p>";
          textBox.textContent = "Game Is Finished !!!";
          x = true;
        }
      }
    }
  });
});

resetButton.addEventListener("click", () => {
  allBoxes.forEach((element) => {
    console.log(element);
    element.textContent = "";
    textBox.style.marginRight = "0rem";
    textBox.textContent = "It Is The Turn Of: X";
    turn = "X";
    setX = new Set();
    set0 = new Set();
    x = false;
    winnerText.innerHTML = "";
    allBoxes[i].style.backgroundColor = "rgb(248, 211, 162)";
    allBoxes[i].style.color = "black";
    allBoxes[j].style.backgroundColor = "rgb(248, 211, 162)";
    allBoxes[j].style.color = "black";
    allBoxes[k].style.backgroundColor = "rgb(248, 211, 162)";
    allBoxes[k].style.color = "black";
    i = 0, j = 0, k = 0;
  });
});
