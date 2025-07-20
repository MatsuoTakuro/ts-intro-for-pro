const msg: string = "Hello, \nWorld!";
console.log(msg);

const msg2: string = `Hello,
World!`;
console.log(msg2);

const str1: string = "Hello,";
const str2: string = "World!";
const msg3: string = `${str1}${str2}`;
console.log(msg3);


const val1: null = null;
const val2: undefined = undefined;
console.log(val1, val2);
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// const bigint = BigInt("fooo") // syntax error
// console.log(bigint);

console.log("123:", Boolean(123));
console.log("0:", Boolean(0));
console.log("1n:", Boolean(1n));
console.log("0n:", Boolean(0n));
console.log("(empty string):", Boolean(""));
console.log("foobar:", Boolean("foobar"));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));

const addResult = 1024 + 314 + 500;
console.log("addResult:", addResult); // 1838 と表示される
const discounted = addResult * 0.7;
console.log("discounted:", discounted); // 1286.6 と表示される

const sqrt2 = 2 ** 0.5;
console.log("sqrt2:", sqrt2);     // 1.4142135623730951 と表示される
console.log("sqrt2 - 1:", sqrt2 - 1); // 0.41421356237309515 と表示される

console.log("18 / 12:", 18 / 12);   // 1.5 と表示される
console.log("18n / 12n:", 18n / 12n); // 1n と表示される
console.log("18 % 12:", 18 % 12);   // 6 と表示される
console.log("18n % 12n:", 18n % 12n); // 6n と表示される


let foo = 10;
console.log("++foo:", ++foo); // 変動後の値が返り値として表示されるため、11 と表示される
console.log("--foo:", --foo); // 変動後の値が返り値として表示されるため、10 と表示される
console.log("foo++:", foo++); // 変動前の値が返り値として表示されるため、10 と表示される
console.log("foo--:", foo--); // 変動前の値が返り値として表示されるため、11 と表示される
console.log("foo: ", foo); // 変動後の値が表示されるため、10 と表示される


// ビット OR（|）: それぞれのビットに対して OR 演算
console.log(0b0101 | 0b1100);  // => 13 (0b1101)
// ビット AND（&）: それぞれのビットに対して AND 演算
console.log(0b0101 & 0b1100);  // => 4 (0b0100)
// ビット XOR（^）: それぞれのビットに対して XOR 演算
console.log(0b0101 ^ 0b1100);  // => 9 (0b1001)
// ビット NOT（~）: 各ビットを反転（1の補数）
console.log(~0b0101);          // => -6 = -(5 + 1)
// 左シフト（<<）: 指定したビット数だけ左にずらす（2倍ずつ）
console.log(0b0001 << 2);      // => 4 (0b0100)
// 右シフト（>>）: 指定したビット数だけ右にずらす（符号を維持）
console.log(0b1000 >> 2);      // => 2 (0b0010)
// 符号なし右シフト（>>>）: 符号を無視して右にずらす
console.log(-1 >>> 1);         // => 2147483647


rl.question("input a string: ", (strInput: string) => {
  console.log(`You entered: ${strInput}`);

  rl.question("input a number: ", (numInput: string) => {
    const result = numInput + 1000; // assuming type of numInput is string
    console.log(result);

    const num = Number(numInput);
    console.log(num + 1000); // converting to number before addition
    rl.close();
  })
});
