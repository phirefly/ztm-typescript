/* eslint-disable */
import { strict as assert } from "assert";

// Type aliases provide a way to give a name to a specific type or to create a
// union of multiple types. They can be used to define object types, which can
// then be used as types for variables, function parameters, and return types.
// Type aliases offer a way to make your code more readable and maintainable by
// providing descriptive names for complex types.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type personName = string; //wherever you see personName, it is a string

const name: personName = "Raphy Villas";
const anotherName: string = "Anne Villas";
const aBadString: string = "a house"

function printNameBad(name: string) {
    console.log(`Supposed to be a name: ${name}`);
}

function printNameBetter(name: personName) {
    console.log(`Supposed to be a name and we can tell! => ${name}`);
}

printNameBad("my foot");

printNameBetter("Raphael Villas");