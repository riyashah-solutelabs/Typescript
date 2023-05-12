function sum(n1:number , n2:number, cb : (num:number) => void) : void | Function{ 
    let result = n1 + n2;
    let v = cb(result)
    // return function(num:number) : void{
    // }
    return v;
}

console.log(sum(1,2, (s) => {
    console.log(s)
}));