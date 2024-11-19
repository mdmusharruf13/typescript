console.log("start");
var todaysTransaction = {
    pizza: -10,
    Books: -5,
    Job: 50,
};
console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);
var Transactions = {
    small: 10,
    mid: 10,
    large: -5,
};
var printTransactions = function (transObj) {
    var total = 0;
    for (var key in transObj) {
        total += Transactions[key];
    }
    return total;
};
console.log(printTransactions(Transactions));
console.log(Transactions["name"]);
var std1 = {
    name: "Doug",
    GPA: 4.1,
    classes: [100, 200],
};
// console.log(student1.test);
for (var key in std1) {
    console.log("".concat(key, ": ").concat(std1[key]));
}
Object.keys(std1).map(function (key) {
    console.log(std1[key]);
});
var logStudentKey = function (student, key) {
    console.log("student ".concat(key, ":- ").concat(student[key]));
};
logStudentKey(std1, "name");
var monthlyIncome = {
    salary: 500,
    bonus: 5000,
    sidehustle: 1000,
};
for (var revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
