"use strict";
class Employee {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.name = name;
        this.gender = gender;
    }
    getData() {
        // return `${this.name} ${this.gender}`;
        // return [this.name,this.gender];
        return {
            name: this.name,
            gender: this.gender
        };
    }
}
let usr = new Employee('Riya', 'Female');
console.log(usr.getData());
