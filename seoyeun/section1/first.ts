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
