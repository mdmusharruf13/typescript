let stringArr = ["one", "two", "three"];

let strNumArr = ["one", "two", 98];

let mixedArr = [98, "one", true];

mixedArr.push(99);
console.log(mixedArr);

mixedArr[0] = "98";
console.log(mixedArr);

let names: string[] = [];
names.push("musharruf");
names.unshift("nawaz");
console.log(names);
