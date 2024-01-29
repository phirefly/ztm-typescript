/* eslint-disable */
import { strict as assert } from "assert";

// Objects are a fundamental data type used to represent a collection of
// properties with their respective values. They are defined using either an
// object literal notation or a constructor notation.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html

// type aliases can be used in object types
type personName = string;
type department = string;

// Object type
type Employee = {
  name: personName;
  role: string;
  salary: number;
  department: department;
  squad?: string;
}

const employee: Employee = {
  name: "Raphy Villas",
  role: "Dir of Software Engineering",
  salary: 100000,
  department: "Engineering",
  squad: "CMS"
}

const theEmployee = employee;

assert.equal(theEmployee.name, "Raphy Villas");


const employee2 = { // You don't need to specify the type of the object if you don't want to. TS will find it.
  name: "Liono",
  role: "Swordsman",
  salary: 1000000000,
  department: "Superhero"
}

assert.equal(employee2.name, "Liono");
