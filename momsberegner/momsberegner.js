// Funktion beregner et beløb med moms
function beregnMoms(beløb, moms = 25) {
  // Beregner hvor meget beløbet bliver med moms lagt til
  let prisMedMoms = beløb + (beløb * moms) / 100;

  // Viser resultatet i konsollen
  console.log(prisMedMoms);
}

// Kalder funktionen med 100 kr.
// Fordi der ikke er skrevet en momsprocent, bruger den automatisk 25%
beregnMoms(100);

// Her kaldes funktionen med 10% moms
beregnMoms(100, 10);
