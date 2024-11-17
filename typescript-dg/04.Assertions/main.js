// converting to more or less specific
var a = "Hello";
var b = a; // less specific
var c = a; // more specific
var d = "word";
var e = "word";
var addOrConcat = function (a, b, c) {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
var myVal1 = addOrConcat(2, 2, "concat");
// Be careful TS sees no problem - but a string is returned
var myVal2 = addOrConcat(2, 2, "concat");
/*
10 as string;
(10 as unknown) as string
 */
// The DOM
var img = document.querySelector("img");
var myImg = document.querySelector("#img");
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
var year = document.getElementById("year");
var thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
