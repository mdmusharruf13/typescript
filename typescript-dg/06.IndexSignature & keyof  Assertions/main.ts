console.log("start");
// index signature - access object property dynamically

interface TransactionObj {
  pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionObj = {
  pizza: -10,
  Books: -5,
  Job: 50,
};

console.log(todaysTransaction.pizza);
console.log(todaysTransaction["pizza"]);

// let prop: string = "pizza";
// console.log(todaysTransaction[prop]); // cannnot do in ts

interface Transaction {
  readonly [index: string]: number;
  small: number;
  mid: number;
  large: number;
}

const Transactions: Transaction = {
  small: 10,
  mid: 10,
  large: -5,
};

const printTransactions = (transObj: Transaction) => {
  let total = 0;
  for (const key in transObj) {
    total += Transactions[key];
  }
  return total;
};

console.log(printTransactions(Transactions));
console.log(Transactions["name"]);

///////////////////////////

interface Std {
  [index: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const std1: Std = {
  name: "Doug",
  GPA: 4.1,
  classes: [100, 200],
};

// console.log(student1.test);

for (let key in std1) {
  console.log(`${key}: ${std1[key]}`);
}

Object.keys(std1).map((key) => {
  console.log(std1[key as keyof typeof std1]);
});

const logStudentKey = (student: Std, key: keyof typeof std1) => {
  console.log(`student ${key}:- ${student[key]}`);
};
logStudentKey(std1, "name");

//////////////////////////////////////////

interface Income {
  [key: string]: number;
}

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 5000,
  sidehustle: 1000,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}
