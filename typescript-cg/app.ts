function addNumbers(numbers: number[]) {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

const sum = addNumbers([2, 5, 1]);
console.log(sum);

const person = {
  firstName: "musharruf",
  lastName: "nawaz",
  role: "developer",
};

console.log(person.firstName);
