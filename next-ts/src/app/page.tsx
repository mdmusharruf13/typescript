"use client";

import AdminInfo from "../../components/AdminInfo";
import Button, {
  primaryButtonProps,
  secondaryButtonProps,
} from "../../components/Button";
import Counter from "../../components/Counter";
import ElementWrapper from "../../components/ElementWrapper";
import Employee from "../../components/Employee";
import Form from "../../components/Form";
import MyComponent from "../../components/MyComponent";
import User, { Student } from "../../components/User";
import UserInfo from "../../components/UserInfo";
import { MyProvider } from "./context/CounterContext";
import { MyContextProvider } from "./context/MyContext";

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
      {/* <Form /> */}
      {/* <section>
        <ElementWrapper className="box" elementType="div">
          <p>this is a div element with class box </p>
        </ElementWrapper>
        <ElementWrapper
          elementType="h2"
          onClick={() => console.log("clicked!!!")}
        >
          Header text
        </ElementWrapper>
        <ElementWrapper
          elementType="button"
          onClick={() => alert("button clicked")}
        >
          click me
        </ElementWrapper>
      </section> */}
      {/* <section>
        <Button {...primaryButtonProps} />
        <Button {...secondaryButtonProps} />
      </section> */}
      <section>
        <MyProvider>
          <MyContextProvider>
            <MyComponent />
          </MyContextProvider>
        </MyProvider>
      </section>
    </section>
  );
}
