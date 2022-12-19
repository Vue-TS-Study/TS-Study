// 1. forEach, map 제네릭 분석
// interface Array<T>{
//     forEach(callbackfn: (value: T, index:number, array: T[])=> void, thisArg?:any):void; //콜백함수
// }
// [1, 2, 3].forEach((item)=>{console.log(item);}); // 콘솔에 1, 2, 3
// ['1', '2', '3'].forEach((item)=>{console.log(item);});
// [123, 'hello', true].forEach((item)=>{console.log(item);}); // 제너릭 덕분에 다양한 타입이 제대로 추론됨

import { isTemplateSpan } from "typescript";

// const a : Array<number> = [1, 2, 3]; // 제너릭을 넘버로 선언
//a.forEach((value)=>{console.log(value);}); //제네릭을 사용해야 타입을 일관성 있게 맞출수 있다.


// interface Array<T>{
//     forEach(callbackfn: (value: T, index:number, array: T[])=> void, thisArg?:any):void; //콜백함수
//     map<U>(callbackfn:(value:number, index:number, array:number[])=>string, thisArg?:any):string[];
// }
// const strings = [1, 2, 3].map((item)=> item.toString()); //'1', '2', '3' string[]

//2. filter 제너릭 분석
// interface Array<T>{
//     forEach(callbackfn: (value: T, index:number, array: T[])=> void, thisArg?:any):void; //콜백함수
//     map<U>(callbackfn:(value:number, index:number, array:number[])=>string, thisArg?:any):string[];
//     filter<S extends string | number>(predicate:(value:T, index:number, array:T[])=>value is S, thisArg?:any):string|number[];
//     filter(predicate:(value:T, index:number, array:T[])=>unknown, thisArg?:any):T[];
// }

// const predicate = (value:string|number): value is string => typeof value === 'string';
// const filtered = [1,'2', 3, 4, 5].filter(predicate);

// 3. forEach 타입 직접 만들기
// interface Arr<T>{
//     forEach(callback:(item:T)=> void):void;
// }

// const a : Arr<number> = [1, 2, 3];
// a.forEach((item)=>{
//     console.log(item);
//     item.toFixed(1); // 코드가 복잡해질 경우 에러 발생
// });
// a.forEach((item)=>{
//     console.log(item);
//     return 3;
// });
// const b : Arr<string> = ['1', '2', '3'];
// b.forEach((item)=>{
//     console.log(item);
//     item.charAt(3); // 코드가 복잡해질 경우 에러 발생
// });
// b.forEach((item)=>{
//     console.log(item);
//     return 3;
// });

// 4. map타입 직접 만들기 + filter
// interface Arr<T>{
//     forEach(callback:(item:T, index:number)=> void):void;
//     map<S>(callback:(v:T, index:number)=>S):S[]; //결과물은 T의 배열
//     filter<S extends T>(callback: (v:T)=>v is S):S[]; // 다른타입으로 제너릭을 받아오면 다른 타입을 사용
// }
// const a: Arr<number> = [1 , 2, 3];
// const b = a.map((v, i)=> v+1);
// const c = a.map((v, i)=> v.toString()); //string array
// const d = a.map((v, i)=>v%2===0);

// const e : Arr<string> = ['1', '2', '3'];
// const f = e.map((v)=>+v);
// const a:Arr<number> = [1, 2, 3];
// const b = a.filter((v) : v is number => v%2 === 0); //결과는 넘버의 배열

// const c : Arr<number|string> = [1, '2', 3, '4'];
// const d = c.filter((v) : v is string =>typeof v === 'string');

// 5. 공변성과 반공변성
function a(x:string|number):number{ // 매개변수는 리턴타입과 반대다.
    return 0;
}

type B = (x:string) => number|string; // 리턴타입은 더 넓은데로 대입이 가능하다.
const b : B = a;
