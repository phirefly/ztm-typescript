/* eslint-disable */

// Optional fields are convenient because they allow situations
// where it may not be appropriate to have data present. However,
// they make it cumbersome to access any additional data that is
// behind the optional field. For example, trying to access multiple
// optional objects one after the other requires multiple checks for
// `undefined` and multiple `if` blocks.
//
// With 'Optional Chaining', it is possible to combine all of the `if`
// blocks into a single line using the 'optional property access' operator.

// The optional property access operator is a question mark (?) and allows
// access to optional fields. It will continue to access optional fields
// using the following behavior:
//  - Access fields until `undefined` is encountered, and then set the
//    expression to `undefined.`
//  - Access fields until the last field is accessed, and then set the
//    expression to the value of the last field.
//
// Useful links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

interface Pii {
    age?: number;
    address?: string;
}

interface SearchResult {
    name: string;
    pii?: Pii;
}

class Database {
    search(name: string): SearchResult | undefined {
        switch(name) {
            case "John":
                return {
                    name: "John Doe",
                    pii: {
                        address: "123059712 Cherry Lane, Apple, WI 23985"
                    }
                };
            case "Jane":
                return {
                    name: "Jane Doe",
                    pii: {
                        age: 26,
                        address: "2022 N Fleming Road, Jax, FL 32226"
                    }
                };

            default:
                return undefined;
        }
    }
}

const db = new Database();
console.log(db.search("John"));
console.log(db.search("Jane"));

// Good way using optional chaining
const results = db.search("John");
function checkResults(results): string {
    if (results?.pii?.age) {
        return `${results.name} is ${results.pii.age} years old`;
    } else if (results) {
        return `We don't know how old ${results.name} is...`;
    } else {
        return "Nothing to say here";
    }
}

const query1 = db.search("John");
console.log(checkResults(query1));

const query2 = db.search("Jane");
console.log(checkResults(query2));
