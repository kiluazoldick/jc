const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/assets',express.static('assets'));

const fs = require('fs');
const readline = require('readline');
let level = [""];

async function lireFichierLigneParLigne(cheminFichier) {
  const fileStream = fs.createReadStream(cheminFichier, 'utf8');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity // Pour supporter les différents types de fins de ligne (\n, \r\n)
  });
let i = 0;
  for await (const line of rl) {
    level[i] = line;
    console.log("ligne: "+level[i])
    i++;
    // console.log(`Ligne: ${line}`);
    // if(verif(level)) continue;
    // else break;
  }
}

lireFichierLigneParLigne('levels.txt');

// function coder(level)
// {
//     var texte = level.match(/"(.*?)"/)[1]; 
//     var c = level.match(/{(.*?)}/)[1]; 
//    var temp="";
//    for(i=0 ; i<texte.length ; i++)
//    {
//      if(texte.charAt(i).charCodeAt(0)+c >"Z".charCodeAt(0))
//      {
//         temp += String.fromCharCode(texte.charAt(i).charCodeAt(0)+c+64 - "Z".charCodeAt(0));   
//      }
//      else
//      {
//        temp += String.fromCharCode(texte.charAt(i).charCodeAt(0)+c);
//      }
//    }
//    return temp;
//     // code.innerText = "Combien peut on mettre de gouttes d'eau dans un verre vide?";
//     // textCode.value = temp;
// }

app.get('/', (req,res) => {
    const lev = level[0];
    res.render('index',{lev});
});
app.get('/:level', (req,res) => {
    console.log(req.params.level);
    const lev = level[(req.params.level)-1];
    res.render('index',{lev});
});




app.listen(3000);