"use client";

import AdminInfo from "../../components/AdminInfo";
import Counter from "../../components/Counter";
import Employee from "../../components/Employee";
import Form from "../../components/Form";
import User, { Student } from "../../components/User";
import UserInfo from "../../components/UserInfo";

export default function Home() {
  return (
    <section>
      {/* <User name="Musharruf" age={20} isStudent={true} />
      <Student>
        <p>I am Next.js Developer</p>
      </Student>
      <Employee name={"mush"} id={98} />
      <section>
        <UserInfo
          username="nawaz"
          email="nawaz@gmail.com"
          age={25}
          location={["hyderabad", "mumbai"]}
        />
        <AdminInfo
          username="mush"
          email="mush@gmail.com"
          age={30}
          location={["hyderabad", "bengalore"]}
          admin="yes"
        />
      </section> */}
      {/* <Counter /> */}
      <Form />
    </section>
  );
}
