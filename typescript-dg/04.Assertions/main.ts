type One = string;
type Two = string | number;
type Three = "hello";

// converting to more or less specific
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"word";
let e = <string | number>"word";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal1: string = addOrConcat(2, 2, "concat") as string;

// Be careful TS sees no problem - but a string is returned
let myVal2: number = addOrConcat(2, 2, "concat") as number;

/*
10 as string;
(10 as unknown) as string
 */

// The DOM
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.querySelector("#img")!;

img.src;
// myImg?.scroll;
myImg.scroll;

// // original js-code
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("datetime", thisYear);
// year?.textContent = thisyear;

// // 1st variation
// let year: HTMLElement | null;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

// 2nd variation
let year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
