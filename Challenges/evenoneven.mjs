import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0 ;
while (getal < 20) {
    getal ++;
    console.log(getal);
}
process.exit();