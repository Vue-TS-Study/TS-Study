// const a = 5;
// const b:boolean = true;
// const c:undefined = undefined;
// const d:null = null;
// const e = "hi";
// const f:any = true;
// const g:any = 123;

// 01. 타입스크립트는 변수, 매개변수, 리턴값에 
// function add(x:number, y:number): number {return x+y};
// add(2, 1);

// function add(x: number, y:number) : number; //이 부분이 사라짐
// function add(x, y){
//     return x+y;
// }

// 02. 타입추론을 적극적으로 활용
// let aa = 123;
// aa = 'hello' as unknown as number; //앞의 타입을 강제로 다른 타입으로 변경해줌

// 03. js 변환시 사라지는 부분을 파악
// function add(x: number, y: number): number { return x + y } //매개변수 뒤에 타이핑, 리턴값 타이핑은 리턴값 앞에
// type Add = (x: number, y: number) => number;
// const add : Add = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

// 04. never 타입과 느낌표
// try {
//     const array:string[] = []; // noImplicitAny가 false일 때
//     array.push('hello'); //빈 배열일 경우 never가 나옴
//   } catch(error) {
//     error;
//   }

// const head = document.querySelector('#head')!; //undifined 아님을 보장하는 !

// 05. 원시 래퍼 타입, 템플릿 리터럴 타입, rest, 튜플
// type World = "world" | "hell";
// const a :World = 'world'; //ctrl + space를 누르면 자동완성을 함

// type Greeting = hello world
// type Greeting = `hello${World}`;
// const c:Greeting = 'helloworld'


// function rest(...args: string[]) {
//     console.log(args);//1, 2, 3
// }
// rest('1', '2', '3');

//const tuple:[string, number] = ['1', 1];
//tuple[2] = 'hello'; //배열의 범위를 벗어나 에러 발생
//tuple.push('hello'); //에러를 잡지 못함

// 06.enum, keyof, typeof
// const enum EDirection{
//     up=3,
//     down='hello',
//     left=4,
//     right=6,
// } //enum은 여러개의 변수를 하나로 묶고 싶을 때

// const oDirection = { //객체를 통한 타이핑(자바 스크립트로 남길 수 있다.)
//     up:0,
//     down:1,
//     left=2,
//     right=3,
// } as const; // as const는 그대로 쓴다는 의미

// const a = EDirection.up;
// const c = EDirection.left;

// const obj = {a:'123', b:"hi", c:'world'} as const;
// type key = keyof typeof obj; // key만 가져올 경우
// type key1 = typeof obj[keyof typeof obj]; //value만 가져올 경우

// 07 union(또는 |)과 intersection(그리고 &)
// type A = {a:string};
// const a : A = {a : 'hello'};

// interface B = {a:string}
// const b : B = {a: 'hello'};

// function add(x:string | number, y:string | number):number {return x+y} 
// union
// const result : string | number = add(1, 2)

//type A = {hello : "world"} & {zero : 'cho'};
// 모든 속성이 다 있어야 한다. 또는 이라면 여러개 중에 하나만 있으면 된다.
//const a : A = {hello:'world', zero:'cho'};

// 08. 인터페이스의 상속
// type Animal = {breath:true};
// type po = Animal & {breed:true};
// type human = po & {think:true};
// const zero: human = {breath:true, breed:true, think:true};

// interface A {
//     talk: () => void;
// }
// interface A{
//     eat: () => void;
// }
// interface A{
//     shit: () => void;
// }
// const a: A = {talk() {}, eat() {}, shit() {}, sleep() {}}
// interface A{
//     sleep:() => void;
// }

// 09. 집합(좁은 타입과 넓은 타입)
// type A = {name:string};
// type B = {age:number};
// type C = A&B;//{name:string, age:number}; //이것이 옵션이 많으므로 좁은 타입
 
// type ab = A|B;
// const c : C = {name:'sungkyun', age:22, married:false}; //inner 타입검사

