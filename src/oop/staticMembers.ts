class Ride {
  // passenger
  // pickupLocation
  // dropOffLocation
  private static _activeRides: number = 0;
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

let ride1 = new Ride();
ride1.start();
let ride12 = new Ride();
ride12.start();
console.log(Ride.activeRides);
