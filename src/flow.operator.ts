/**
 * @description Can be used to chain sequence of operations from left to right.
 * The type definition of flow takes arbitary number of arguments.
 * The return type of a preceding function in the pipeline must match the input type of the subsequent function.
 * @param The first argument must be functions of any arity.
 * @param The subsequent arguments must be functions of arity one.
 */

import {flow, pipe} from 'fp-ts/lib/function';

const str = () => 'aaa';
const print = (x: unknown) => console.log(x);
const len = (s: string): number => s.length;
const double = (n: number): number => n * 2;

function concat(
  a: string,
  transformer: (a: string) => number
): [string, number] {
  return [a, transformer(a)];
}

flow(str, len, double, print);
print(concat('pipe', x => pipe(x, len, double)));

// In above cases using pipe makes us use an extra variable x in an unknown function.
// It puts us at risk of shadowing a variable in the outer scope. It is also more verbose.
// The solution is to use the flow operator and remove the anonymous function.
print(concat('flow', flow(len, double)));
