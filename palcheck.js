// function isPalindrome(str) {
//   if (str.split("").reverse().join("") === str) return true;
//   return false;
// }
// function palindromeSwapper(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length - 1; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (i === j) {
//         newStr += str[j++];
//         newStr += str[j];
//         j++;
//       } else {
//         newStr += str[j];
//       }
//     }
//     if (isPalindrome(newStr) || isPalindrome(str)) return true;
//     return false;
//   }
//   return false;
// }

// const letterCounter = (wording) => {
//   let wordingNew = {};
//   for (let i = 0; i < wording.length; i++) {
//     wordingNew[wording[i]];
//   }
//   console.log(wordingNew);
// };

// letterCounter("aaabbcc");

// function letterCounting(wording) {
//   let counted = {};
//   for (let i = 0; i < wording.length; i++) {
//     let char = wording[i];
//     if (counted[char] === undefined) {
//       counted[char] = 1;
//     } else {
//       counted[char] = counted[char] + 1;
//     }
//   }
//   return counted;
// }

// console.log(letterCounting("aabbbbccccc"));

const color = ["Blue", "Red", "Green", "White", "Purple"];
const firstName = ["Letter", "Box", "Mail", "Envelope", "Package"];
const lastName = ["Media", "Deliveries", "Mailman", "Visuals", "Design"];

const randoming = (rayray) => {
  return rayray[Math.floor(Math.random() * rayray.length)];
};

const franchiseGenerator = () => {
  const c = randoming(color);
  const f = randoming(firstName);
  const l = randoming(lastName);
  return `${c} ${f} ${l}`;
};

for (let i = 0; i < 9; i++) {
  console.log(franchiseGenerator());
}
