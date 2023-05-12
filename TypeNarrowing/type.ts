// function dataType(val : string | number){
//     if(typeof val == "string"){
//         return val.toString();
//     }
//     return val;
// }
// function dataType(val : string | null){
//     if(!val){
//         console.log("Please enter a value");
//         return;
//     }
//     return val.toString();
// }
function dataType(val : string | number | number[]){
    if(val){
        if(typeof val === "number"){
            return val;
        }
        else {
            for(const value of val){
                console.log(value);
            }
        }
        // console.log("Please enter a value");
        // return;
    }
    else if(typeof val === "string"){
        return val.toString();
    }
    return val.toString();
}

dataType([1,2,3,4])