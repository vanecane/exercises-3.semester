"use strict";

// Finder elementerne fra HTML
const forLavt = document.querySelector("#for-lavt");
const forHoejt = document.querySelector("#for-hoejt");
const korrekt = document.querySelector("#korrekt");
const start = document.querySelector("#start");

const aiGaetTekst = document.querySelector("#ai-gaet");
const feedback = document.querySelector("#feedback");

// Lytter efter klik på knapperne
forLavt.addEventListener("click", forLavtClick);
forHoejt.addEventListener("click", forHoejClick);
korrekt.addEventListener("click", korrektClick);
start.addEventListener("click", startSpil);

// Variabler
let min = 0;
let max = 100;
let guess;
let antalGaet = 0;

// Knapperne kan ikke bruges før spillet starter
forLavt.disabled = true;
forHoejt.disabled = true;
korrekt.disabled = true;

// Starter spillet
function startSpil() {
  min = 0;
  max = 100;
  antalGaet = 0;

  forLavt.disabled = false;
  forHoejt.disabled = false;
  korrekt.disabled = false;

  start.disabled = true;

  feedback.textContent = "";

  aiGaet();
}

// Hvis computerens gæt er for højt
function forHoejClick() {
  max = guess - 1;

  feedback.textContent = "Okay, mit gæt var for højt.";

  aiGaet();
}

// Hvis computerens gæt er for lavt
function forLavtClick() {
  min = guess + 1;

  feedback.textContent = "Okay, mit gæt var for lavt.";

  aiGaet();
}

// Hvis computeren har gættet rigtigt
function korrektClick() {
  feedback.textContent = `Jeg gættede dit tal på ${antalGaet} gæt!`;

  forLavt.disabled = true;
  forHoejt.disabled = true;
  korrekt.disabled = true;

  start.disabled = false;

  lavKonfetti();
}

// Computeren laver sit næste gæt
function aiGaet() {
  guess = Math.round((max - min) / 2 + min);

  antalGaet++;

  aiGaetTekst.textContent = guess;

  console.log("Mit gæt er:", guess);
}

const restart = document.querySelector("#restart");

restart.addEventListener("click", restartSpil);

function restartSpil() {
  min = 0;
  max = 100;
  guess = undefined;
  antalGaet = 0;

  aiGaetTekst.textContent = "?";
  feedback.textContent = "";

  forLavt.disabled = true;
  forHoejt.disabled = true;
  korrekt.disabled = true;

  start.disabled = false;
}

function lavKonfetti() {
  for (let i = 0; i < 100; i++) {
    const konfetti = document.createElement("div");

    konfetti.classList.add("konfetti");

    konfetti.style.left = Math.random() * 100 + "vw";
    konfetti.style.animationDelay = Math.random() * 2 + "s";
    konfetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 60%)`;

    document.body.appendChild(konfetti);

    setTimeout(() => {
      konfetti.remove();
    }, 3000);
  }
}
