// var c = Math.ceil(Math.random()*15);
if(!localStorage.getItem('count'))
{
   localStorage.setItem('count',3)
}

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
   var rep = textProp.value.trim().toUpperCase();
   if (rep == texte) {
      Swal.fire({
         title: 'Trouvé!',
         text: "Bravo, c'est correct !!!",
         icon: 'success',
         confirmButtonText: 'Cool'
      });
      
      lev++;
      if(lev > 10)
      {
         lev = 1;
         Swal.fire({
            title: 'Felicitations 🎉🎉🎉!',
            text: "Vous avez terminé la premiere partie du jeu!!!",
            icon: 'success',
            confirmButtonText: 'Cool'
         });
      }
      console.log(lev);
      setTimeout(function () { window.location.href = '/' + lev }, 2000);

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
let count = localStorage.getItem('count');
console.log('count',count);
let sol = document.getElementById("solutionButton");
for(i = 0; i < count; i++)
{
   sol.innerHTML += '<i class="fa-solid fa-lightbulb amp" style="color: #38f8b5" ></i>';
}
for(i = 0; i < 3-count; i++)
{
   sol.innerHTML += '<i class="fa-solid fa-lightbulb amp" style="color:#b7b4b4 " ></i>';
}
function revealSolution(e) {
   
   e.preventDefault();
   if(count > 0)
   {
      document.getElementById(
         "solutionText"
      ).textContent = `Réponse correcte : ${texte}`;
      document.getElementById("solutionBox").style.display = "block";

      let amp = document.getElementsByClassName("amp");
    
      amp[count-1 ].style.color='#b7b4b4';

      count -= 1; 
      localStorage.setItem('count', count)
      console.log('count',count);

   }
   
}

document
  .getElementById("solutionButton")
  .addEventListener("click", revealSolution);