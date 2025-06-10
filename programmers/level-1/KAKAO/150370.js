/*
  https://school.programmers.co.kr/learn/courses/30/lessons/150370
  2023 KAKAO BLIND RECRUITMENT - 개인정보 수집 유효기간
*/

function solution(today, terms, privacies) {
  const ans = [];
  const termDict = Object.fromEntries(terms.map((v) => v.split(" ")));

  privacies.forEach((p, idx) => {
    const [signDate, type] = p.split(" ");

    const curDate = new Date(today);
    const endDate = new Date(signDate);
    endDate.setMonth(endDate.getMonth() + Number(termDict[type]));

    if (curDate >= endDate) {
      ans.push(idx + 1);
    }
  });

  return ans;
}

const today = "2009.12.28";
const terms = ["A 13"];
const privacies = ["2008.11.03 A"];

console.log(solution(today, terms, privacies));
