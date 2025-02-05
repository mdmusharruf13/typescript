type UserShape = {
  params: {
    id: number;
  };
};

function User({ params: { id } }: UserShape) {
  return <div>{id}</div>;
}

export default User;
