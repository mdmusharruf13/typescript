type Num = number;
type Str = string;
type bool = boolean;

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User): {} {
  console.log(user);
  return user;
}

const newUser = createUser({
  name: "mush",
  email: "mush@gmail.com",
  isActive: true,
});
console.log(newUser);

// READONLY and optional

type Employee = {
  readonly _id: string;
  name: string;
  email: string;
};

const employee: Employee = {
  _id: "598",
  name: "mush",
  email: "mush@gmail.com",
};
console.log(employee);

type CardNumber = {
  cardNumber: number;
};
type CardDate = {
  cardDate: string;
};
type CardDetails = CardNumber &
  CardDate & {
    cvv: number;
    credentials?: number;
  };

const card: CardDetails = {
  cardNumber: 598,
  cardDate: "12-11-2024",
  cvv: 1082,
};

console.log(card);
