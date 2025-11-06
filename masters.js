const modifier = ["Cozy", "Humid", "Concrete", "Natural", "Artificial"];
const location = ["River", "Lake", "Forest", "Mountain", "Valley"];

const randomization = (raygun) => {
  return raygun[Math.floor(Math.random() * raygun.length)];
};

randomization(location)