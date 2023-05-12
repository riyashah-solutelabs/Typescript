let person : {
    name : string;
    age : number;
    role: [number, string];
}= {
    name:"Riya",
    age:20,
    role:[2,"SE"]
};
console.log(person);
person.role.push("3"); //Exception ..
// person.role.push({}); //Error
console.log(person.role);
person.role.pop();
console.log(person.role);
person.role[0] = 5158;
person.role.unshift("dd");
console.log(person.role);
// person.role[0] = "5158"; //Error
// person.role[1] = 3; //Error
// person.role = []; //Error
// person.role = [11,"Manager"]; //Allowed
// person.role = ["d","dd"] //Error
// person.role = "Manager"; //Error
// person.role = [1,"ABC","ff"] //Error

console.log(person.role);