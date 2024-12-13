// var c = Math.ceil(Math.random()*15);
var code = document.getElementById("code");
var c = parseInt(code.value);
var textCode = document.getElementById("texteCode");
var textACode = document.getElementById("texteACode");
var textProp = document.getElementById("prop");
var level = document.getElementById("level");
var lev = parseInt(level.innerHTML);
console.log(lev);
var texte = textACode.value.toUpperCase();
let niv = 0;
console.log(niv);
$(document).ready(() => {
   coder(texte);
})
$("form").submit(function (e) {
   e.preventDefault();
   verif(texte);
})

function coder(texte) {
   let temp = '';
   for (let i = 0; i < texte.length; i++) {
      let charCode = texte.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // Majuscules A-Z
         temp += String.fromCharCode(((charCode - 65 + c) % 26) + 65);
      } else {
         temp += texte.charAt(i); // Non modifié pour les autres caractères
      }
   }
   textCode.textContent = temp;
}
function verif(texte) {
   var rep = textProp.value.toUpperCase();
   if (rep == texte) {
      Swal.fire({
         title: 'Trouvé!',
         text: "Bravo, c'est correct !!!",
         icon: 'success',
         confirmButtonText: 'Cool'
      });
      lev++;
      console.log(lev);
      setTimeout(function () { window.location.href = '/' + lev }, 1000);

      return true;
   }
   else {
      Swal.fire({
         title: 'Raté!',
         text: "Dommage, c'est incorrect !!!",
         icon: 'error',
         confirmButtonText: 'ok'
      });
      return false;

   }

}
function revealSolution(e) {
   e.preventDefault();
   document.getElementById(
      "solutionText"
   ).textContent = `Réponse correcte : ${texte}`;
   document.getElementById("solutionBox").style.display = "block";
}
document
  .getElementById("solutionButton")
  .addEventListener("click", revealSolution);