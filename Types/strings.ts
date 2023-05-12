function createApp() {

function getDetails(){
    let fname:string = prompt("Enter your name");
    let age:number = +prompt("Enter your age");
    let address:string = prompt("Enter your address");
    showDetails(fname, age, address);
}

function showDetails(name:string, age:number, address:string){
    console.log(`Your name is ${name}. and your age is ${age}.address is ${address}.`);
}

getDetails();
}