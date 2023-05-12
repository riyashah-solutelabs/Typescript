interface Circle{
    kind:"circle",
    radius:number
}

interface Square{
    kind:"square",
    side:number
}

interface Rectangle{
    kind:"rectangle",
    width:number,
    height:number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape : Shape){
    if(shape.kind === "circle"){
        console.log("circle");
        return Math.PI * shape.radius * 2;
    }else if(shape.kind === "rectangle"){
        console.log("rectangle");
        return shape.width * shape.height;
    }else{
        console.log("square");
        return shape.side * shape.side;
    }
}

console.log(getTrueShape({kind:"rectangle",width:10,height:10}));


function getArea(shape : Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius * 2;
            break;
        case "square":
            return shape.side * shape.side;
            break;
        case "rectangle":
            return shape.width * shape.height;
            break;
        default: //never supposed to be running
            const _defaultforArea : never= shape;
            return _defaultforArea
    }
}
console.log(getArea({kind:"rectangle",width:10,height:10}));