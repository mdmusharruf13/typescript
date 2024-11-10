// Type alias: helps to build custom types

type User = {
  name: string; // required
  age: number; // required
  address?: string; // optional
};

const user: User = {
  name: "musharruf",
  age: 25,
};

function login(userData: User): User {
  return userData;
}

console.log(login(user));

type ID = number | string;

const userId: ID = 598;

console.log(userId);
