export type Info = {
  username: string;
  email: string;
  age: number;
  location: string[];
};

function UserInfo({ username, email, age, location }: Info) {
  return (
    <section>
      <p>{username}</p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{location.join(", ")}</p>
    </section>
  );
}

export default UserInfo;
