/* eslint-disable */

// You can define optional fields in your object types. Optional fields are
// fields that may or may not be present in an object. You can make a field
// optional by appending a question mark "?" to its name in the type
// definition. This is useful when you have an object with some properties that
// are not always required.
//
// Useful links:
// https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties

// Create a union type to use
type Warranty = "standard" | "extended";

function warrantyInfo(warranty: Warranty): string {
    switch (warranty) {
        case "standard":
            return "Standard warranty for 90 days";
        case "extended":
            return "Extended warranty for 180 days";
    }
}

function printLineInfo(lineItem: LineItem) {
    console.log(`name: ${lineItem.name}`);
    console.log(`quantity: ${lineItem.quantity}`);

    // There is a better way to do this... Optional Chaining Up next...
    if (lineItem.warranty !== undefined) {
        console.log(`Warranty: ${warrantyInfo(lineItem.warranty)}`);
    } else {
        console.log("Warranty: No warranty");
    }
}

// An interface with an optional field
interface LineItem {
    name: string;
    quantity: number;
    warranty?: Warranty; //undefined if not present
}

const boxFan: LineItem = {
    name: "box fan",
    quantity: 1
}

const televisionSet: LineItem = {
    name: "television set",
    quantity: 2,
    warranty: "standard"
}

console.log(warrantyInfo("standard"));
console.log(warrantyInfo("extended"));

printLineInfo(boxFan);
printLineInfo(televisionSet);
