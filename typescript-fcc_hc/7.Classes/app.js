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
var UserClass = /** @class */ (function () {
    function UserClass(email, name) {
        this.city = "hyderabad";
        this.email = email;
        this.name = name;
    }
    return UserClass;
}());
var userCls1 = new UserClass("mush@gmail.com", "mush");
console.log(userCls1);
// getters and setters
var Login = /** @class */ (function () {
    function Login(username, password) {
        this.username = username;
        this.password = password;
    }
    Object.defineProperty(Login.prototype, "getUserName", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Login.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Login.prototype, "setPassword", {
        set: function (password) {
            this.password = password;
        },
        enumerable: false,
        configurable: true
    });
    return Login;
}());
var loginUser = new Login("mush", "123");
console.log(loginUser);
console.log(loginUser.getUserName);
loginUser.setPassword = "986";
console.log(loginUser.getPassword);
// access modifier - protected
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAuth = true;
        return _this;
    }
    SubUser.prototype.changeEmail = function (email) {
        this.email = email;
    };
    return SubUser;
}(UserClass));
// abstract class
var TakePicture = /** @class */ (function () {
    function TakePicture(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    return TakePicture;
}());
var CameraApp = /** @class */ (function (_super) {
    __extends(CameraApp, _super);
    function CameraApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CameraApp.prototype.getCameraMode = function () {
        return this.cameraMode;
    };
    return CameraApp;
}(TakePicture));
var myPicture = new CameraApp("potrait", "no");
console.log(myPicture.getCameraMode());
