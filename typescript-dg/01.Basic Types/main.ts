// numbers, string
let myName = "Mush"; // implicitly
let MyName: string = "Mush"; // explicitly

let isLoading: boolean;
let age: number;
let about: any;

isLoading = true;
age = 30;
about = "i am developer;";
about = 30;

const sum = (a, b) => {
  // parameters 'a & b' has implicitly has an 'any' type.
  return a + b;
};

console.log(sum(1,3));


const sub = (a:number, b:number) {
    return a-b;
}

console.log(sub(5,2));

// union types
let postId: string | number;
let isActive: number | boolean;

postId = "598";
postId = 598;