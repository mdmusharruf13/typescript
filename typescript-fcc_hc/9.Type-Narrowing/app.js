function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function isAdminAccunt(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
console.log(isAdminAccunt({ name: "mush", email: "m@m.com", isAdmin: true }));
// function isFish(pet: Fish | Bird) {
//   return (pet as Fish).swim !== undefined;
// }
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
// function getTrueShape(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius ** 2;
//   }
//   return shape.side * shape.side;
// }
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            var _exhaustforshape = shape;
            return _exhaustforshape;
    }
}
