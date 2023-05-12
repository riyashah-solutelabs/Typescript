"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let u = {
    id: 1,
    name: 'John Doe',
    email: 'upchh@example.com',
    password: '123456'
};
u.name = "Riya";
function sum(n1, n2, n3) {
    // console.log(n3);
    if (n3 === undefined)
        return n1 + n2;
    else
        return n1 + n2 + n3;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
