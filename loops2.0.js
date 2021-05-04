"use strict"

let list = function(numbs){
 let counter = 0
 while(counter < numbs.length){
    numbs[counter] = 0
    counter = counter + 1
 }
    return numbs
};

let double = function(values){
 let pos = 0
 while(pos < values.length){
     values[pos] = values[pos] * 2
     pos = pos + 1
    }
    return values
};

debugger

