
// Error
// let nev1:never = 5;
// let nev2:never = true;

let nev3:never; //Works

function getVal(msg:string) : never {
    throw new Error(msg);
}

getVal("Error")