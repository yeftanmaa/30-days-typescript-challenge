/* instanceOf: used to narrow down the variable of a class  */
class Transportation {
    move() {
        console.log('On the way...');
    }

    honk() {
        console.log('Stopped...');
    }
}

const bus = new Transportation();

if (bus instanceof Transportation) {
    bus.honk()
} else {
    console.log('bus is not a transportation');
}

/* typeof: used to narrow down the variable   */
let idMailing: string | number = '12128';

if (typeof idMailing === 'string') {
    console.log(`Value of idMailing is string`);
} else {
    console.log(`Value of idMailing is number`);
}

/* Equality */
function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } else {
      console.log(x);
      console.log(y);
    }
}
