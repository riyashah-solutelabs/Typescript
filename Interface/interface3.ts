interface isPerson {
    name: string;
    // name: "John";
    rollno: number,
    speak(val:string):string,
    sound():void
}

let p1 : isPerson = {
    name: "John",
    rollno: 100,
    speak(val:"Yes"){
        return val;
    },
    sound(){
        console.log("Hello");
    }
}

// console.log(p1);
let greet = (person:isPerson) => {
    console.log(person.name + " " + person.rollno + " " + person.speak("No"));
}

greet(p1);

export {};