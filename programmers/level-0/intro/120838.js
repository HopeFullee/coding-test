/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120838
  코딩테스트 입문 - 모스부호 (1)
*/

function solution(letter) {
  morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  return letter.split(" ").reduce((acc, str) => {
    return acc + morse[str];
  }, "");
}

const letter = ".... . .-.. .-.. ---";

console.log(solution(letter));
