import { Info } from "./UserInfo";

type AdminInfoProps = Info & {
  admin: string;
};

function AdminInfo({ username, email, age, location, admin }: AdminInfoProps) {
  return (
    <section>
      <p>
        {username} {admin ? "admin" : null}
      </p>
      <p>{email}</p>
      <p>{age}</p>
      <p>{location.join(", ")}</p>
    </section>
  );
}

export default AdminInfo;
