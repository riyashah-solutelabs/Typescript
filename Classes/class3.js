"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // #name:string;
        this.extra = "";
        this.city = "Ahmedabad";
        email = email;
        name = name;
    }
    getData() {
        return {
            email: this.email,
            name: this.name
        };
    }
}
let a = new User('a@a.com', 'A');
a.extra = 'extra';
// a.name //Error
let data = a.getData();
console.log(data);
