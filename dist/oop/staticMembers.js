"use strict";
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride12 = new Ride();
ride12.start();
console.log(Ride.activeRides);
//# sourceMappingURL=staticMembers.js.map