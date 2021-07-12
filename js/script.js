/*

TODO Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

TODO Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

TODO Bonus:
Aggiungere la validazione dove ritenuto necessario.
Stampare in pagina anzichè in console.

*/

//?Palindroma

var verifyBtn = document.getElementById("verify");
var resetButton = document.getElementById("reset");
var userWord = document.getElementById("user-word");
var answerDisplay = document.getElementById("answer");

//bisogna splittare le lettere della parola e metterle in ordine in un array.
//successivamente stampare l'array partendo dall'ultima posizione alla prima 
//controllare se la parola è palindroma (ovvero se è uguale alla parola inserita dall'utente)

//!Alla pressionde del tato VERIFICA inizia il controllo
verifyBtn.addEventListener("click", function () {
    var word = userWord.value;
    word = word.toLowerCase(); //Per evitare le maiuscole tipo Anna -> annA quindi non risulterebbe palindroma
    // console.log(word);

    if (palindrome(word)) {
        result = "La parola inserita è palindroma";
    } else result = "La parola inserita non è palindroma";
    answerDisplay.innerHTML = result;
    verifyBtn.classList.add("d-none");
    resetButton.classList.remove("d-none");
})

//! Tasto che resetta il risultato e la pagina come all'inizio
resetButton.addEventListener("click", function () {
    verifyBtn.classList.remove("d-none");
    resetButton.classList.add("d-none");
    userWord.value = "";
    answerDisplay.innerHTML = "";
})


//! Funzione per il controllo della parola PALINDROMA:
//1 - Si splitta la parola che verrà salvata in un array
//2 - Array Reverse che useremo  per salvare la parola al contrario
//3 - For che salva il primo elemento di userWord nell'ultimo di reverse...
//4 - Dare true se è palindromo, false se invece non lo è

function palindrome(str) {
    var userWordSplit = str.split("");
    var reverse = [];
    var c = 0;
    for (var i = userWordSplit.length - 1; i >= 0; i--) {
        reverse[c] = userWordSplit[i];
        c++;
    }
    var userWordReverse = reverse.join("");
    if (userWordReverse == str) {
        return true;
    }
    return false;
}