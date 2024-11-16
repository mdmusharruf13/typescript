var add = function (a, b) {
    return a + b;
};
var logMsg = function (message) {
    console.log(message);
};
logMsg("Hello");
logMsg(add(2, 8));
var subtract = function (c, d) {
    return c - d;
};
var multiply = function (n1, n2) {
    return n1 * n2;
};
logMsg(multiply(2, 3));
// optional parameter
var addAll = function (a, b, c) {
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
logMsg(addAll(2, 3, 5));
// default parameter
var sumAll = function (a, b, c) {
    if (c === void 0) { c = 2; }
    return a + b + c;
};
logMsg(sumAll(1, 4, 9));
var sumOfNums = function (a, b, c) {
    if (a === void 0) { a = 10; }
    return a + b + c;
};
logMsg(sumOfNums(1, 2, 1));
logMsg(sumOfNums(undefined, 1, 2));
// rest parameters
var total = function (a) {
    var nums = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nums[_i - 1] = arguments[_i];
    }
    return a + nums.reduce(function (sum, curr) { return sum + curr; });
};
logMsg(total(1, 1, 1));
var createError = function (errMsg) {
    throw new Error(errMsg);
};
var infinite = function () {
    var i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
var isNum = function (val) {
    return typeof val === "number" ? true : false;
};
logMsg(isNum("123"));
var numberOrString = function (value) {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("this should bever happen!");
};
logMsg(numberOrString("123"));
logMsg(numberOrString(31));
