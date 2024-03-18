## Day 04 Summary

### Primitive Types
In TypeScript, we can assign more than one types in a variable. For example:
```
var myAge: string | number | null = null
```

Another example is you can use keyword `type` for assigning value to a variable.
```
type personInfo = personName | otherDetails;

type personName = "John" | "Jack" | "Justin";

type otherDetails = {
    age: number;
    gender: string;
};

type Person = {
  myBasicInfo: personInfo;
  myOtherInfo: personInfo;
};
```

You can also assign type as `any` if you want to ignore typechecking errors.

### Object Types
A popular way in non-primitive type is an `array`. In TypeScript, you can define array as follows:
```
var evenNumbers: number[] = [0, 2, 4, 6];\
```

Another example of object types is `interface`. You can specifically type an object using an interface that can be reused by multiple objects.
```
interface Car {
    name: string;
    color: string;
    machineNumber: string;
    wheels: number;
}
```

Enums allows you to define a constant value. See this example below:
```
enum Direction {
    NORTH = 'N',
    WEST = 'W',
    SOUTH = 'S',
    EAST = 'E'
}

console.log(Direction.EAST); // -> print 'E'
```

## Misc
Using **non-null assertion**, you can tell TypeScript to tell compiler that a variable never be a null:
```
let myName: string | null = null;
let myNameLength = myName!.length;
```