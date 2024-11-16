const add = (a: number, b: number) => {
  return a + b;
};
const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello");
logMsg(add(2, 8));

let subtract = function (c: number, d: number): number {
  return c - d;
};

type mathFunction1 = (a: number, b: number) => number;

interface mathFunction2 {
  (a: number, b: number): number;
}

const multiply: mathFunction1 = (n1: number, n2: number) => {
  return n1 * n2;
};
logMsg(multiply(2, 3));

// optional parameter
const addAll = (a: number, b: number, c?: number) => {
  if (typeof c !== "undefined") return a + b + c;
  return a + b;
};
logMsg(addAll(2, 3, 5));

// default parameter
const sumAll = (a: number, b: number, c: number = 2) => {
  return a + b + c;
};
logMsg(sumAll(1, 4, 9));

const sumOfNums = (a: number = 10, b: number, c: number) => {
  return a + b + c;
};

logMsg(sumOfNums(1, 2, 1));
logMsg(sumOfNums(undefined, 1, 2));

// rest parameters
const total = (a: number, ...nums: number[]) => {
  return a + nums.reduce((sum, curr) => sum + curr);
};

logMsg(total(1, 1, 1));

const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNum = (val: any): boolean => {
  return typeof val === "number" ? true : false;
};
logMsg(isNum("123"));

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("this should bever happen!");
};
logMsg(numberOrString("123"));
logMsg(numberOrString(31));
