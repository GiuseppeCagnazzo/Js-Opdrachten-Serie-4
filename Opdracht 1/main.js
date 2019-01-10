// console.log("test");

// Opdracht 1
// In het meegeleverd HTML-bestand, wanneer u over de afbeelding zweeft, voegt u een rode 3px rand toe en verwijdert u deze wanneer de muis er niet meer overheen zweeft.

let img1 = document.getElementById("image1");
// console.log(img1);
let addBorder = function() {
  img1.style.border = "3px solid red";
}

let noBorder = function() {
  img1.style.border = "none";
}

img1.addEventListener("mouseover", addBorder);
img1.addEventListener("mouseleave", noBorder);
