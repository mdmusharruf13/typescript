let tuples: [string, number] = ["id", 598];

let tUser: [string, number, boolean][] = [];
tUser.push(["mush", 90, true]);

let rgb: [number, number, number] = [25, 123, 112];

// enums

enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 3,
  WINDOW,
  FOURTH,
}

const mySeat = SeatChoice.AISLE;
console.log(SeatChoice);
