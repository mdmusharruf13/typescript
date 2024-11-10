"use strict";
// let age: number = 20;
// if (age < 50) age += 10;
// console.log("over");
var _a;
/** build in data types */
let sales = 123456789;
let language = "TypeScript";
console.log(sales);
console.log(language);
let names = [];
names[0] = "md";
names[1] = "musharruf";
console.log(typeof names, names);
function greetMe(name) {
    return `Hello, ${name}`;
}
console.log(greetMe("Musharruf"));
function getDetails(name, age) {
    if (age > 18)
        return `${name} you eligible to vote`;
    return `${name} you cannot vote`;
}
console.log(getDetails("musharruf", 20));
// objects
let employee = {
    id: 1,
    name: "musharruf",
    retire: (date) => {
        console.log(date);
    },
};
employee.retire(new Date());
let employee2 = {
    id: 1,
    name: "musharruf",
    retire: (date) => console.log(date),
};
employee2.retire(new Date());
// narrowing | union
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
// Nullable type
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("no name");
}
greet(null);
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let customer2 = getCustomer(0);
console.log((_a = customer2 === null || customer2 === void 0 ? void 0 : customer2.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
