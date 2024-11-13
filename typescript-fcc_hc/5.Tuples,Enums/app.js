var tuples = ["id", 598];
var tUser = [];
tUser.push(["mush", 90, true]);
var rgb = [25, 123, 112];
// enums
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var mySeat = SeatChoice.AISLE;
console.log(SeatChoice);
