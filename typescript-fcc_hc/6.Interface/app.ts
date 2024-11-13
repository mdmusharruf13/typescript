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

console.log(user1.startTrail());

interface TakePhoto {
  cameraMode: string;
  filter: string;
  brust: string;
}

interface RecordVideo {
  startRecording(): void;
}

class Camera implements TakePhoto, RecordVideo {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: string
  ) {}
  startRecording(): void {
    console.log("recording started...");
  }
}
