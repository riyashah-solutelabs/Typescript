function combine(input1: string | number, input2: string | number, resultConversion: 'as-number' | 'as-text'){
    let res;
    if(typeof input1==='number' && typeof input2==='number' || resultConversion === 'as-number'){
        res= +input1 + +input2;
    }else{
        console.log("HELLOOOOOOOOOOOOOOOOOOOOO");
        res=input1.toString()+input2.toString();
    }
    return res;
}
console.log(combine(1,4,'as-number'));
console.log(combine("1","4",'as-number'));
// console.log(combine(1,4,'as-string')); // Error
console.log(combine(1,4,'as-text')); //5
console.log(combine("riya","shah",'as-text'));
