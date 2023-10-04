import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question("Hoe hoog moet uw diamant zijn? "));
let curHoogte = hoogte;
let i = "*";
let breedde;
let o = "";
if (hoogte % 2 == 0) {
    breedde = hoogte / 2;
} else {
    breedde = (hoogte - 1)/2;
}
let curBreedde = 0;

    
while(curBreedde < (breedde)){
    o = "";
    for (let sNp = 0; sNp<=breedde - curBreedde; sNp ++){
        o += " ";
    }
    o += "*"
    for (let nCar = 0; nCar < curBreedde; nCar++){
        o += "**";
    }
    console.log(o);
    curBreedde ++;
}
curBreedde = 0;
while(curBreedde <= (breedde)){
    o = " ";
    for (let snp = 0; snp < curBreedde; snp ++){
        o += " ";
    }
    for (let ncar = 0; ncar < breedde - curBreedde; ncar ++){
        o += "**";
    }
    o += "*";
    console.log(o);
    curBreedde ++;
}

process.exit();