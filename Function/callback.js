"use strict";
function sum(n1, n2, cb) {
    let result = n1 + n2;
    let v = cb(result);
    // return function(num:number) : void{
    // }
    return v;
}
console.log(sum(1, 2, (s) => {
    console.log(s);
}));
