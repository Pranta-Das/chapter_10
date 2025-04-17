const prompt = require('prompt-sync')({sigint: true});
function leapYear(year){
    if((year % 400 === 0) && (year % 100 != 0) || (year % 4 === 0)){
        return year + ' is a Leap year';
    }
    else{
        return year + ' is not a leap year';
    }
}
const yearNumber = prompt("Enter the year: ");
const yearCheck = leapYear(yearNumber);
console.log(yearCheck);