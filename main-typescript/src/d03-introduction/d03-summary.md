## Day 03 Summary

To run a TypeScript file, we can use one of these command:
```typescript
tsc || tsc <file_name>
```
The difference is ```tsc``` will execute all TypeScript file that you have, while ```tsc <file_name>``` will only execute a particular TypeScript file.

If you are using ```tsc```, TypeScript will create a new folder according to what you specified inside your ```tsconfig.json```.

For example:
```
{
    "compilerOptions": {
        "target": "ES5",
        "module": "CommonJS",
        "strict": true,
        "outDir": "./dist",
        "rootDir": "./ts"
    },
    "exclude": ["node_modules"]
}
```

In this case, TypeScript will generate a JavaScript file by creating new directory (if not exist yet) called **/dist**.

On the other hand, ```rootDir``` is used to specify in which directory you are placing your TypeScript files.