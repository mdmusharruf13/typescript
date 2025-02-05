import Employee from "../../components/Employee";
import User, { Student } from "../../components/User";

export default function Home() {
  return (
    <section>
      <User name="Musharruf" age={20} isStudent={true} />
      <Student>
        <p>I am Next.js Developer</p>
      </Student>
      <Employee name={"mush"} id={98} />
    </section>
  );
}
