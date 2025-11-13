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

// function counter(string1) {
//   let arraycounter = {};
//   for (let i = 0; i < string1.length; i++) {
//     const char = string1[1];
//   }
//   console.log(arraycounter);
// }

// counter("aaa");

const alphabetCounter =(item)=>{
  let newItem ={}
  for (let i = 0; i < item.length; i++) {
    if(newItem[item[i]]===undefined){
      newItem[item[i]]=0
    } else{
      newItem[item[i]]+1
    }
  }
  return newItem
}

console.log(alphabetCounter("abc"));
