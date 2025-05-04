/*
  https://school.programmers.co.kr/learn/courses/30/lessons/92334
  2022 KAKAO BLIND RECRUITMENT - 신고 결과 받기 
*/

/*
  구현하는대만 족히 40~50분은 걸려 solve를 받기는 했다..
  아직까진 현재 수준으로는 성능을 고려한 풀이 방식을 모르겠지만
  확실한건 성능이 매우 구려 보인다는 사실은 본능적으로 알수 있다..

  뭔가 모를 찝찝함이 많이 아쉽다..
  
  TODO - 고수님들 풀이를 보며 학습하기, 본인의 똥코드에 실망하기

  25/05/02 - 23:30
  첫 solve 이후 10분 정도 투자해서 리팩토링을 해보았다
  나름 스스로 만족할만한 결과를 얻은거같다! 
*/

function solution(id_list, report, k) {
  report = [...new Set(report)].map((v) => v.split(" "));
  const reportDict = {};
  const reply = Array(id_list.length).fill(0);

  for (const [reporter, reported] of report) {
    reportDict[reported] = {
      count: reportDict[reported]?.count + 1 || 1,
      reporters: [...(reportDict[reported]?.reporters || ""), reporter],
    };
  }

  Object.entries(reportDict).forEach(([_, info]) => {
    const { count, reporters } = info;

    if (count >= k) {
      reporters.forEach((reporter) => {
        const reporterIdx = id_list.indexOf(reporter);
        reply[reporterIdx]++;
      });
    }
  });

  return reply;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

console.log(solution(id_list, report, k));

// SET, MAP을 활용한 모범 답안
function solution2(id_list, report, k) {
  report = [...new Set(report)].map((s) => s.split(" "));
  const reportCount = new Map();
  const reportReply = new Map();

  for (const [_, reported] of report) {
    reportCount.set(reported, reportCount.get(reported) + 1 || 1);
  }

  for (const [reporter, reported] of report) {
    if (reportCount.get(reported) >= k) {
      reportReply.set(reporter, reportReply.get(reporter) + 1 || 1);
    }
  }

  const answer = id_list.map((user) => reportReply.get(user) ?? 0);

  return answer;
}

console.log(solution2(id_list, report, k));
