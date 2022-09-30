/*Creare una pagina HTML, contenente un certo numero di paragrafi (ad esempio esercizi),
che permetta di inserire un nuovo paragrafo (esercizio) nella posizione desiderata.*/

const btn = document.getElementById("button");

btn.addEventListener('click', addForm);
function addForm() {
  btn.style.display = "none";
  document.querySelector("#form").style.display = "block";
}

const btn2 = document.getElementById("button2");

btn2.addEventListener('click', addParag);
function addParag() {

  const myP = document.createElement("p");
  myP.appendChild(document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ADDED"));

  const checkFine = document.getElementById("fine");
  const checkIni = document.getElementById("inizio");

  if(checkFine.checked == true && checkIni.checked == false)
    document.querySelector("div").appendChild(myP);
      else if(checkIni.checked == true && checkFine.checked == false){
        const listP = document.querySelectorAll("p");
        let selectV = document.getElementById("select").value;
        document.querySelector("div").insertBefore(myP, listP[selectV-1]);
        const newOpt = document.createElement("option");
        newOpt.value = selectV-1;
        newOpt.appendChild(document.createTextNode(selectV-1));
        const listOpt = document.querySelectorAll("option");
        document.getElementById("select").insertBefore(newOpt, listOpt[selectV-1]);
      } else 
        document.querySelector("body").appendChild(document.createTextNode("ERRORE!"));
}

