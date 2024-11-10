function logString(arg: string) {
  console.log(arg);
  return arg;
}
function logNumber(arg: number) {
  console.log(arg);
  return arg;
}
function logArray(arg: any[]) {
  console.log(arg);
  return arg;
}

logString("Logged In");
logNumber(598);
logArray([2, 3, 9]);

// DRY
function logAnyThing<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAnyThing("musharruf");
logAnyThing(598);
logAnyThing([3, 8, 5]);

interface HasAge {
  age: number;
}
interface Player {
  name: string;
  age: number;
}

function getOldest(people: HasAge[]): HasAge {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 30 }, { age: 50 }, { age: 40 }];

const players: Player[] = [
  { name: "musharruf", age: 20 },
  { name: "nawaz", age: 50 },
];
const peopleAge = getOldest(people).age;

// Assertion - zor-zabardasti

// console.log(getOldest(players).name); // thorw error
const player = getOldest(players) as Player;
console.log(player.name);

// Assertion solution
function getYoungest<T extends HasAge>(arg: T[]): T {
  return arg.sort((a, b) => a.age - b.age)[0];
}
/**
 * why extending means if it doesn't find age it will throw error
 * so we are making sure it have age by extending
 *  */
const player2 = getYoungest(players);
console.log(player2.name);

interface IPost {
  title: string;
  id: number;
  description: string;
}
interface IUser {
  name: string;
  age: number;
}
/*
const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};
const fetchUserData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};
const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`);
  return response.json();
};
*/

/*
(async () => {
  const post = await fetchPostData("/post");
  console.log(post[0]);
})();

(async () => {
  const user = await fetchUserData("/post");
  console.log(user[0]);
})();

(async () => {
  const data = await fetchData<IUser[]>("/post");
  console.log(data[0]);
})();
*/
