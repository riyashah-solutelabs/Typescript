let objUSer :{
    name:string;
    // hobbies:any[];
    // hobbies:[number,string,boolean,{}];
    // hobbies:[number[],string[]];
    hobbies:[number | string];
} = {
    name:"Riya",
    // hobbies:[22,'Cooking',true,{one:"y",two:"f"}]
    // hobbies:[[22],['Cooking']]
    // hobbies:[22]
    hobbies:["22"]
}
// console.log(objUSer.hobbies);
// console.log(objUSer.name);

let arrHoby:string[];
arrHoby = ['Sports','Cooking'];
// console.log(arrHoby);

// for(let hobby of objUSer.hobbies){
//     console.log(hobby);
//     // console.log(hobby.toUpperCase());
// }

// let a = arrHoby.map(hobby => hobby.toUpperCase());
// console.log(a);
// for(let arr of arrHoby){
//     console.log(arr.toUpperCase());
//     // console.log(arr.map(hob => hob.toUpperCase()));
// }

// let mapArr:number[];
// mapArr =[1,2,3]
// for(let m of mapArr){

//     console.log(m.map(hobby => hobby.length););
// }