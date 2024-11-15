var myName = "Mush"; // implicitly
var MyName = "Mush"; // explicitly
var isLoading;
var age;
var about;
isLoading = true;
age = 30;
about = "i am developer;";
about = 30;
var sum = function (a, b) {
    // parameters 'a & b' has implicitly has an 'any' type.
    return a + b;
};
console.log(sum(1, 3));
var sub = function (a, b) {
    return a - b;
};
console.log(sub(5, 2));
