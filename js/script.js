// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana
// (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.


// RACCOLTA DATI UTENTE
// chiedere i chilometri
const userKm = parseInt (prompt ('Scrivimi i chilometri'));
console.log(userKm);

// chiedere l'età
const userAge = parseInt (prompt ('Scrivimi la tua età'));
console.log(userAge);


// CALCOLARE 
// calcolare solo il prezzo del biglietto
const priceTiket = parseFloat(`${userKm * 0.21}`);
console.log(priceTiket);


// SCONTO
// calcolare sconto del 20% ai minorenni
let discount;
if (userAge < 18) {
    discount = priceTiket * 20 / 100;
}else if (userAge > 65) {
    discount = priceTiket * 40 / 100;
}else {
    discount = 0;
}
console.log(discount);


let finalPrice = (priceTiket - discount);
console.log(finalPrice);

// calcolare sconto del 40% agli over 65


// STAMPARE
// .....

