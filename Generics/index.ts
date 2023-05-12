function data1(n1:number) : number{
    return n1;
}
function data2(n1:any) : any{
    return n1;
}
function data3<Type>(n1:Type):Type{
    return n1;
}
function data4<T>(n1:T):T{
    return n1;
}
console.log(data3("riya"));
console.log(data3(12));

// interface I1{
//     name:string;
//     age:number;
// }
type I1 = {
    name:string;
    age:number;
}

console.log(data3<I1>({name:"n1",age:12}));
console.log(data4<I1>({name:"n2",age:32}));

export{}