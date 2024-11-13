interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
  getCoupon: (couponName: string) => number;
}

interface User {
  githubTocken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const user1: Admin = {
  dbId: 12,
  email: "mush@gmail.com",
  userId: 598,
  githubTocken: "github",
  role: "admin",
  startTrail: () => {
    return "trail started";
  },
  getCoupon(couponName: string) {
    return 10;
  },
};
