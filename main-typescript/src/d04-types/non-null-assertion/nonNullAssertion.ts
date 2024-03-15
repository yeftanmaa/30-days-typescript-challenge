let myName: string | null = null;
let myNameLength = myName!.length; // -> we use the non-null assertion operator to tell the compiler that name will never be null
console.log(myNameLength);