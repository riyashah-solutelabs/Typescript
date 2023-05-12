interface takePhoto {
    cameraMode: string;
    filter:string;
    burst:string
}
interface takeVideo {
    cameraOn() : void;
}

class P1 implements takePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: string) { }
}
class P2 implements takePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: string, extera:string) { }
}
class P3 implements takePhoto , takeVideo {
    constructor(public cameraMode: string, public filter: string, public burst: string, extera:string) { }
    cameraOn() : void {
        console.log("hello");
    }
}

let p = new P1("cameraMode","filter","burst");
let pp = new P3("cameraMode","filter","burst","extera");
pp.cameraOn();
