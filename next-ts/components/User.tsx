import React, { ReactNode } from "react";

type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
};

type StudentProps = {
  children: ReactNode;
};

function User(props: UserProps) {
  return (
    <section>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
      <h2>{props.isStudent.toString()}</h2>
    </section>
  );
}

export function Student({ children }: StudentProps) {
  return (
    <section>
      {children}
      <p>I am Learning Next.js</p>
    </section>
  );
}

export default User;
