import { FormEvent, useRef, useState } from "react";

type formData = {
  name: string;
  email: string;
  password: string;
};

function Form() {
  const [submittedData, setSubmittedData] = useState<formData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const passwrod = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const [nameVal, emailVal, pswdVal] = [
      name.current!.value,
      email.current!.value,
      passwrod.current!.value,
    ];

    setSubmittedData({ name: nameVal, email: emailVal, password: pswdVal });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Your Name" ref={name} />
        <input type="email" placeholder="Enter your email" ref={email} />
        <input type="password" placeholder="Enter password" ref={passwrod} />
        <input type="submit" />
      </form>

      <section>
        <p>Name: {submittedData.name}</p>
        <p>Email: {submittedData.email}</p>
        <p>Password: {submittedData.password}</p>
      </section>
    </section>
  );
}

export default Form;
