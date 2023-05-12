"use strict";
function createApp() {
    function getDetails() {
        let fname = prompt("Enter your name");
        let age = +prompt("Enter your age");
        let address = prompt("Enter your address");
        showDetails(fname, age, address);
    }
    function showDetails(name, age, address) {
        console.log(`Your name is ${name}. and your age is ${age}.address is ${address}.`);
    }
    getDetails();
}
