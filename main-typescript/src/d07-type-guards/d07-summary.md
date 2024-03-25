## Day 07 Summary
Type Guards enable you to narrow down type of variable. This is useful when you want to do something different depending on the type of a variable.

### `instanceOf`
instanceOf is one of type guards to narrow down the variable of a class.
```
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
```

### `typeof`
if `instanceOf` were used to narrow down a class, `typeof` came to let us narrow down a variable's type. Take a look at this example:

```
let idMailing: string | number = '12128';

if (typeof idMailing === 'string') {
    console.log(`Value of idMailing is string`);
} else {
    console.log(`Value of idMailing is number`);
}

```

## Equality
TypeScript also uses switch statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types:

```
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
```
When we checked that x and y are both equal in the above example, TypeScript knew their types also had to be equal (**in this case, both `x` and `y` has one same possible type, which is string**).