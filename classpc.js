const biome = [
  { modifier: "Gloomy", alias: "Valley", exp: 3000 },
  { modifier: "Dark", alias: "Tundra", exp: 2500 },
  { modifier: "Scorching", alias: "Dessert", exp: 3500 },
];

const bio = biome.map(({ modifier, alias, exp }) => {
  const secret = exp / 500;
  return { modifier, alias, exp, secret };
});
console.log(bio);
