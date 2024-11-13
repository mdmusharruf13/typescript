var names = ["typescript", "javascript", "html"];
names.forEach(function (name) {
    console.log(name);
});
var arr = [];
arr.push(98);
arr.push(99);
arr.push(90);
arr.push(66);
console.log(arr);
var allUsers = [];
allUsers.push({ name: "", isActive: false });
console.log(allUsers);
var multiDim = [];
multiDim.push([1, 2, 9], [9, 6, 3]);
multiDim.push([4, 5, 6]);
console.log(multiDim);
function doStuff(values) {
    console.log(values);
    //   values.push("wait...");  // gives warning
}
doStuff(names);
//
// UNION TYPE
var value;
// issue is we can't perform any string operations on the 'param' variable
function assignValue(param) {
    value = param;
    console.log(value);
}
assignValue("45");
var mush = { name: "musharruf", id: 598 };
mush = { name: "mush", id: 98 };
console.log(mush);
var nums = [1, 2, "3"];
console.log(nums);
var seatAllotment;
seatAllotment = "middle";
// seatAllotment = 'non-ac';  // warning: cannot assign
var seatType;
var seat = "leather";
