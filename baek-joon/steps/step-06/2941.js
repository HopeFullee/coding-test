// https://www.acmicpc.net/problem/2941

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

/*
  정규식 ?꼼?수? 로 풀이한 방법 
  문제는 length 를 구할때 항상 +1 로 나오기때문에 -1 을 해줘야
  실제 크로아티아 글의 길이를 알아낼 수 있음.

  P.S - 정규식을 완전히 이해 하지 못한 상태에서 얻어걸린 꼼수 방법이라 맘에 안듬. 
*/

const breakPoint = /c=|c-|dz=|d-|lj|nj|s=|z=|[a-z]/;
const letterCount = input.split(breakPoint).length - 1;

console.log(letterCount);

/*
  출처: https://datalabbit.tistory.com/142
  
  블로그 참고로 훨신 이해하기 쉬운 replace 방식으로 문제 해결.

  변명 - 필자는 특수 크로아티아 문자들로 c=|c-|dz=|d-|lj|nj|s=|z=
         filter 함수를 걸어 갯수를 파악하려 했으나 input의 특성상 배열이 아닌 문자열 그대로
         전달 받기 때문에 filter를 써봤자 [...input]의 글자 단위 한개씩 밖에 접근이 안돼어 사용 할 수 없었음.
  
  해결 - replaceAll 함수는 문자열을 전체 탐색하여 특정 부분을 바꿀 수 있기에
         크로아티아 특수 문자들을 한개의 문자 ex('dz=' -> '*') 로 변경하여 단어의 갯수를 구할 수 있었음.

         replace 함수는 문자열 전체가 아닌 처음으로 찾아낸 특정 부분 만을 바꿈.
         고로 동일한 크로아티아 단어가 연속으로 나올시엔 replace가 아닌 replaceAll 이 적합함.  

  P.S - replace 함수 기능을 알고 있었지만 실사용 경험 부족으로 잊고 있었음.. 
        고로 많은 양의 알고리즘 학습으로 다양한 prototype 함수를 사용하고 손과 머리에 익히는게 포인트.
*/

const croatiaRegex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;

console.log(input.replaceAll(croatiaRegex, "*").length);
