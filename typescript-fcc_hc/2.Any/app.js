var Name = "musharruf";
function greet(name) {
    return "Hello ".concat(name);
}
function greet2(name) {
    return "hi, ".concat(name);
}
console.log(greet(Name));
console.log(greet2(Name));
var names = ["musharruf", 598, true];
console.log(names);
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function handleError(errMsg) {
    console.log(errMsg);
}
handleError("log...");
