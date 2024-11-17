class Coder {
  public readonly name: string;
  private age: number;
  protected lang: string;

  secondLang!: string; // optional may or may not have

  constructor(name: string, age: number, lang: string = "english") {
    this.name = name;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return this.age;
  }
}

const coder = new Coder("mush", 25, "English");
console.log(coder.getAge());
// console.log(coder.age);

class WebDev extends Coder {
  constructor(public computer: string, name: string, age: number) {
    super(name, age);
    this.computer = computer;
  }
  public getLang() {
    return this.lang;
  }
}

const MDev = new WebDev("windows", "musharruf", 25);
console.log(MDev.getLang());
// console.log(MDev.lang);

interface Developer {
  name: string;
  role: string;
  works(work: string): string;
}

class FEDeveloper implements Developer {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  works(work: string) {
    return `${this.name} works on ${work}`;
  }
}

const FEDev = new FEDeveloper("mush", "UI Developer");
console.log(FEDev.works("Frontend"));

class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const user1 = new Peeps("one");
const user2 = new Peeps("two");
const user3 = new Peeps("three");

console.log(user1.id);
console.log(user2.id);
console.log(user3.id);

// getters and setters

class Bands {
  private dataSets: string[];

  constructor() {
    this.dataSets = [];
  }

  public get data(): string[] {
    return this.dataSets;
  }
  public set data(value: string[]) {
    // setters cannot returns value
    if (Array.isArray(value) && value.every((str) => typeof str === "string")) {
      this.dataSets = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const myBands = new Bands();
myBands.data = ["3G", "4G", "5G"];
console.log(myBands.data);
myBands.data = [...myBands.data, "6G"];
console.log(myBands.data);
// myBands.data = [...myBands.data, 6]; // throws error
