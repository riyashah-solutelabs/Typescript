interface Database{
    name: string;
    age: number;
}


// function anotherFunc <T,U extends number>(valOne:T , valTwo:U) : object {
function anotherFunc <T,U extends Database>(valOne:T , valTwo:U) : object {
// function anotherFunc <T,U>(valOne:T , valTwo:U) : object {
    return {
        valOne,
        valTwo
    }
}

// console.log(anotherFunc(3,4.5));
// console.log(anotherFunc("3","4.5"));
// console.log(anotherFunc(3,{name:"three",age:30}));



