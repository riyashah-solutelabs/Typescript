class User {
    email:string;
    name:string;
    extra:string = "";
    readonly city : string = "Ahmedabad";
    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
    getData(){
        return {
            email:this.email,
            name:this.name
        }
    }
}

let a = new User('a@a.com', 'A');
a.extra = 'extra';

let data = a.getData();
console.log(data);

export {};


