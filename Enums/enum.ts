// Assign label to numbers

// enum Role {ADMIN, READ_ONLY , AUTHOR}
// let enumObj = {
//     name:"Riya",
//     role: Role.ADMIN
// }
// console.log(enumObj.role); //0

// if(enumObj.role === Role.AUTHOR){
//     console.log("Role is Author");
// }
enum Role {ADMIN = "ADMIN", READ_ONLY =5 , AUTHOR}
let enumObj = {
    name:"Riya",
    role: Role.ADMIN
}
console.log(enumObj.role); //ADMIN

if(enumObj.role === Role.AUTHOR){
    console.log("Role is Author");
}