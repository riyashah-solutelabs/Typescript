"use strict";
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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role[Role["AUTHOR"] = 6] = "AUTHOR";
})(Role || (Role = {}));
let enumObj = {
    name: "Riya",
    role: Role.ADMIN
};
console.log(enumObj.role); //ADMIN
if (enumObj.role === Role.AUTHOR) {
    console.log("Role is Author");
}
