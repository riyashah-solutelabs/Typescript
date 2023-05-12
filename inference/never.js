"use strict";
// Error
// let nev1:never = 5;
// let nev2:never = true;
let nev3; //Works
function getVal(msg) {
    throw new Error(msg);
}
getVal("Error");
