// console.log("test");

// OPDRACHT 4
// Zet in het meegeleverde HTML-bestand de invoergrenzen in het rood als de wachtwoorden verschillend zijn. Zet ze anders in het groen.

let value1 = document.getElementById("password");
let value2 = document.getElementById("confirmation");
// console.log(value1);
// console.log(value2);
let check = function() {
  if (value1.value === value2.value) {
    value1.style.border= "3px solid green";
    value2.style.border= "3px solid green";
  } else {
    value1.style.border= "3px solid red";
    value2.style.border= "3px solid red";
  }
}

value1.addEventListener("keyup", check);
value2.addEventListener("keyup", check);

// value1.onkeyup = check;
// value2.onkeyup = check;
