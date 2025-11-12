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

// const loopChecker = (stringing) => {
//   let newStringing = "";
//   let xCount = 0;
//   let yCount = 0;
//   let zCount = 0;
//   for (let x = 0; x < stringing.length; x++) {
//     xCount++;
//     for (let y = 0; y < stringing.length; y++) {
//       yCount++;
//       for (let z = 0; z < stringing.length; z++) {
//         zCount++;
//         if (x === z) {
//           newStringing += stringing[y];
//         }
//       }
//     }
//   }
//   console.log(xCount, yCount, zCount, newStringing);
// };

const aChecker = (toCheck) => {
  let aCount = 0;
  let plurals = "a's";
  for (let i = 0; i < toCheck.length; i++) {
    if (toCheck[i] === "a") {
      aCount++;
    }
  }
  if (aCount === 1) {
    plurals = "a";
  }
  console.log(`there is ${aCount} ${plurals} in this word`);
};

aChecker("ant");
