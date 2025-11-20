class Hero {
  constructor(job, weapon, exp) {
    this.job = job;
    this.weapon = weapon;
    this.exp = exp;
  }
  changeWeapon(newWeapon) {
    this.weapon = newWeapon;
  }
  describe() {
    return `${this.job} ${this.weapon} ${this.exp}`;
  }
}

class Knight extends Hero {
  constructor(weapon, exp) {
    super("Paladin", weapon, exp);
  }
}

class Monk extends Hero {
  constructor(weapon, exp) {
    super("Fighter", weapon, exp);
  }
}

let teamu = [new Knight("Greatsword", 5000), new Monk("Knuckles", 4500)];
for (const sq of teamu) {
  console.log(sq.describe());
}
