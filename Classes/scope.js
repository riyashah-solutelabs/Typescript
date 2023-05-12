"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._Id = 1;
        this.bloodgroop = 'A';
        this.name = name;
        this.age = age;
    }
    get getId() {
        return this._Id;
    }
    set setId(id) {
        this._Id = id;
    }
}
class Another extends Student {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    getBG() {
        // this._Id = this._Id + 1;
        return this.bloodgroop;
    }
    setBG(bg) {
        this.bloodgroop = bg;
    }
}
let another = new Another("John", 30);
another.setId = 4;
console.log(another.getId);
another.setBG("B");
console.log(another.getBG());
