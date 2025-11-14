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

const letterCounter = (wording) => {
  let wordingNew = {};
  for (let i = 0; i < wording.length; i++) {
    wordingNew[wording[i]];
  }
  console.log(wordingNew);
};

letterCounter("aaabbcc");