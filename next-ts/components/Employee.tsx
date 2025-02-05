import { FC } from "react";

type Shape = {
  name: string;
  id: number;
};

const Employee: FC<Shape> = ({ name, id }) => {
  return (
    <section>
      <p>{name}</p>
      <p>{id}</p>
    </section>
  );
};

export default Employee;
