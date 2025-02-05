import React from "react";

type UserProps = {
  name: string;
  age: number;
  isStudent: boolean;
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

export default User;
