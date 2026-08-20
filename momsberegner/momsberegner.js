// Funktion der beregner et beløb med moms
// moms = 25 betyder, at 25% bruges automatisk, hvis man ikke skriver en anden moms
function beregnMoms(beløb, moms = 25) {
  // Beregner prisen med moms lagt til
  let prisMedMoms = beløb + (beløb * moms) / 100;

  // Viser resultatet i konsollen
  console.log(prisMedMoms);

  // Returnerer resultatet, så det også kan bruges andre steder i koden
  return prisMedMoms;
}

// Finder knappen med id'et "beregn" og lytter efter et klik
document.querySelector("#beregn").addEventListener("click", function () {
  // Henter beløbet fra inputfeltet og laver det om til et tal
  let beløb = Number(document.querySelector("#beløb").value);

  // Henter momsen fra inputfeltet og laver den om til et tal
  let moms = Number(document.querySelector("#moms").value);

  // Kalder funktionen og gemmer resultatet
  let resultat = beregnMoms(beløb, moms);

  // Viser resultatet på hjemmesiden
  document.querySelector("#resultat").textContent = resultat;
});
