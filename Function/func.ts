let User = {
    name: 'John',
    age: 20
}

// function createUser(name: string, age: number = 35): {} {
//     return {name:"riya",age : age}
// }

// let val = createUser("John")
// console.log(val);
function createUser() : {}{
    // console.log(`${usr.name} ${usr.age}`);
    return {name:"riya",
            age:22};
}

let val = createUser()
console.log(val);

export {};
