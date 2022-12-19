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

//타입 커스터마이징
//타입을 정교하게 만들 떄 쓰임
type World = "world" | "bad World";
const worldy: World = "world";
//string이면 추천이 안되니까
type hello = `hello ${World}`;
const greeting: hello = "hello bad World";

//rest
function rest(a: string, ...args: string[]) {
  console.log(a, args); //1,[2,3]
}
rest("1", "2", "3");

const tuple3: [string, number] = ["1", 1];
//이건 에러
// tuple2[2]="error"

//이건 못 막아줌
tuple2.push("hello");

//read only용으로, number가 아닌 각각의 숫자로 타입이 적용
const ODirection = {
  up: 0,
  down: 1,
} as const;

//읽기전용 속성이므로 에러
// ODirection.down =2

//자바스크립트 값(여기서는 ODirection의 요소들)을 타입으로 쓰고 싶을 때 typeof 쓰고
//그 타입들 중 key들을 쓰고 싶을 때 keyof
type Direction = typeof ODirection[keyof typeof ODirection];

//만약 객체 자체를 타입으로 쓰는 거면 as const 로 고정되어있기 때문에 이렇게만 정의가능
type Direction2 = typeof ODirection;
const aaa: Direction2 = { up: 0, down: 1 };

//객체의 키 들만 가져오고 싶을 때는 이렇게
type Keys = keyof typeof ODirection;
const key: Keys = "down";

//union
// function union(x: string | number, y: string | number): string | number {
//   return x+y;
// }
//const result:string|number = add(1,2) result가 string이 될 수도 있음.
//계속 문제가 생김 charAt 같은 것도.

//intersection
//모든 속성이 다 있어야 한다
type inter = { hello: "world" } & { world: "hello" };
const intersection: inter = { hello: "world", world: "hello" };

//모든 속성 중 최소 하나만 있으면 됨
type union = { hello: "world" } | { world: "hello" };
const unionn: union = { hello: "world", world: "hello" };

//intersection 활용하기 like 상속
type Animal = { breath: true };
type Mammal = Animal & { breed: true };
type Human = Mammal & { think: true };

const seoyeun: Human = { breath: true, breed: true, think: true };

//interface에서의 확장
interface A {
  breath: true;
}
interface B extends A {
  breed: true;
}

//같은 interface를 입력하면 합쳐짐 - 라이브러리에서 많이 쓰이는 이유
interface C extends Human {
  laugh: true;
}
interface C {
  sleep: true;
}

//집합으로 생각 -> 더 넓은 게 더 좁은 값의 type으로는 들어올 수 있음
//잉여 속성 검사 때문에 객체 새로운 값 추가가 안되는 거였음.
//에러
// const mun:Human={breath:true, breed:true,think:true,sleep:true}

//잉여 속성 검사 못 하게 미리 변수 입력해두고 대입
//as const 로 각각 타입을 boolean이 아닌 true인 타입 Human에 들어갈 수 있게 as const 설정
const munCopy = {
  breath: true,
  breed: true,
  think: true,
  sleep: true,
} as const;
const mun: Human = munCopy;

//void 타입

//void로 선언 시-> 리턴 값이 없다.
//리턴 값이 존재하면 안 됨
function voidFunc(): void {
  return undefined; //null은 안됨
}

//매개변수로 선언시-> 리턴 값을 사용하지 않겠다
//리턴 값이 존재해도 됨
function paramsVoid(callback: () => void): void {}
paramsVoid(() => {
  return 3;
});

//메소드로 void 선언 시 -> 리턴 값을 사용하지 않겠다
//리턴 값이 존재해도 됨
interface Ivoid {
  talk: () => void;
}
const voidFunc2: Ivoid = {
  talk() {
    return "abc";
  },
};

//매개변수의 리턴값타입이 void라고 지정되어있을 때, 실제로 return을 사용하더라도 에러 X, 다만 사용하지 않음
//undefined라고 했을 때는 error number를 리턴하기 때문
declare function forEach(arr: number[], callback: (el: number) => void): void;
let target: number[] = [];
forEach([1, 2, 3], (el) => {
  return target.push(el);
});

//unknown 과 any
//unknown일 때 빼고는 as 쓰지말아야함.
const any: any = voidFunc2.talk();
//포기, 오류 없음 일반 JS와 같음
any.method();

