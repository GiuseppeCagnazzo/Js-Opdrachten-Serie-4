// console.log("test");

// OPDRACHT 2
// In het meegeleverde HTML-bestand, toon of verberg de tekst volgens de aangegeven linken.

let ourDiv = document.getElementById("text");
// console.log(ourDiv);
let hideDiv = function() {
  ourDiv.style.display = "none";
};

let showDiv = function() {
  ourDiv.style.display = "block";
};
