function sum(a:number, b:number) : number {
// function sum(a:number, b:number) : string {
    // return `Sum IS : ${a+b}`;
    return a+b;
}

// This is not a good practice
// var c:number = 5; 
// var d:number = 4

// If we only declare variable then it is good to specify
// var c:number;

var c = 5;
var d = 4
let result:number = sum(c, d);
console.log(typeof result);

console.log(`Sum is : ${sum(c,d)}`);