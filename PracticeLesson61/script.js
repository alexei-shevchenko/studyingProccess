'use strict';

// const bigint = 123049823984239402384834098234907324078234720387420347n;

const sameBigint = BigInt(123049823984239402384834098234907324078234720387420347);

// console.log(2n === 2);

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);