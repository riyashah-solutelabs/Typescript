"use strict";
function add(n1, n2, permission, phrase) {
    let res = n1 + n2;
    if (permission) {
        return phrase + res;
    }
    else {
        return "Can't allow to add";
    }
}
console.log(add(1, 2, true, "Result Is : "));
console.log(add(1, 2, false, "Result Is : "));
