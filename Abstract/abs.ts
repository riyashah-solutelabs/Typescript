abstract class TakePhoto{
    // public cameraMode:string,
    // public filter:string
    constructor(public cameraMode:string,public filter:string){
        // this.cameraMode = cameraMode;

    }
    abstract getSpice():void;
    getReelTime():number{
        return 8;
    }
}

class Instagram extends TakePhoto{
    constructor(public cameraMode:string,public filter:string,public extra:boolean){
        super(cameraMode,filter);
    }
    getSpice():void{
        // this.cameraMode = "instagram";
        console.log("Spices");
    }
}

let s = new Instagram("instagram", "reel", true);
s.getSpice();
let v = s.getReelTime();
console.log(v);