const notNow: unknown = voidFunc2.talk();
(notNow as Ivoid).talk();

//타입 좁히기(타입가드)
//타입 검사 및 배열 검사
function dualType(x: string | number | number[]) {
  if (typeof x === "number") {
    x.toFixed(1);
  }
  if (typeof x === "string") {
    x.charAt(3);
  }
  if (Array.isArray(x)) {
    x.push(23);
  }
  // if(typeof x ==="boolean"){
  //   x.toString()
  // }
}
dualType(123);
dualType("123");

// TS에서 클래스 활용하기
class A {
  aaa() {}
}
class B {
  bbb() {}
}

//클래스 구별 해내기
function classParam(param: A | B) {
  //왜 에러 안나지?
  // param.aaa();
  if (param instanceof B) {
    param.bbb();
  }
}
classParam(new A());
classParam(new B());

//안에 있는 속성 값및 키로 구별하기(객체)
type BB = { type: "B"; say: "hi" };
type CC = { type: "C"; show: "dance"; love: true };
type DD = { type: "D"; sing: "la" };

function typeCheck(param: BB | CC | DD) {
  if (param.type === "B") {
    param.say;
  }
  if ("show" in param) {
    param.love;
  }
}
//리턴 값에 is 가 있으면 커스텀 판별 함수
function whatLetter(letter: BB | CC | DD): letter is BB {
  if ((letter as BB).say) {
    return true;
  } else {
    return false;
  }
}
//true를 리턴할 경우, 매개변수는 지정해준 BB 를 가지게 된다.
//return param is BB
function letter(param: BB | CC | DD) {
  if (whatLetter(param)) {
    param.say;
  } else {
    //CC|DD의 타입을 갖는다
    param.type;
  }
}

const bb: BB = { type: "B", say: "hi" };
//여기서의 타입은 boolean으로 나온다.
const abc = whatLetter(bb);

// //리턴 값에 is 가 있으면 커스텀 판별 함수
// function whatLetter(letter){
//   if (letter.say) {
//     return true;
//   } else {
//     return false;
//   }
// }

//promise settled
//promise의 상태 변화 : pending->settled(resolved,rejected)
//resolved의 경우 then 속성이 가능해지지만
//rejected의 경우 catch()만 가능

//새로운 타입
//원래 객체 타입 :object but object 지양, interface, type, class
//Object,{}-> null과 undefined를 제외한 모든 타입을 가리킴
//unknown ={}|null|undefined
const anonymous: unknown = "";
if (anonymous) {
  anonymous; //{}로 타입이 뜨게 됨
} else {
  anonymous; //unknown이 나오게 됨
}

//readonly 앞에 붙여주기만 하면
//indexed signature
//어떤 키나 값이든 모두 문자열이었으면
type AA = { [key: string]: string };
const aaaa: AA = { aaa: "" };

//맵드 타입스
type thing = "Human" | "Mammal" | "Animal";
type whatThing = { [key in thing]: string };
//다 들어가야 됨
const Munseoyeun: whatThing = { Human: "d", Mammal: "", Animal: "" };

//class다루기
const instanceA: A = new A();
const classA: typeof A = A;

//implements로 구현하기 : 잘 활용되지는 않음
interface classMom {
  //추상
  readonly a: string;
  b: string;
}
class son implements classMom {
  // 구현 interface 없이 쓰면 private, protected 다 쓸 수 있음
  a: string = "";
  //interface에서 지정해준 타입과 다른 타입 입력시 에러
  // b = 123;
  b: string = "";
}

//private, protected : 상속 받은 애들까지만 접근 가능, instance는 둘다 안됨
//abstract도 쓸 수 있음 -> interface 처럼

//옵셔널
function abcd(...args: number[]) {} //전부 다 갖고 싶을 때 (개수 제한 없이)
function abcde(a?: string) {} //개수 정해져있는데 몇개는 없어도 되면

//제네릭
//이미지
//이 경우에는 어떻게 될까?
//나중에 정할래 타입은 ~ 우선 변수처럼 !
function genericAdd<T extends string | number, K extends string | number>(
  x: T,
  y: K
): T | K {
  return x + y;
}
const what = genericAdd(1, 2);
const whattt = genericAdd("1", "2");

// function add<T extends string>(x: T, y: T): T { return x + y }
// add('1', '2')
