//www.acmicpc.net/problem/1620

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = [
  "26 5",
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Caterpie",
  "Metapod",
  "Butterfree",
  "Weedle",
  "Kakuna",
  "Beedrill",
  "Pidgey",
  "Pidgeotto",
  "Pidgeot",
  "Rattata",
  "Raticate",
  "Spearow",
  "Fearow",
  "Ekans",
  "Arbok",
  "Pikachu",
  "Raichu",
  "25",
  "Raichu",
  "3",
  "Pidgey",
  "Kakuna",
];

const [n, _] = input.shift().split(" ").map(Number);

const obj = input.splice(0, n).reduce((acc, val, idx) => {
  acc[val] = idx + 1;
  acc[idx + 1] = val;
  return acc;
}, {});

input.forEach((m) => {
  console.log(obj[m]);
});
