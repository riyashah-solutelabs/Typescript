let a ;
a = 10;

const b : number[] = [];
// b = [1,2,3]
b.push(4);

const c : string[] = [];
const d : Array<string> = [];

// type User = {
//     name: string,
//     age: number
//     isActive : boolean
// }
type typ = string | boolean | number;
const allUsers: typ[] = [];
// allUsers.push({name:"riya" ,age:30 ,isActive:true});
allUsers.push("riya");
allUsers.push(22);
allUsers.push(true);
allUsers.push("john",30,false);

console.log(allUsers);

// Array inside Arrays
const nu : number[][] = [];
nu.push([1,2,3],[1,3]);
console.log(nu);

const num2 : ReadonlyArray<string> = ["riya","shreya","rajvi"];
// num2.push("riya");

export {}