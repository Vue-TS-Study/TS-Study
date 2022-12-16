const a = 5;
const b:boolean = true;
const c:undefined = undefined;
const d:null = null;
const e = "hi";
const f:any = true;
const g:any = 123;

function add(x:number, y:number): number {return x+y};
add(2, 1);

//function add(x: number, y: number): number { return x + y } //매개변수 뒤에 타이핑, 리턴값 타이핑은 리턴값 앞에
// type Add = (x: number, y: number) => number;
// const add : Add = (x, y) => x + y;
// const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };