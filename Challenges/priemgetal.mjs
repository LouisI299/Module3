import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question("Geef een getal in: "));
let deling = getal - 1;
let nr = 1;
let res;

do {
    res = getal % deling;
    deling--;
    if (res != 0) {
        nr ++;
    } 
} while (deling > 0)
if (nr == (getal - 1)) {
    console.log(getal + " is een priemgetal");
} else {
    console.log(getal + " is geen priemgetal");
}
process.exit();