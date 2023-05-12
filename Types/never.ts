function printResult(message:string , code:number) : never {
    // throw new Error(message);
    throw {message: message, errorCode: code};
}
// console.log(printResult("Error",404));
printResult("Error",404);