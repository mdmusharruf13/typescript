const names: string[] = ["typescript", "javascript", "html"];

names.forEach((name: string): void => {
  console.log(name);
});

const arr: Array<number> = [];
arr.push(98);
arr.push(99);
arr.push(90);
arr.push(66);
console.log(arr);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "", isActive: false });
console.log(allUsers);

const multiDim: number[][] = [];
multiDim.push([1, 2, 9], [9, 6, 3]);
multiDim.push([4, 5, 6]);
console.log(multiDim);

function doStuff(values: ReadonlyArray<string>) {
  console.log(values);
  //   values.push("wait...");  // gives warning
}
doStuff(names);

//
// UNION TYPE
let value: string | number;

// issue is we can't perform any string operations on the 'param' variable
function assignValue(param: string | number) {
  value = param;
  console.log(value);
}
assignValue("45");

type Employee = {
  name: string;
  id: number;
};
type Admin = {
  userName: string;
  id: number;
};

let mush: Employee | Admin = { name: "musharruf", id: 598 };
mush = { name: "mush", id: 98 };
console.log(mush);

const nums: (number | string)[] = [1, 2, "3"];
console.log(nums);

let seatAllotment: "upper" | "middle" | "lower";
seatAllotment = "middle";
// seatAllotment = 'non-ac';  // warning: cannot assign

let seatType: "leather" | "fabric" | "neoprene ";
let seat: typeof seatType = "leather";
