/* eslint-disable */

// `as const` allows you to create readonly values in your code. When you use
// `as const` on an object, array or tuple, TypeScript infers that the values
// are constant and cannot be modified later. This can help prevent unexpected
// bugs in your code and make it easier to reason about. It's particularly
// useful when working with APIs or configurations where values should not be
// changed during runtime.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions


//Start with a union tpe
import {Departments} from "../dts2/mylib";
import {exec} from "node:child_process";

type Rgb = "red" | "green" | "blue"
//=> allows you to do this...
const red: Rgb = "red";

// Creating a new union type by...
// using 'as const' and
// using 'typeof'

// as const tells typescript that it, in this case the array, isn't going to change. It's readonly data
{
    const Color = ["red", "green", "blue"] as const;
    type Color = (typeof Color)[number];
    //=> allows you to do...
    const blue: Color = "blue";


    // Why do we need const assertion?
    //=> You can iterate through each one like this...
    // It's also unchanging, immutable
    // You can't do that with a normal union type
    for (const c of Color) {
        console.log(c);
    }
}

// Another example:
{
    const Department = {
        Executive: "top floor",
        Sales: "middle floor",
        Warehouse: "bottom floor",

    } as const;
    type Department = (typeof Department)[keyof typeof Department];

    let k: keyof typeof Department //--> I don't get this
    for (k in Department) {
        console.log(`key=${k}, floor=${Department[k]}`)
    }

    // Example: getting the executive department
    const execDept: Department = Department.Executive;
    console.log(`executive department location: ${execDept}`);

}





