interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[];
}

const transaction1: Transaction = {
  payerAccountNumber: 590,
  payeeAccountNumber: 598,
};
const transaction2: Transaction = {
  payerAccountNumber: 599,
  payeeAccountNumber: 589,
};

const bankAccount: BankAccount = {
  accountNumber: 598,
  accountHolder: "musharruf",
  balance: 5000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

console.log(bankAccount.transactions);

// Inheritance
interface Book {
  name: string;
  price: number;
}
interface EBook extends Book {
  fileSize: number;
  format: string;
}
interface AudioBook extends EBook {
  duration: number;
}

const book: AudioBook = {
  name: "JavaScript",
  price: 1200,
  fileSize: 5,
  format: "pdf",
  duration: 10,
};

console.log(book);

// Multiple Inheritance
interface TransportVehicle {
  wheels: number;
}
interface HeavyVehicle {
  load: number;
}
interface Vehicle extends TransportVehicle, HeavyVehicle {
  fuel: string;
}

const truck: Vehicle = {
  wheels: 12,
  load: 900,
  fuel: "diseal",
};
console.log(truck);

// Merging Interface
interface Person {
  name: string;
  age: number;
}
interface Person {
  role: string;
}

const person: Person = {
  name: "musharruf",
  age: 25,
  role: "developer",
};
console.log(person);

// // Merging not possible with 'type'
// type TwoWheeler = {
//     brand: string;
//     model: string;
// }
// type TwoWheeler = {  // error as duplicate identifier
//     price: number;
// }

type SanitizedString = string;
// interface sanitizedString2 extends string {} // only objects allowed

// Unions
type Id = number | string;

function printId(id: Id) {
  //   console.log(id.toUpperCase()); // draw back or union
  //   can be solved using type-narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}
printId(2);
printId("musharruf");

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}
console.log(getFirstThree("hello"));
console.log(getFirstThree([3, 9, 8, 7]));
