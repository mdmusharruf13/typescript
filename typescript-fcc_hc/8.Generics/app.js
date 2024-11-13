function getValue(data) {
    return data;
}
var score = [];
var nameList = [];
console.log(getValue("musharruf"));
console.log(getValue(90));
console.log(getValue({ brand: "bislery" }));
var getData = function (data) {
    // return "mush"; // throw error
    return data[0];
};
console.log(getData(["md", "musharruf"]));
function complexFn(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo,
    };
}
var resultObject = complexFn(3, "4");
console.log(resultObject);
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());
