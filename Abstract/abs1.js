"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
}
class Student extends User {
    constructor(fname, lname) {
        // super(fname, lname);
        super();
        this.fname = fname;
        this.lname = lname;
        this.fname = fname;
        this.lname = lname;
    }
    getName() {
        console.log(`${this.fname} ${this.lname}`);
    }
}
let obj = new Student("shah", "lisa");
// let o = new User("shah", "lisa");
obj.getName();
