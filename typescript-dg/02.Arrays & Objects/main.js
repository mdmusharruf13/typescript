var stringArr = ["one", "two", "three"];
var strNumArr = ["one", "two", 98];
var mixedArr = [98, "one", true];
mixedArr.push(99);
console.log(mixedArr);
mixedArr[0] = "98";
console.log(mixedArr);
var names = [];
names.push("musharruf");
names.unshift("nawaz");
console.log(names);
// tuples
var myTuple = ["musharruf", 98, true];
var mixed = ["mush", 98, false];
// myTuple = mixed; // source req-3 but target may have fewer
var myObj;
myObj = [];
console.log(typeof myObj);
myObj = mixed;
myObj = {};
var mush = {
    name: "mush",
    isActive: true,
    skills: ["react", 99],
};
console.log(mush);
var myCar = {
    brand: "BMW",
    year: 2024,
};
console.log(myCar);
// optional property
var student = {
    name: "mush",
    isActive: false,
};
console.log(student);
// enums
var DAYS;
(function (DAYS) {
    DAYS[DAYS["MON"] = 0] = "MON";
    DAYS[DAYS["TUE"] = 1] = "TUE";
    DAYS[DAYS["WED"] = 2] = "WED";
    DAYS[DAYS["THU"] = 3] = "THU";
    DAYS[DAYS["FRI"] = 4] = "FRI";
    DAYS[DAYS["SAT"] = 5] = "SAT";
    DAYS[DAYS["SUN"] = 6] = "SUN";
})(DAYS || (DAYS = {}));
console.log(DAYS.WED);
console.log(DAYS);
