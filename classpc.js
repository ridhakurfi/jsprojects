class Hero {
  constructor(alias, title) {
    this.alias = alias;
    this.title = title;
  }
  describe() {
    return `${this.title} ${this.alias}`;
  }
}

const aliases = ["Wizard", "Magus", "Warlock", "Knight", "Duelist"];
const titles = ["Grand", "Chaos", "Holy", "Brave", "Undefeated"];

const heroGenerator = () => {
  const party = [];
  for (let i = 0; i < 5; i++) {
    party.push(new Hero(aliases[i], titles[i]));
  }
  return party;
};

for (const hg of heroGenerator()) {
  console.log(hg.describe());
}
