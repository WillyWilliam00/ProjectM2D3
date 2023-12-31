//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let x = 75
let y = 500

if (x > y) {
  console.log (x, "è maggiore di", y)
  }  else if ( x < y ) {
    console.log (y, "è maggiore di", x)
  
      }
    else if (x = y) {
        console.log (x, "e", y, "sono uguali")
      }

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let num = 8

if (num < 5) {
  console.log("Tiny")
} else if ( num < 10 ) {
  console.log("Small")
} else if ( num < 15 ) {
  console.log("Medium")
} else if ( num < 20 ) {
  console.log("Large")
} else if ( num >= 20 ) {
  console.log("Huge")
}

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/


/* SCRIVI QUI LA TUA RISPOSTA */

for (number=0; number<=10; number++) { 
  
  if ((number===3) || (number===8)) {
    continue;
  }

  console.log("number:", number)
}


/* ESERCIZIO 04
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

for (numero=0; numero<=15; numero++) {
  
  if ((numero % 2) === 0) {
    console.log("il numero", numero, "è pari")
  } else {
    console.log("il numero", numero, "è dispari")
  }
 
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

let num2 = 0
let num3 = 8

if ((num2===8) || (num3===8)) {

  console.log("uno dei due numeri è uguale a 8")
} 
else if ((num2 + num3)===8) {

  console.log ("la somma di", num2, "e", num3, "è 8")
}
 else if ((num2 - num3)===8)  {

  console.log ("la sottrazione di", num2, "e", num3, "è 8")
}
else if ((num3 - num2)===8) {

  console.log ("la sottrazione di", num3, "e", num2, "è 8")
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 20
let costoSped = 10



if (totalShoppingCart > 50) {

  console.log("hai la spedizione gratuita! il totale è:", totalShoppingCart)

} else {
  console.log("Il totale è:", totalShoppingCart + costoSped)
}



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 20


let blackfriday = totalShoppingCart2 - ((totalShoppingCart2*20)/100)

if (blackfriday > 50) {

  console.log("hai la spedizione gratuita e il prodotto è scontato del 20%! il totale è:", blackfriday)

} else {
  console.log("hai uno sconto del 20% il totale è:", blackfriday + costoSped)
}



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */



let isMale = true
let gender

isMale ? (gender = "male") : (gender = "female")

console.log(gender)




/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/


for (i=0; i<=100; i++) {

  let stamp = i
  let multiplo3 = (i % 3) === 0
  let multiplo5 = (i % 5) === 0

  if (i === 0) {
    stamp = i
  }
  else if (multiplo3 && multiplo5) {
    stamp = "FizzBuzz"
  }
  else if (multiplo3)  {
    stamp = "Fizz"
  } 
  else if (multiplo5) {
    stamp = "Buzz"
  }
 console.log(stamp)
}