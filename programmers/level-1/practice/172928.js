/*
  https://school.programmers.co.kr/learn/courses/30/lessons/172928
  연습문제 - 공원 산책
*/

function solution(park, routes) {
  const height = park.length - 1;
  const width = park[0].length - 1;

  let yPos = park.findIndex((str) => str.includes("S"));
  let xPos = park[yPos].indexOf("S");

  const currPos = {
    x: xPos,
    y: yPos,
  };

  for (const [op, _, n] of routes) {
    const newPos = {
      x: currPos.x,
      y: currPos.y,
    };

    if (op === "W" || op === "E") {
      newPos.x += op === "W" ? -n : +n;
    } else {
      newPos.y += op === "N" ? -n : +n;
    }

    if (newPos.x < 0 || newPos.x > width || newPos.y < 0 || newPos.y > height)
      continue;

    const axis = newPos.x === currPos.x ? "y" : "x";
    const dir = newPos[axis] < currPos[axis] ? "backward" : "forward";

    let hasObsticle = false;
    let i = currPos[axis];

    // 목적 도달점 까지 포함하기 위해 -1 || 1 을 더함.
    while (i !== newPos[axis] + (dir === "backward" ? -1 : 1)) {
      if (axis === "x") {
        if (park[currPos.y][i] === "X") {
          hasObsticle = true;
          break;
        }
      } else {
        if (park[i][currPos.x] === "X") {
          hasObsticle = true;
          break;
        }
      }

      dir === "backward" ? i-- : i++;
    }

    if (!hasObsticle) {
      currPos.x = newPos.x;
      currPos.y = newPos.y;
    }
  }

  return [currPos.y, currPos.x];
}

const park = ["SOOXO", "OOOXO", "OXOOO", "XOOOO"];
const routes = ["E 2", "S 2", "W 2", "S 1", "W 1"];

console.log(solution(park, routes));
