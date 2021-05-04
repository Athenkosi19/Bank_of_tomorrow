"use strict"

let sums = function(numbers){
    let counter = 0
    let sum = 0
    while (counter < numbers.length){
        sum = sum + numbers[counter]
        counter = counter + 1
    }
    return sum
};

debugger

//CLIENT

console.log(sums([1,2,3,4,5]))