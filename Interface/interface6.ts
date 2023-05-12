interface User1{
    name: 'riya';
    gender: string;
}
class Employee implements User1{
    constructor(public name: 'riya',public gender:string){
        this.name = name;
        this.gender = gender;
    }
    getData(){
        return {
            name: this.name,
            gender: this.gender,
        }
    }
}

let usr = new Employee('riya','Female');
console.log(usr.getData());

export {};