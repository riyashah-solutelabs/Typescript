type User = {
    readonly id: number,
    name: string,
    email: string,
    password: string,
    isAdmin?: boolean
}
let u : User = {
    id: 1,
    name: 'John Doe',
    email: 'upchh@example.com',
    password: '123456'
}

u.name = "Riya";
// u.id = 2;
export {};


function sum(n1:number,n2:number,n3?:number){
    // console.log(n3);
    if(n3 === undefined)
    return n1+n2;
    else return n1+n2+n3;
}
console.log(sum(1,2));
console.log(sum(1,2,3));
