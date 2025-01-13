// 1 //
const toArray = (str) => str.split(" ");
const input1 = "Orange Jordan";
const result1 = toArray(input1);
console.log(result1);

// 2 //
const maskPhone = (phone) => "*".repeat(7) + phone.slice(7);
const input2 = "0776807777";
console.log(maskPhone(input2));

// 3 //
const maskEmail = (email) => {
  const [local, domain] = email.split("@");
  const hiddenLocal = local.slice(0, 4) + "…";
  return `${hiddenLocal}@${domain}`;
};
const input3 = "orange_academy@orange.jo";
console.log(maskEmail(input3));

// 4 //
const capitalizeWords = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const input4 = "coding academy by orange";
console.log(capitalizeWords(input4));

// 5 //
const reverseNum = (num) =>
  parseInt(num.toString().split("").reverse().join(""), 10);
const input5 = 92485;
console.log(reverseNum(input5));

// 6 //
const swap = (x, y) => {
  [x, y] = [y, x];
  return { x, y };
};
let swapResult = swap(3, 4);
console.log(swapResult);

// 7 //
const removeChar = (str, idx) => str.slice(0, idx) + str.slice(idx + 1);
const input7 = "Orange";
const idx = 3;
console.log(removeChar(input7, idx));

// 8 //
const merge = (str1, str2) => str1.slice(1) + str2.slice(1);
const input8 = "lora";
const input9 = "inge";
console.log(merge(input8, input9));

// 9 //
const checkPos = (char, str) => str.startsWith(char) || str.endsWith(char);
console.log(checkPos("z", "orange"));
console.log(checkPos("o", "orange"));

// 10 //
const capitalizeFirst = (str) =>
  str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1));
const input10 = "Coding Academy by Orange";
console.log(capitalizeFirst(input10));

// 11 //
const sortStr = (str) => str.split("").sort().join("");
const input11 = "Orange";
console.log(sortStr(input11));

// 12 //
const measureTime = (func) => {
  const start = performance.now();
  func();
  const end = performance.now();
  console.log(`${(end - start).toFixed(0)} ms`);
};

const exampleFunc = () => {
  for (let i = 0; i < 1000000; i++) {}
};

measureTime(exampleFunc);
