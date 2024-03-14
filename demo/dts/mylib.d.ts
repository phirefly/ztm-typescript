// function add(a, b, ...args) {
//     let total = a + b;
//     for (let n of args) {
//         total += n;
//     }
//     return total;
// }


export function add(a:number, b:number, ...numbers:number[]): number;

// TODO: function max
export function max(arr: number[]): number | null;
// TODO: function quote
export function quote(message: string): ()=> string;

// TODO: function setCase
export type whichKind = "uppercase" | "lowercase"
export function setCase(message: string, kind: whichKind): string;


