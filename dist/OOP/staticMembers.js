"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ride {
    static _activeRides = 0;
    start() { Ride._activeRides++; }
    ;
    stop() { Ride._activeRides--; }
    ;
    static get activeRides() {
        return Ride._activeRides;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=staticMembers.js.map