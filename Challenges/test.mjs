import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let woord = "woord";
woord += "d";
console.log(woord);
process.exit();