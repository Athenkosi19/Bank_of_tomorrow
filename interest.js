"use strict "

let compoundinterest = function (interest, principalamount, term) { //declarations
    return ((principalamount * (1 + Number(interest / 100)) ** term) - principalamount).toFixed(0) //return statement and assignment
};
let printresults = function (interest, principalamount, term) { //declaration
    let compound = compoundinterest(interest, principalamount, term)//declaration
    console.log('If you invest', principalamount, 'rands over', term, 'years with an annual interest rate of', interest + '%', 'you will make',
        compound, 'rands')//assignment
};
let firstinterest = 20//assignment
let principalamount = 500//assignment
let term = 20//assignment
if (firstinterest > 0) {//if statement
    printresults(firstinterest, principalamount, term)//function call
};
let secondinterest = 30//assignment
if (secondinterest > 0) {//if statement
    printresults(secondinterest, principalamount, term)//function call
};

debugger

