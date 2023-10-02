import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in. "));
console.log("");
console.log("De maaltafels van " + getal + ":");
let tafel = 1;

while (tafel <= 10){
    console.log(getal + " X " + tafel + " = " + (getal*tafel));
    tafel ++;
}

process.exit();