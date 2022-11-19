/**
 * @description Can be used to chain sequence of operations from left to right.
 * The type definition of pipe takes arbitary number of arguments.
 * The return type of a preceding function in the pipeline must match the input type of the subsequent function.
 * @param The first argument can be any arbitary value.
 * @param The subsequent arguments must be functions of arity one.
 */

import {pipe} from 'fp-ts/function';

const print = (x: unknown) => console.log(x);
const len = (s: string): number => s.length;
const double = (n: number): number => n * 2;

// without pipe
print(double(len('aaa')));

// with pipe
pipe('aaa', len, double, print);
