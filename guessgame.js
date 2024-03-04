////////////////// A R V A U S P E L I ///////////////////

let number;

let guesses;

start();

function start() {
  console.log("Start");
  number = Math.floor(Math.random() * 10 + 1)
  guesses = 0;
  
  feedback.innerHTML = "";
  document.querySelector("#guess").value = '';
  document.querySelector("#guesses").innerHTML = `Arvausten määrä: ${guesses}`;
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
        feedback.innerHTML = "Väärin! Kokeile vähän isompaa numeroa.";
        feedback.className = 'too-small';
        guesses++;
        break;
      case guess > number:
        feedback.innerHTML = "Väärin! Kokeile vähän pienempää numeroa.";
        feedback.className = 'too-big';
        guesses++;
        break;
      case guess === number:
        feedback.innerHTML = "Oikein!";
        feedback.className = 'correct';
        guesses++;
        epicConfetti();
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
  document.querySelector("#guesses").innerHTML = `Arvausten määrä: ${guesses}`;
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

const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

function epicConfetti() {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  
  fire(0.2, {
    spread: 60,
  });
  
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}