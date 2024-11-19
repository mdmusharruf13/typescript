// const Print = (msg: string) =>  console.log(msg);
var echo = function (msg) { return console.log(msg); };
echo(2);
echo("printing");
var porcessUser = function (user) {
    return user;
};
console.log(porcessUser({ id: 598, name: "mush" }));
// console.log(porcessUser(name: "musharruf")); // raises error
var getUsersPropetry = function (users, key) {
    return users.map(function (user) { return user[key]; });
};
/////////////////////////////
var StateObject = /** @class */ (function () {
    function StateObject(value) {
        this.data = value;
    }
    Object.defineProperty(StateObject.prototype, "state", {
        get: function () {
            return this.data;
        },
        set: function (value) {
            this.data = value;
        },
        enumerable: false,
        configurable: true
    });
    return StateObject;
}());
var store = new StateObject("mush");
console.log(store.state);
store.state = "musharruf";
// store.state = 12; // raise error
var myState = new StateObject([12]);
console.log(myState.state);
myState.state = ["mush"];
console.log(myState.state);
