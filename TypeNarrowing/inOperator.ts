interface User{
    name: string;
    email: string;
}
interface Admin{
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdminAccount(user: User | Admin){
    if("isAdmin" in user){
        return {name:user.name, email:user.email, isAdmin: user.isAdmin};        
    }else{
        return {name:user.name, email:user.email};
    }
}
console.log(isAdminAccount({name: "John", email: "john@gmail.com"})); // false
console.log(isAdminAccount({name: "John", email: "john@gmail.com",isAdmin:true})); // true

export {};
