/* eslint-disable */
import { strict as assert } from "assert";
import {type} from "node:os";
import {isHeadersProtocol} from "openai/core";

// Type predicates offer a way to determine the type of data based on a
// condition. This is achieved by defining a function that takes a some data as
// an argument, applies type guards, and returns a boolean indicating whether
// the data is a specific type. The function is then used to narrow down the
// type of the variable in subsequent code. Type predicates are useful when
// dealing with union types or other situations where the type of a variable
// may not be known at compile-time. Type predicates allow the type to be
// determined correctly which avoids runtime errors.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates


// Type predicates are an advanced form of a type guard

type StringOrNum = string | number;

function sample(data: StringOrNum) {

    // Type guard
    // Limitation: typeof only works on primitive types
    // It doesn't work on custom objects that we create
    if (typeof data === "string") {
        console.log("This was a string");
    } else if (typeof data === "number") {
        console.log("It was a number");
    }
}

sample("my string");
sample(1234);

// Type predicate, an advanced form of
interface Square {
    kind: "square";
    size: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Circle;
// A type predicate will simplify how we handle Shape
// particularly if the union values increase
// Type predicates always return a boolean value

// 'shape is Square' is the type predicate
function isSquare(shape: Shape): shape is Square {
    return shape.kind === "square";
}

function isCircle(shape: Shape): shape is Circle {
    return shape.kind === "circle";
}

function calculateArea(shape: Shape): number | Error {
    if (isSquare(shape)) {
        return shape.size ** 2; //square it
    }
    if (isCircle(shape)) {
        return Math.PI * shape.radius ** 2
    }

    return new Error("unknown shape");
}
const myShape: Shape = {
    kind: "square",
    size: 5
}

const myOtherShape: Shape = {
    kind: "circle",
    radius: 5
}

console.log(calculateArea(myShape));
console.log(calculateArea(myShape));
console.log(calculateArea(myOtherShape));
