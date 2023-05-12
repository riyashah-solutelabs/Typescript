// type DefaultValues = Pick<User, 'roll'>;
interface User {
    readonly Id : number,
    roll : number,
    name:string,
    // seeTrial : () => string
    // seeTrial : () => void
    googleId ?: string,
    seeTrial() : string,
    coupen(name:string , value:number) : number
 
}

const data : User ={
    Id : 1,
    roll: 123,
    name: "John Doe",
    seeTrial(){
        return "I am a trial";

    },
    coupen(n :"Riya",v:10){
        return v;
    }

}



console.log(data.Id);
// console.log(User.roll);