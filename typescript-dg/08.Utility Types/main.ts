// utility type

// partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updatedAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "M80",
  title: "final project",
  grade: 0,
};

console.log(assign1);

const assignGraded: Assignment = updatedAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "mush" | "nawaz";
type LetterGrades = "A" | "B" | "C" | "D";

const finalGrades: Record<Students, LetterGrades> = {
  mush: "B",
  nawaz: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradesData: Record<Students, Grades> = {
  mush: { assign1: 85, assign2: 93 },
  nawaz: { assign1: 76, assign2: 15 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  studentId: "m1",
  grade: 9,
};

type AssignPreview = Omit<Assignment, "grade" | "Verified">;

const preview: AssignPreview = {
  studentId: "m45",
  title: "final project",
};

//
// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "C">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//
// Nonnullable

type AllPossibleGrades = "mush" | "nawaz" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

//
// ReturnType

type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign2 = ReturnType<typeof createNewAssign>;

const tAssign: newAssign2 = createNewAssign("Utility Types", 100);
console.log(tAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["generics", 100];

const tAssign2: newAssign2 = createNewAssign(...assignArgs);

console.log(tAssign2);

// Awaited - helps us with

const fetchUsers = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      if (error instanceof Error) console.log(error.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
