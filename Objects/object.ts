// let obj = {
//     name:"Riya",
//     age:20
// }   
// console.log(obj);
// console.log(obj.name);
// console.log(obj.nickname);

// let obj : object = {
//     name:"Riya",
//     age:20
// }   
// console.log(obj);
// console.log(obj.name);

// let obj : {} = {
//     name:"Riya",
//     age:20
// }   
// console.log(obj);
// console.log(obj.name);

let obj : {
    name:string;
    age:number;
    n?: number;
} = {
    name:"Riya",
    age:20
}   
// obj.n = 10;
// obj.d = 10; //gives error
Object.assign(obj, {
    d:10
})
Object.defineProperty(obj, "dd", {
    value:12,
    writable:false,
    enumerable:true,
})
Object.defineProperty(obj, "n", {
    value:19,
    writable:true,
    enumerable:true,
    configurable:true,
})

console.log(obj);
console.log(obj.name);
console.log(obj.n);
// console.log(obj.dd);


export {};