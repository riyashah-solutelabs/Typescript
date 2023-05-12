interface User1{
    name: string;
    gender:'Male' | 'Female';
}
class Employee implements User1{
    constructor(public name: string,public gender:'Male' | 'Female'){
        this.name = name;
        this.gender = gender;
    }
    getData(){
        // return `${this.name} ${this.gender}`;
        // return [this.name,this.gender];
        return {
            name: this.name,
            gender: this.gender
        }
    }
}

let usr = new Employee('Riya', 'Female');
console.log(usr.getData());