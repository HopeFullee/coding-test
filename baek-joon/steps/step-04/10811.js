// https://www.acmicpc.net/problem/10811

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const basket = [...Array(N)].map((_, idx) => idx + 1);

input.forEach((tc) => {
  let [i, j] = tc.split(" ").map(Number);

  const reversed = basket.slice(i - 1, j).reverse();

  reversed.forEach((num) => {
    basket[i - 1] = num;
    i++;
  });
});

console.log(basket.join(" "));
