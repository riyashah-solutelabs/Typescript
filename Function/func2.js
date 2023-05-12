"use strict";
function add(n1, n2, n3) {
    if (n3 === undefined) {
        return n1 + n2;
    }
    else {
        return n1 + n2 + n3;
    }
}
function printResult(num) {
    console.log("Result is : ", num);
    return;
}
// console.log(add(1,2));
// console.log(add(1,2,3));
printResult(add(1, 2));
printResult(add(1, 2, 3));
console.log(printResult(add(1, 2)));
