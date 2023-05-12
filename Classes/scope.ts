class Student{
    private _Id :number = 1;
    protected bloodgroop : string = 'A';
    constructor(public name:string, public age:number){
        this.name = name;
        this.age = age;
    }
    get getId() : number{
        return this._Id;
    }
    set setId(id:number){
        this._Id = id;
    }
}
class Another extends Student{
    constructor(public name:string, public age:number){
        super(name, age);
        this.name = name;
        this.age = age;   
    }
    getBG(){
        // this._Id = this._Id + 1;
        return this.bloodgroop;
    }
    setBG(bg:string){
        this.bloodgroop = bg;
    }
}

let another = new Another("John", 30);
another.setId = 4;
console.log(another.getId);
another.setBG("B");
console.log(another.getBG());