var user1 = {
    dbId: 12,
    email: "mush@gmail.com",
    userId: 598,
    githubTocken: "github",
    role: "admin",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (couponName) {
        return 10;
    },
};
console.log(user1.startTrail());
