class User {
    // #name:string;
    protected _courseCount : number = 0;
    extra:string = "";
    readonly city : string = "Ahmedabad";
    constructor(
        public email:string, 
        private name:string
    ){
        email = email;
        name = name;
    }
    get getEmail() : string{
        return this.email;
    }
    get courseCount() : number{
        return this._courseCount;
    }
    set courseCount(count){
        this._courseCount = count;
    }
    getData(){
        this.deleteToken();
        return {
            email:this.email,
            name:this.name
        }
    }
    private deleteToken(){
        console.log("delete token");

    }
}

class Person extends User{
    isBoolean : boolean = true;
    changecountCourse(){
        this.courseCount = 6;
    }
}
let a = new Person('a@a.com', 'A');
a.extra = 'extra';
// a.name //Error
let data = a.getData();
console.log(data);
a.courseCount = 5;
console.log(a.courseCount);
a.changecountCourse();
console.log(a.courseCount);
export {};


