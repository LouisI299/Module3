import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;
let som = 0;
getal = parseFloat(await userInput.question("Geef een getal in: "));
som += getal;
while (getal >0){
    getal = parseFloat(await userInput.question("Geef een getal in: "));
    som += getal;
}
console.log("De som van deze getallen: " + som);

process.exit();