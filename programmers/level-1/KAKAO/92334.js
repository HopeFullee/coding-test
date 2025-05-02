/*
  https://school.programmers.co.kr/learn/courses/30/lessons/92334
  2022 KAKAO BLIND RECRUITMENT
  92334 - 신고 결과 받기 
*/

/*
  구현하는대만 족히 40~50분은 걸려 solve를 받기는 했다..
  아직까진 현재 수준으로는 성능을 고려한 풀이 방식을 모르겠지만
  확실한건 성능이 매우 구려 보인다는 사실은 본능적으로 알수 있다..

  뭔가 모를 찝찝함이 많이 아쉽다..
  
  TODO - 고수님들 풀이를 보며 학습하기, 본인의 똥코드에 실망하기
*/

function solution(id_list, report, k) {
  const userInfo = {};
  const reply = Array(id_list.length).fill(0);

  for (let i = 0; i < id_list.length; i++) {
    userInfo[id_list[i]] = {
      count: 0,
      reporters: [],
    };
  }

  report.forEach((n) => {
    const [reporter, reported] = n.split(" ");

    if (!userInfo[reported].reporters.includes(reporter)) {
      userInfo[reported].count++;
      userInfo[reported].reporters = [
        ...userInfo[reported].reporters,
        reporter,
      ];
    }
  });

  Object.entries(userInfo).forEach(([_, info, idx]) => {
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
