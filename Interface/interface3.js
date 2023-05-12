"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let p1 = {
    name: "John",
    rollno: 100,
    speak(val) {
        return val;
    },
    sound() {
        console.log("Hello");
    }
};
// console.log(p1);
let greet = (person) => {
    console.log(person.name + " " + person.rollno + " " + person.speak("No"));
};
greet(p1);
