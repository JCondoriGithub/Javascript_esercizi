/*  Scrivi un programma per la gestione di una rubrica telefonica.
  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.
  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.
Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
e ricava l'indice sul quale applicare l'operazione.
*/

const contatto = {
  nome: "Mario",
  cognome: "Rossi",
  numero: "3594372519",
  email: "mario.rossi@live.com"
}

const listaContatti = {
  contatti: [contatto],
  getContacts: function() {

    for(let i = 0; i < listaContatti.contatti.length; i++)
      console.log(listaContatti.contatti[i]);
  },
  setContact: function(nome, cognome, telefono, email) {

    const contatto2 = {
      nome: nome,
      cognome: cognome,
      telefono: telefono,
      email: email
    }
    listaContatti.contatti.push(contatto2);
  },
  editContact: function(nome) {

    for(let i = 0; i < listaContatti.contatti.length; i++)
      if(listaContatti.contatti[i].nome == nome)
        listaContatti["contatti"][i].nome = "nuovoNome";
  },
  removeContact: function(nome) {

    for(let i = 0; i < listaContatti.contatti.length; i++)
      if(listaContatti.contatti[i].nome == nome)
        listaContatti.contatti.splice(i, 1);
  },
  getContact: function(nome) {

    for(let i = 0; i < listaContatti.contatti.length; i++)
      if(listaContatti.contatti[i].nome == nome)
        return listaContatti.contatti[i];
  }
}

listaContatti.setContact("billy", "ballo", "4325463430", "billy.ballo.com");
listaContatti.setContact("Riccardo", "Daniele", "9567148599", "ric.dan@hotmail.it");
listaContatti.getContacts();
listaContatti.editContact("Mario");
listaContatti.removeContact("Riccardo");
console.log(listaContatti.getContact("billy"));
