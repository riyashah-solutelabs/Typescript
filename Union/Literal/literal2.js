"use strict";
// function combine(input1:number | string , input2 : number | string , resultConversion : string ){
function combine(input1, input2, resultConversion) {
    let res;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        res = +input1 + +input2;
    }
    else {
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine("5", "6", "as-number"));
console.log(combine("Riya", " Shah", "as-number"));
console.log(combine("Riya", " Shah", "as-string"));
