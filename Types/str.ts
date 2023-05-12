function createApp() {

    try{
         function getDetails(){
             let fname:string = "riya";
             let age:number = "23";
             let address:string = "xyz";
             showDetails(fname, age, address);
             s();
         }
 
         function showDetails(name:string, age:number, address:string){
             console.log(`Your name is ${name}. and your age is ${age}.address is ${address}.`);
         }
 
         getDetails();
    }catch(e){
     console.log(e.name);
     console.log(e.message);
     console.log(e.stack);

    }
 }
 createApp();