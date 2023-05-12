"use strict";
function createApp() {
    try {
        function getDetails() {
            let fname = "riya";
            let age = "23";
            let address = "xyz";
            showDetails(fname, age, address);
            s();
        }
        function showDetails(name, age, address) {
            console.log(`Your name is ${name}. and your age is ${age}.address is ${address}.`);
        }
        getDetails();
    }
    catch (e) {
        console.log(e.name);
        console.log(e.message);
        console.log(e.stack);
    }
}
createApp();
