class UserClass {
  email: string;
  private name: string;
  readonly city = "hyderabad";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const userCls1 = new UserClass("mush@gmail.com", "mush");
console.log(userCls1);

// getters and setters
class Login {
  username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  get getUserName(): string {
    return this.username;
  }
  get getPassword(): string {
    return this.password;
  }

  set setPassword(password: string) {
    this.password = password;
  }
}

const loginUser = new Login("mush", "123");
console.log(loginUser);
console.log(loginUser.getUserName);
loginUser.setPassword = "986";
console.log(loginUser.getPassword);

// access modifier - protected

class SubUser extends UserClass {
  isAuth: boolean = true;
  changeEmail(email: string) {
    this.email = email;
  }
}

// abstract class

abstract class TakePicture {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getCameraMode(): string;
}

class CameraApp extends TakePicture {
  getCameraMode(): string {
    return this.cameraMode;
  }
}

const myPicture = new CameraApp("potrait", "no");
console.log(myPicture.getCameraMode());
