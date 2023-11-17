// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}
// marco 0 - Paul 1 - Amy 2
let users =[];
let ambassador = []
const prices = [35, 5, 2, 50 , 30]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy ;
//cambia il valore qui per provare se il tuo algoritmo funziona!
let cart = 100 ;
let sale = ((cart * 30) / 100);

// push per inserire gli utenti nell'array
users.push(marco, paul, amy)

// for per elencare gli utenti e se sono o meno ambassador
for (let index = 0; index < users.length; index++) {
  if (users[index].isAmbassador == true) {
    console.log(users[index].name + " " + users[index].lastName + " è un ambassador");
    ambassador.push(users[index]);
  } else {
    console.log(users[index].name + " " + users[index].lastName + " non è un ambassador");
  } 
}
// per far capire meglio chi sta facendo l'aquisto dei 3
console.log(utenteCheEffettuaLAcquisto.name + " " + utenteCheEffettuaLAcquisto.lastName + " ecco il tuo riepilogo:");
// teoricamente si dovrebbe controllare se esiete questo utente quindi ho messo questa parte
if (!users.includes(utenteCheEffettuaLAcquisto)) {
  console.log("Utente non trovato");
} 
// qui verifica il tip di calcolo da fare in tutte le possibili varianti 
else {
  if (ambassador.includes(utenteCheEffettuaLAcquisto)) {
    if (cart > 100) {
      console.log("Totale spesa: ");
      console.log(cart - sale);
      console.log("(sconto esclusivo Ambassador, costi di spedizione rimossi per spese sopra i 100 euro)");
    } else {
      console.log("Totale spesa: ");
      console.log((cart - sale) + shippingCost);
      console.log("(sconto esclusivo Ambassador, aggiunti costi di spedizione)");
    }
  } else {
    if (cart > 100) {
      console.log("Totale spesa: ");
      console.log(cart);
      console.log("(costi di spedizione rimossi per spese sopra i 100 euro)");
    } else {
      console.log("Totale spesa: ");
      console.log(cart  + shippingCost);
      console.log("(aggiunti costi di spedizione)");
    }
  }
}
