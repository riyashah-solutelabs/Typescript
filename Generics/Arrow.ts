const dataArr  = <T> (products: T[]) : T => {
    const myInd = 3;
    return products[myInd];
};

console.log(dataArr([1,2,3,4,5]));