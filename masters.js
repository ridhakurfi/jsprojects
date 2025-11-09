// const modifier = ["Cozy", "Humid", "Concrete", "Natural", "Artificial"];
// const location = ["River", "Lake", "Forest", "Mountain", "Valley"];

// const randomizer = (rayearth) => {
//   return rayearth[Math.floor(Math.random() * rayearth.length)];
// };

// const vacation = () => {
//   console.log(`${randomizer(modifier)} ${randomizer(location)}`);
// };

// for (let i = 0; i < 5; i++) {
//   vacation();
// }

let number = Math.floor(Math.random() * 50) + 1; // 1–50
console.log("Number:", number);

if (number % 5 === 0) {
  console.log("Divisible by 5 🟢");
} else if (number % 3 === 0) {
  console.log("Divisible by 3 🔵");
} else if (number % 2 === 0) {
  console.log("Divisible by 2 ⚪");
} else {
  console.log("Not divisible by 2, 3, or 5 ❌");
}

// const elements = ["Ice", "Fire", "Void", "Thunder", "Earth"];
// const weapons = ["Gauntlet", "Sword", "Bow", "Spear", "Gun"];
// const rarities = ["Common", "Rare", "Epic", "Legendary", "Mythic"];

// const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// const forgeWeapon = () => {
//   const element = randomItem(elements);
//   const weapon = randomItem(weapons);
//   const rarity = randomItem(rarities);
//   const power = Math.floor(Math.random() * 100) + 1;

//   const message = `[${rarity}] ${element} ${weapon} (Power: ${power})`;
//   console.log(message);
// };

// for (let i = 0; i < 5; i++) {

//   forgeWeapon();
// }

const formerCompany = ["Nexon", "Samsung", "Weyland", "Yutani", "RollsRoyce"];
const firstName = ["Bob", "Mei", "Sakura", "Johnny", "Ahmed"];
const lastName = ["Bluebeard", "Murasaki", "Anindita", "Thobjorn", "Ling"];

const arrayRandomizer = (rayman) => {
  return rayman[Math.floor(Math.random() * rayman.length)];
};

const potentialEmployee = () => {
  const formerly = arrayRandomizer(formerCompany);
  const first = arrayRandomizer(firstName);
  const last = arrayRandomizer(lastName);
  const score = Math.floor(Math.random() * 100 + 1);
  console.log(`[${formerly}] ${first} ${last} (Score :${score})`);
};

for (let i = 0; i < 10; i++) {
  potentialEmployee();
}
