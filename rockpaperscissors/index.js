"use strict";

// Variabler der gemmer computerens og brugerens valg
let computerensValg;
let brugerensValg;

// Starter begge scores på 0
let brugerScore = 0;
let computerScore = 0;

// Finder de to hænder i HTML
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

// Finder score og resultattekst i HTML
const brugerScoreTekst = document.querySelector("#brugerScore");
const computerScoreTekst = document.querySelector("#computerScore");
const resultatTekst = document.querySelector("#resultat");

// Finder de tre knapper i HTML
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// Lytter efter klik på de tre knapper
rockBtn.addEventListener("click", rockClicked);
paperBtn.addEventListener("click", paperClicked);
scissorsBtn.addEventListener("click", scissorsClicked);

// Kører når brugeren klikker på sten
function rockClicked() {
  // console.log("ROCK CLICKED");
  brugerensValg = "rock";
  traefferValg();
}

// Kører når brugeren klikker på papir
function paperClicked() {
  // console.log("PAPER CLICKED");
  brugerensValg = "paper";
  traefferValg();
}

// Kører når brugeren klikker på saks
function scissorsClicked() {
  // console.log("SCISSORS CLICKED");
  brugerensValg = "scissors";
  traefferValg();
}

// Computerens valg
// Funktion der træffer valg
function traefferValg() {
  // Array med de tre mulige valg
  const muligheder = ["rock", "paper", "scissors"];

  // Laver et tilfældigt tal fra 0 til 2.
  // Tallet bruges som index til at vælge rock, paper eller scissors
  // Fx hvis tallet er 1, bliver computerens valg "paper"
  const tilfældigtTal = Math.floor(Math.random() * 3);

  // Bruger det tilfældige tal til at vælge fra arrayet
  computerensValg = muligheder[tilfældigtTal];

  // Starter animationen
  nedTaelling();
}

// Nedtælling
// Starter ryste-animationen på begge hænder
function nedTaelling() {
  // Tilføjer CSS-classen "shake" til hænderne
  player1.classList.add("shake");
  player2.classList.add("shake");

  // Når animationen er færdig, køres visValg
  // once: true betyder at event listeneren kun bruges én gang
  player1.addEventListener("animationend", visValg, { once: true });
}

// Funktion der viser valget
// Viser brugerens og computerens valg
function visValg() {
  // Fjerner den gamle animation og tidligere valg
  player1.classList.remove("shake", "rock", "paper", "scissors");
  player2.classList.remove("shake", "rock", "paper", "scissors");

  // Tilføjer det nye valg som en CSS-class
  // CSS'en viser derefter det rigtige billede af hånden
  player1.classList.add(brugerensValg);
  player2.classList.add(computerensValg);

  // Finder ud af hvem der vandt
  afgørResultatet();
}

// Funktion der afgør resultatet
// Finder vinderen af runden
function afgørResultatet() {
  // Hvis begge har valgt det samme, er det uafgjort
  if (brugerensValg === computerensValg) {
    console.log("Draw");
    resultatTekst.textContent = "DRAW!";

    // Tjekker alle kombinationer hvor brugeren vinder
  } else if (
    (brugerensValg === "rock" && computerensValg === "scissors") ||
    (brugerensValg === "paper" && computerensValg === "rock") ||
    (brugerensValg === "scissors" && computerensValg === "paper")
  ) {
    console.log("You won!");
    resultatTekst.textContent = "YOU WON!";

    // Lægger 1 til brugerens score
    brugerScore++;
  } else {
    console.log("Computer won!");
    resultatTekst.textContent = "COMPUTER WON!";

    // Lægger 1 til computerens score
    computerScore++;
  }

  // Opdaterer scoren på hjemmesiden
  brugerScoreTekst.textContent = brugerScore;
  computerScoreTekst.textContent = computerScore;
}
