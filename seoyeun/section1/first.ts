//타입 추론 활용하기
let str = ""; //이건 string으로 보나,
const str2 = "hello"; //재 할당할 수 없는 const는 hello로 타입 추론. string으로 다시 써주면 오히려 타입의 범위를 늘려주는 행위.

//매개변수는 꼭 써줘야한다.
// function func(x: number, y: number) {
//   return x + y;
// }
//a의 타입은 any가 됨.
// const val = func(3, 4);

//객체
const obj = { x: "hello", y: "hi" };

//배열
//얘도 string|number
const arr = ["hi", 3];

//튜플: 개수 고정
const tuple: [number, number, string] = [2, 2, "hi"];
//string|number로 타입 추론을 함. 좁혀주기 위해서는 위 처럼 타입을 쓰는 게 현명
const tuple2 = [2, 2, "hi"];

//사라지는 부분
// function ts(x: number, y: number): number;
// function ts(x, y) {
//   return x + y;
// }

//as 도 사라짐
let aa = 123;
aa = "hello" as unknown as number;

//그냥 하면 never 안 뜨긴 함.
// const bb: never[] = [];
// bb.push("");

//ELEMENT와 같은 형식을 알려주면서 속성들 및 기능 정의, 오류 수정 도와줌
//!는 뒤에 |null을 없애줌 -> 비추천함
// const head = document.querySelector("head")!;
const head = document.querySelector("head");
if (head) {
  head.innerHTML = "hello";
}
