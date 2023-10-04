import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

// 3 fizz 5 buzz 35 fizzbuzz
 let i = 1
 while (i<100){
     if (i % 3 == 0 && i % 5 != 0) {
         console.log("Fizz");
     } else if (i % 5 == 0 && i % 3 != 0) {
         console.log("Buzz")
     } else if (i % 5 == 0 && i % 3 == 0){
         console.log("Fizzbuzz");
     }else {
         console.log(i)
     }
     i++;
 }

process.exit();