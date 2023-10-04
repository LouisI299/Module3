import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer = parseFloat(await userInput.question("Geef een getal in: "));
let fibo1 = 0;
let fibo2 = 1;
let outputfi;
let teller;
console.log(fibo1);
console.log(fibo2);
for (teller = 0; teller <= nummer; teller += outputfi ){
    outputfi = fibo1 + fibo2;
    console.log(outputfi);
    fibo1 = outputfi;
    outputfi = fibo1 + fibo2;
    console.log(outputfi);
    fibo2 = outputfi;
    
}


process.exit();