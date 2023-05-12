abstract class User{
    // public fname: string;
    // public lname: string;
    // constructor(public fname: string, public lname: string){
    //     this.fname = "shah"
    // }
    public abstract getName() : void;
}
class Student extends User{
    constructor(public fname: string, public lname: string) {
        // super(fname, lname);
        super();
        this.fname = fname;
        this.lname = lname;
    }
    getName(){
        console.log(`${this.fname} ${this.lname}`);

    }
}

let obj = new Student("shah", "lisa");
// let o = new User("shah", "lisa");
obj.getName();

export {}