function add(n1:number , n2:number , n3 ?:number) : number{
    if(n3 === undefined) {
        return n1 + n2;
    } else {
        return n1 + n2 + n3;
    }
}
function printResult(num : number) : void{
    console.log("Result is : ",num);
    return;
}
// let combineval : Function; 
// combineval= add;
// console.log(combineval(1,2));
// combineval= printResult;
// console.log(combineval(1,2));
let combineval2 : (n1 : number , n2 : number ) => void; 
// combineval= add;
// console.log(combineval(1,2));
combineval2= printResult;
console.log(combineval(3,6));
// combineval = 5;
// console.log(combineval(1,2));