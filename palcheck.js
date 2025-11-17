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

function loopCounter(item) {
  let newItem = "";
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  for (let a = 0; a < item.length; a++) {
    aCount += 1;
    newItem += "A";
    for (let b = 0; b < item.length; b++) {
      bCount += 1;
      newItem += "B";
      for (let c = 0; c < item.length; c++) {
        cCount += 1;
        newItem += "C";
      }
    }
  }
  console.log(newItem, aCount, bCount, cCount);
}

loopCounter("was");
