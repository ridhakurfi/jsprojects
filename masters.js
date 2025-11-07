const modifier = ["Cozy", "Humid", "Concrete", "Natural", "Artificial"];
const location = ["River", "Lake", "Forest", "Mountain", "Valley"];

const randomizer = (rayearth) => {
  return rayearth[Math.floor(Math.random() * rayearth.length)];
};

const vacation = () => {
  console.log(`${randomizer(modifier)} ${randomizer(location)}`);
};

for (let i = 0; i < 5; i++) {
  vacation();
}

let number = Math.floor(Math.random() * 100); // random 0–99
console.log("Number:", number);

if (number % 2 === 0) {
  console.log("It's even");
} else {
  console.log("It's odd");
}