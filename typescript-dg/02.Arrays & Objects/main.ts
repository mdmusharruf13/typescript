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

// tuples
let myTuple: [string, number, boolean] = ["musharruf", 98, true];

let mixed = ["mush", 98, false];

// myTuple = mixed; // source req-3 but target may have fewer

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = mixed;
myObj = {};

type Student = {
  name: string;
  isActive: boolean;
  skills: (string | number)[];
};

let mush: Student = {
  name: "mush",
  isActive: true,
  skills: ["react", 99],
};
console.log(mush);

// interfaces

interface Car {
  brand: string;
  year: number;
}

const myCar: Car = {
  brand: "BMW",
  year: 2024,
};
console.log(myCar);

// optional property
let student: {
  name: string;
  isActive: boolean;
  skills?: (string | number)[]; // optional
} = {
  name: "mush",
  isActive: false,
};
console.log(student);

// enums

enum DAYS {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN,
}
console.log(DAYS.WED);
console.log(DAYS);
