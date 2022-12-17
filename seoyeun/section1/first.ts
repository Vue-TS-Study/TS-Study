const c: string = "hello";
const d: number = 5;
const e: boolean = true;
const f: undefined = undefined;
const g: null = null;

//고정된 값: 타입은 최대한 정확하게 잡기 위해
const i: true = true;
const num: 5 = 5;

// 타입스크립트의 주 목적은 any를 없애는 것
const h: any = true;

//매개변수와 리턴 값
function add(x: number, y: number): number {
  return x + y;
}

//JS로 변환 가능해야 함으로, 타입 부분을 지워도 말이 되는 JS 코드여야 함.
const minus: (x: number, y: number) => number = (x, y) => {
  return x - y;
};

//type alias
type Add = (x: number, y: number) => number;

interface Minus {
  (x: number, y: number): number;
}
const multiply: Add = (a, b) => {
  return a * b;
};

//객체
const obj: { x: string; y: string } = { x: "hello", y: "hi" };

//배열
const arr: string[] = ["hi", "hello"];
const arr2: Array<number> = [2, 3];

//튜플: 개수 고정
const tuple: [number, number, string] = [2, 2, "hi"];
