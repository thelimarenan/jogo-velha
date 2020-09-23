const IMAGE_PLAYER_X = "./images/x.png";
const IMAGE_PLAYER_O = "./images/O.png";

let currentPlayer = "x";

function init() {
  const espacos = document.querySelectorAll(".espaco");

  espacos.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.childElementCount == 0) {
        element.appendChild(getSymbol());
        changePlayer();
        verifica(element.id);
      }
    });
  });

  document.getElementById("reset-game").addEventListener("click", () => {
    console.log("ALo");
    resetGame();
  });
}

function getSymbol() {
  const img = document.createElement("img");
  if (isPlayerX()) {
    img.src = IMAGE_PLAYER_X;
    currentPlayer = "o";
    return img;
  }
  if (isPlayerO()) {
    img.src = IMAGE_PLAYER_O;
    currentPlayer = "x";
    return img;
  }
}

function changePlayer() {
  const playerImg = document.querySelector("#player-display>img");

  if (isPlayerX()) {
    playerImg.src = IMAGE_PLAYER_X;
  }
  if (isPlayerO()) {
    playerImg.src = IMAGE_PLAYER_O;
  }
}

function isPlayerX() {
  return currentPlayer === "x";
}

function isPlayerO() {
  return currentPlayer === "o";
}

function resetGame() {
  currentPlayer = "x";
  changePlayer();

  const imgEspacos = document.querySelectorAll(".espaco>img");
  imgEspacos.forEach((element) => {
    element.remove();
  });
}

function verifica(position) {
  const row = position.substring(0, 1);
  const column = position.substring(1, 2);
}

window.onload = init;
