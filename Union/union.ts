function combine(input1:number | string, input2:number | string){
    let res;
    // console.log(input1.toString());
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        res = input1 + input2;
    }else if(typeof input1 ==='string' && typeof input2 ==='string'){
        res = input1.toString() + input2.toString();
    }
    return res;
}
console.log(combine(5,4));
console.log(combine("Riya","Shah"));

// console.log(Number.isInteger(2.3));