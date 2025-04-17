const prompt = require('prompt-sync')({sigint:true});

function taxCalculator(incomeAmount){
    if(incomeAmount<=50000){
        return 10;
    }
    if(incomeAmount>=50001 && incomeAmount<=100000){
        return 20;
    }
    if(incomeAmount>=100001 && incomeAmount<=200000){
        return 30;
    }
    if(incomeAmount>=200001){
        return 40;
    }
}

const amount = prompt("Enter Your income:  ");
const taxAmount = taxCalculator(amount);
console.log("Your payable tax is: ", taxAmount);