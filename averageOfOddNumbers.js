const prompt = require('prompt-sync')({sigint:true});

function oddAverage(numbers){
    const odds = [];
    
    for(const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
        
    }
    console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    const average = sum/count;
    return average;
}


const num = [54,25,56,45,8,87,7,8,556,98,4, 511,5];
const totalAvg = oddAverage(num);
console.log("Total average of odd number: ", totalAvg);