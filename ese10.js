/*  Scrivi un programma che dato:
    - Il nome del mese si calcoli quanti giorni abbia
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.*/

let mese = "luglio";
let giorniMese;
let numeGiorno = 1;
let giornoIni = 4;

if(mese == "aprile"|| mese == "giugno" || mese == "settembre" || mese == "novembre") 
  giorniMese = 30;
  else if(mese == "febbraio")
    giorniMese = 28;
  else
    giorniMese = 31;


for(let i = 0; i < giorniMese; i++) {

  switch(giornoIni) {
    case 0:
      console.log("lun " + numeGiorno);
      break;
    case 1:
      console.log("mar " + numeGiorno);
      break;
    case 2:
      console.log("mer: " + numeGiorno);
      break;
    case 3:
      console.log("gio " + numeGiorno);
      break;
    case 4:
      console.log("ven " + numeGiorno);
      break;
    case 5:
      console.log("sab: " + numeGiorno);
      break;
    case 6:
      console.log("dom: " + numeGiorno);
      break;
  }

  numeGiorno++;
  giornoIni++;

  if(giornoIni > 6)
    giornoIni = 0;
}