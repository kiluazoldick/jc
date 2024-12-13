// var c = Math.ceil(Math.random()*15);
var code = document.getElementById("code");
var c = parseInt(code.value);
var textCode = document.getElementById("texteCode");
var textACode = document.getElementById("texteACode");
var textProp = document.getElementById("prop");
var level =document.getElementById("level");
var lev = parseInt(level.innerHTML);
console.log(lev);
var texte = textACode.value.toUpperCase();
let niv = 0;
console.log(niv);
$(document).ready(() => {
   coder(texte);
})
$("form").submit(function(e)
{
   e.preventDefault();
   verif(texte);
})

function coder(texte)
{
   var temp="";
   for(i=0 ; i<texte.length ; i++)
   {
     if(texte.charAt(i).charCodeAt(0)+c >"Z".charCodeAt(0))
     {
        temp += String.fromCharCode(texte.charAt(i).charCodeAt(0)+c+64 - "Z".charCodeAt(0));   
     }
     else
     {
       temp += String.fromCharCode(texte.charAt(i).charCodeAt(0)+c);
     }
   }

   // textCode.value = temp;
   //  code.innerText = "Combien peut on mettre de gouttes d'eau dans un verre vide?";
    textCode.textContent = temp;
}
function verif(texte)
{
    //    console.log(temp);
//    console.log("code = " +c);
   var rep=textProp.value.toUpperCase();
   if(rep==texte)
   {
      Swal.fire({
         title: 'Trouvé!',
         text: "Bravo, c'est correct !!!",
         icon: 'success',
         confirmButtonText: 'Cool'
     });
     lev++;
     console.log(lev);
     setTimeout(function(){window.location.href = '/'+lev}, 1000);

     return true;
      // alert("Bravo, c'est correct !!!");
   //    console.log("Bravo, c'est correct");
        // texte = "abc";
        // lev++;
        // var leve = ''+lev;
        // level.innerText = leve;
   }
   else
   {
      Swal.fire({
         title: 'Raté!',
         text: "Dommage, c'est incorrect !!!",
         icon: 'error',
         confirmButtonText: 'ok'
     });
     return false;
      // alert("C'est incorrect !!!");
   //    console.log("C'est incorrect");
   }

}
