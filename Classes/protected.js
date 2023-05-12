"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // #name:string;
        this._courseCount = 0;
        this.extra = "";
        this.city = "Ahmedabad";
        email = email;
        name = name;
    }
    get getEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        this._courseCount = count;
    }
    getData() {
        this.deleteToken();
        return {
            email: this.email,
            name: this.name
        };
    }
    deleteToken() {
        console.log("delete token");
    }
}
class Person extends User {
    constructor() {
        super(...arguments);
        this.isBoolean = true;
    }
    changecountCourse() {
        this.courseCount = 6;
    }
}
let a = new Person('a@a.com', 'A');
a.extra = 'extra';
// a.name //Error
let data = a.getData();
console.log(data);
a.courseCount = 5;
console.log(a.courseCount);
a.changecountCourse();
console.log(a.courseCount);
