function check(x : Date | string) {
    if(x instanceof Date) {
        return x.toLocaleDateString()
    }else{
        return x.toUpperCase()
    }
}

let date = new Date();
console.log(check(date));
console.log(check("riya"));
