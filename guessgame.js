////////////////// A R V A U S P E L I ///////////////////

let number;

start();

function start() {
  console.log("Start");
  number = Math.floor(Math.random() * 10 + 1)
  feedback.innerHTML = "";
  document.querySelector("#guess").value = '';
}

const guessButton = document.querySelector("#guessButton");

guessButton.addEventListener("click", function (event) {
  guessNumber();
});

const guessInput = document.querySelector("#guess");

guessInput.addEventListener("click", function (event) {
  document.querySelector("#guess").value = '';
})

guessInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    guessButton.click();
  }
})


function guessNumber() {
  console.log("Guess made");
  const guess = Number(guessInput.value)
  const feedback = document.querySelector("#feedback")

  console.log(guess)
  console.log(number)

  if (guess > 0 && guess <= 10) {
    switch (true) {
      case guess < number:
        feedback.innerHTML = "Isompi";
        feedback.className = 'too-small';
        break;
      case guess > number:
        feedback.innerHTML = "Pienempi";
        feedback.className = 'too-big';
        break;
      case guess === number:
        feedback.innerHTML = "Arvasit oikein!";
        feedback.className = 'correct';
        guessButton.disabled = true;
        guessInput.disabled = true;
        break;
      default:
        feedback.innerHTML = "Jotain meni pieleen.";
        break;
    }
  }
  else {
    document.querySelector("#feedback").innerHTML = "Anna numero väliltä 1-10";
  }
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", function (event) {
  reset();
});

function reset() {
  console.log("Reset");

  guessButton.disabled = false;
  guessInput.disabled = false;

  start();
}
