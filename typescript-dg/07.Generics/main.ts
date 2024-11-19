// const Print = (msg: string) =>  console.log(msg);

const echo = <T>(msg: T) => console.log(msg);

echo(2);
echo("printing");

interface HasID {
  id: number;
}

const porcessUser = <T extends HasID>(user: T): T => {
  return user;
};

console.log(porcessUser({ id: 598, name: "mush" }));
// console.log(porcessUser(name: "musharruf")); // raises error

const getUsersPropetry = <T extends HasID, K extends keyof T>(
  users: T[],
  key: K
): T[K][] => {
  return users.map((user) => user[key]);
};

/////////////////////////////
class StateObject<T> {
  private data: T;

  constructor(value: T) {
    this.data = value;
  }

  get state(): T {
    return this.data;
  }
  set state(value: T) {
    this.data = value;
  }
}

const store = new StateObject("mush");
console.log(store.state);
store.state = "musharruf";
// store.state = 12; // raise error

const myState = new StateObject<(string | number | boolean)[]>([12]);
console.log(myState.state);
myState.state = ["mush"];
console.log(myState.state);
