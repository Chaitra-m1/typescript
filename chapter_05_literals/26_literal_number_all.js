// All number formats/literals supported in JavaScript

// 1. Integer (whole number)
let intNum = 42;
console.log(intNum, typeof intNum); // 42 number

// 2. Negative number
let negNum = -7;
console.log(negNum, typeof negNum); // -7 number

// 3. Floating point (decimal / fraction)
let floatNum = 3.14;
console.log(floatNum, typeof floatNum); // 3.14 number

// 4. Exponent / scientific notation (e = power of 10)
let expBig = 23e3; // 23 x 10^3
let expSmall = 5e-2; // 5 x 10^-2
console.log(expBig, typeof expBig); // 23000 number
console.log(expSmall, typeof expSmall); // 0.05 number

// 5. Hexadecimal (base 16) -> prefix 0x  (0-9 and a-f)
let hexNum = 0xff; // 255 in decimal
console.log(hexNum, typeof hexNum); // 255 number

// 6. Octal (base 8) -> prefix 0o  (0-7)
let octNum = 0o17; // 15 in decimal
console.log(octNum, typeof octNum); // 15 number

// 7. Binary (base 2) -> prefix 0b  (only 0 and 1)
let binNum = 0b1010; // 10 in decimal
console.log(binNum, typeof binNum); // 10 number

// 8. Numeric separator -> underscore for readability
let sepNum = 1_000_000;
console.log(sepNum, typeof sepNum); // 1000000 number

// 9. Special number values
console.log(Infinity, typeof Infinity); // Infinity number
console.log(-Infinity); // -Infinity
console.log(NaN, typeof NaN); // NaN number (Not a Number)

// 10. BigInt -> prefix/suffix n  (for numbers bigger than safe limit)
let bigNum = 123n;
console.log(bigNum, typeof bigNum); // 123n bigint

// Quick check: what is 0.1 + 0.2 ? (famous floating point quirk)
console.log(0.1 + 0.2); // 0.30000000000000004
