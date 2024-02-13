/* eslint-disable */
import { strict as assert } from "assert";
import { add, pi, Int as MyInteger } from "./math";
import { Point as MyPoint } from "./coords";


// ES modules provide a way to organize code into separate files that can be
// imported and used in other files.To use an ES module, the the `import`
// keyword is used.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/modules.html


const three: MyInteger = 3;
const four: MyInteger = 4;

const result = add(three, four);
assert.equal(result, 7);