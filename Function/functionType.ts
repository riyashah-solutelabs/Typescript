function add(n1:number , n2:number) : number{
        return n1 + n2;
}
function printResult(num : number) : void{
    console.log("Result is : ",num);
    return;
}
let combineval : (n1 : number , n2 : number ) => void; 
// combineval= add;
// console.log(combineval(1,2));
combineval= printResult;
combineval(3,6)
// console.log(combineval(3,6));
// combineval = 5;
// console.log(combineval(1,2));