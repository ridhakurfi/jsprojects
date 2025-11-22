class Fish {
  constructor(alias, fins, location) {
    this.alias = alias;
    this.fins = fins;
    this.location = location;
  }
  describe() {
    return `${this.alias} ${this.fins} ${this.location}`;
  }
}

class Gold extends Fish {
  constructor(fins, location) {
    super("Goldfish", fins, location);
  }
}

class Dolphin extends Fish {
  constructor(fins, location) {
    super("Dorufin", fins, location);
  }
}

const goldie = new Gold(4, "Brazil");
const dolphie = new Dolphin(2, "Londinium");

const petsies = [goldie, dolphie];

for (const pet of petsies) {
  console.log(pet.describe());
}
