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
  }
}

lireFichierLigneParLigne('levels.txt');

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