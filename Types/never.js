"use strict";
function printResult(message, code) {
    // throw new Error(message);
    throw { message: message, errorCode: code };
}
// console.log(printResult("Error",404));
printResult("Error", 404);
