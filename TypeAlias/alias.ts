type CombineType = string | number;
type returnType = 'as-number' | 'as-text';
// type number = number | string; //Error

function combine(input1: CombineType, input2: CombineType, resultConversion: returnType){
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

let myStr : string;
export {myStr}


