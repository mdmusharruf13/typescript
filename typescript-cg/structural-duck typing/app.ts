interface ICredential {
  username: string;
  password: string;
  isAdmin?: boolean;
}

function login(credentials: ICredential): boolean {
  console.log(credentials);
  return true;
}

const user: ICredential = {
  username: "musharruf",
  password: "secret",
  isAdmin: true,
};

login(user);

interface IAuth {
  username: string;
  password: string;
  login(username: string, password: string): void;
}

const auth: IAuth = {
  username: "musharruf",
  password: "secret",
  login(username, password) {
    console.log("logged in");
  },
};
