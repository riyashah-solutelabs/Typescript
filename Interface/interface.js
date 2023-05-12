"use strict";
const data = {
    Id: 1,
    roll: 123,
    name: "John Doe",
    seeTrial() {
        return "I am a trial";
    },
    coupen(n, v) {
        return v;
    }
};
console.log(data.Id);
// console.log(User.roll);
