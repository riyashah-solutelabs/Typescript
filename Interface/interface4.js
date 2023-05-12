"use strict";
class P1 {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class P2 {
    constructor(cameraMode, filter, burst, extera) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class P3 {
    constructor(cameraMode, filter, burst, extera) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    cameraOn() {
        console.log("hello");
    }
}
let p = new P1("cameraMode", "filter", "burst");
let pp = new P3("cameraMode", "filter", "burst", "extera");
pp.cameraOn();
