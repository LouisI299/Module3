import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Geef hoogte in: "));
let getal = 1;
let i = "*";
while (getal <= hoogte){
    console.log(i);
    i += "*";
    getal ++;
}
process.exit();