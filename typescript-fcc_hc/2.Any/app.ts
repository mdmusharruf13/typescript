const Name: any = "musharruf";

function greet(name: string) {
  return `Hello ${name}`;
}

function greet2(name: any): any {
  return `hi, ${name}`;
}

console.log(greet(Name));
console.log(greet2(Name));

const names: any[] = ["musharruf", 598, true];
console.log(names);

const heros = ["thor", "spiderman", "ironman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

function handleError(errMsg: string): void {
  console.log(errMsg);
}

handleError("log...");
