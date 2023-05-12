interface isPerson {
    name: "riya",
    rollno: number,
    speak(val:string):string,
    sound():void
}
interface isPerson{
    addAnother : string;
}
interface User{
    u1: string;
}
interface another extends isPerson , User{
    roll : "Admin" | "Moderator" | "Senior",
}
let p1 : another = {
    name: "riya",
    rollno: 100,
    u1: "John",
    roll: "Admin",
    addAnother : "hello",
    speak(val:"Yes"){
        return val;
    },
    sound(){
        console.log("Hello");
    }
}

console.log(p1);
// let greet = (person:isPerson) => {
//     console.log(person.name + " " + person.rollno + " " + person.speak("No"));
// }

// greet(p1);

export{};