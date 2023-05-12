class User {
    // #name:string;
    extra:string = "";
    readonly city : string = "Ahmedabad";
    constructor(
        public email:string, 
        private name:string
    ){
        email = email;
        name = name;
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
// a.name //Error
let data = a.getData();
console.log(data);

export {};


