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

// function generateSeats(rowCount) {
//   let seats = [];
//   for (let i = 0; i < rowCount; i++) {
//     seats.push([]);
//   }
//   return seats;
// }

// function printSeats(seats) {
//   for (let i = 0; i < seats.length; i++) {
//     console.log(`Baris ${i}`, seats[i]);
//   }
// }

// function personManager(people, rowSeats) {
//   // let seats = generateSeats(rowSeats);
//   let seat = [];
//   for (let i = 0; i < rowSeats; i++) {
//     seat.push([]);
//   }
//   let row = 0;
//   for (let i = 0; i < people.length; i++) {
//     seat[row].push(people[i]);
//     row += 1;
//     if (row === rowSeats) {
//       row = 0;
//     }
//   }
//   // console.log(seat);
//   for (let j = 0; j < seat.length; j++) {
//     console.log(`Baris ${j}`, seat[j]);
//   }
//   // printSeats(seats)
// }

// personManager(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);

let suhu = 36;
if (suhu >= 37.5) {
  console.log("Anda Demam");
} else if (suhu >= 37 && suhu < 37.5) {
  console.log("Anda Terindikasi Demam");
} else if (suhu < 37) {
  console.log("Anda Sehat");
} else {
  console.log(
    "Anda bukan manusia, silahkan daftar nama dan planet asal anda di kantor imigrasi terdekat"
  );
}
