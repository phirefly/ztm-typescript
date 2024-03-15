/* eslint-disable */
import { strict as assert } from "assert";
import {  apiResponse } from "./mylib";
// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

const response = apiResponse();

if(response !== undefined) {
    if(response.status === "success") {
        console.log(response.data.items[1].name)
    } else {
        console.log("An error occurred")
    }
}