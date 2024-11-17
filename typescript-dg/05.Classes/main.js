var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Coder = /** @class */ (function () {
    function Coder(name, age, lang) {
        if (lang === void 0) { lang = "english"; }
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    Coder.prototype.getAge = function () {
        return this.age;
    };
    return Coder;
}());
var coder = new Coder("mush", 25, "English");
console.log(coder.getAge());
// console.log(coder.age);
var WebDev = /** @class */ (function (_super) {
    __extends(WebDev, _super);
    function WebDev(computer, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.computer = computer;
        _this.computer = computer;
        return _this;
    }
    WebDev.prototype.getLang = function () {
        return this.lang;
    };
    return WebDev;
}(Coder));
var MDev = new WebDev("windows", "musharruf", 25);
console.log(MDev.getLang());
var FEDeveloper = /** @class */ (function () {
    function FEDeveloper(name, role) {
        this.name = name;
        this.role = role;
    }
    FEDeveloper.prototype.works = function (work) {
        return "".concat(this.name, " works on ").concat(work);
    };
    return FEDeveloper;
}());
var FEDev = new FEDeveloper("mush", "UI Developer");
console.log(FEDev.works("Frontend"));
var Peeps = /** @class */ (function () {
    function Peeps(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    Peeps.getCount = function () {
        return Peeps.count;
    };
    Peeps.count = 0;
    return Peeps;
}());
var user1 = new Peeps("one");
var user2 = new Peeps("two");
var user3 = new Peeps("three");
console.log(user1.id);
console.log(user2.id);
console.log(user3.id);
// getters and setters
var Bands = /** @class */ (function () {
    function Bands() {
        this.dataSets = [];
    }
    Object.defineProperty(Bands.prototype, "data", {
        get: function () {
            return this.dataSets;
        },
        set: function (value) {
            // setters cannot returns value
            if (Array.isArray(value) && value.every(function (str) { return typeof str === "string"; })) {
                this.dataSets = value;
                return;
            }
            else
                throw new Error("Param is not an array of strings");
        },
        enumerable: false,
        configurable: true
    });
    return Bands;
}());
var myBands = new Bands();
myBands.data = ["3G", "4G", "5G"];
console.log(myBands.data);
myBands.data = __spreadArray(__spreadArray([], myBands.data, true), ["6G"], false);
console.log(myBands.data);
// myBands.data = [...myBands.data, 6]; // throws error
