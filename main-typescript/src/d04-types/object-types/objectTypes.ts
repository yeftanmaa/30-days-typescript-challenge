/* Object types: interface */
interface Car {
    name: string;
    color: string;
    machineNumber: string;
    wheels: number;
}

function GetCar(car: Car) {
    return `Your car is ${car.name} with ${car.color}'s color and ${car.wheels} wheels. \nHere is your machine number: ${car.machineNumber}`;
}

console.log(GetCar({ name: 'Toyota', color: 'Black', machineNumber: "22dkfsfnxzz112", wheels: 4 }));

/* Object types: class */
class Game {
    name: string;
    developer: string;
    year: number;
  
    constructor(name: string, developer: string, year: number) {
      this.name = name;
      this.developer = developer;
      this.year = year;
    }
  
    Details() {
      console.log(`Game details: \n Name: ${this.name}\n Developer: ${this.developer}\n Year: ${this.year}`);
    }
}

var game1 = new Game('Valorant', 'Riot', 2017);
game1.Details();

/* Object types: enum */
enum Direction {
    NORTH = 'N',
    WEST = 'W',
    SOUTH = 'S',
    EAST = 'E'
}

console.log(Direction.EAST); // -> print 'E'

/* Object types: array */
var evenNumbers: number[] = [0, 2, 4, 6];

/* Object types: tuple */
type StringNumberPair = [string, number]; // -> define tuple as 'type', not 'var' or anything else
const pair: StringNumberPair = ['Two', 2];
const byText = pair[0];
const byNumber = pair[1];


/* Object types: object */
function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });