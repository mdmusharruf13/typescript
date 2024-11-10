// let age: number = 20;
// if (age < 50) age += 10;
// console.log("over");

/** build in data types */

let sales: number = 123_456_789;
let language: string = "TypeScript";
console.log(sales);
console.log(language);

let names: string[] = [];
names[0] = "md";
names[1] = "musharruf";
console.log(typeof names, names);

function greetMe(name: string): string {
  return `Hello, ${name}`;
}

console.log(greetMe("Musharruf"));

function getDetails(name: string, age: any): string {
  if (age > 18) return `${name} you eligible to vote`;
  return `${name} you cannot vote`;
}
console.log(getDetails("musharruf", 20));

// objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "musharruf",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.retire(new Date());

// // advance types:

// type aliases
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee2: Employee = {
  id: 1,
  name: "musharruf",
  retire: (date) => console.log(date),
};

employee2.retire(new Date());

// narrowing | union
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// intersection
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable; // we have to implement both
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

// Nullable type
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("no name");
}

greet(null);
greet(undefined);

// optional chaining
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);
let customer2 = getCustomer(0);
console.log(customer2?.birthday?.getFullYear());
