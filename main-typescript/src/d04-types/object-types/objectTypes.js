function GetCar(car) {
    return "Your car is ".concat(car.name, " with ").concat(car.color, "'s color and ").concat(car.wheels, " wheels. \nHere is your machine number: ").concat(car.machineNumber);
}
console.log(GetCar({ name: 'Toyota', color: 'Black', machineNumber: "22dkfsfnxzz112", wheels: 4 }));
/* Object types: class */
var Game = /** @class */ (function () {
    function Game(name, developer, year) {
        this.name = name;
        this.developer = developer;
        this.year = year;
    }
    Game.prototype.Details = function () {
        console.log("Game details: \n Name: ".concat(this.name, "\n Developer: ").concat(this.developer, "\n Year: ").concat(this.year));
    };
    return Game;
}());
var game1 = new Game('Valorant', 'Riot', 2017);
game1.Details();
/* Object types: enum */
var Direction;
(function (Direction) {
    Direction["NORTH"] = "N";
    Direction["WEST"] = "W";
    Direction["SOUTH"] = "S";
    Direction["EAST"] = "E";
})(Direction || (Direction = {}));
console.log(Direction.EAST); // -> print 'E'
/* Object types: array */
var evenNumbers = [0, 2, 4, 6];
var pair = ['Two', 2];
var byText = pair[0];
var byNumber = pair[1];
/* Object types: object */
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
var myName = null;
// we use the non-null assertion operator to tell the compiler that name will never be null
console.log(myName);
var myNameLength = myName.length;
console.log(myNameLength);
