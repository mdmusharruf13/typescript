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
