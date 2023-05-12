// interface myArr {
//     [index:number]:string;
// }

// let name : myArr;
// name = ["one","two","three"]

// console.log("names = " + name[0]);
type myArr  = {
    [index:number]:string;
    // arr:string[];
}

let name : myArr;
name = ["one","two","three"];
// name = {
//     arr:["one","two","three"]
// }
// console.log("names = " + name.arr[0]);
console.log("names = " + name);

export{};