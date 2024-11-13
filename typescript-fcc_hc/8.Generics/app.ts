function getValue<T>(data: T): T {
  return data;
}

const score: Array<number> = [];
const nameList: Array<string> = [];

console.log(getValue("musharruf"));
console.log(getValue(90));

interface Bottle {
  brand: string;
  quantity?: number;
}

console.log(getValue<Bottle>({ brand: "bislery" }));

const getData = <T>(data: T[]): T => {
  // return "mush"; // throw error
  return data[0];
};

console.log(getData(["md", "musharruf"]));

function complexFn<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
const resultObject = complexFn(3, "4");
console.log(resultObject);

interface Quiz {
  name: string;
  type: string;
}
interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}
