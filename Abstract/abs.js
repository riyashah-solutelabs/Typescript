"use strict";
class TakePhoto {
    // public cameraMode:string,
    // public filter:string
    constructor(cameraMode, filter) {
        // this.cameraMode = cameraMode;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, extra) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.extra = extra;
    }
    getSpice() {
        // this.cameraMode = "instagram";
        console.log("Spices");
    }
}
let s = new Instagram("instagram", "reel", true);
s.getSpice();
let v = s.getReelTime();
console.log(v);
