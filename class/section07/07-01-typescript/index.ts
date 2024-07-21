let aaa:(number|string) = "hello";

let bbb: number|string = 10; //괄호 생략가능

let ccc: boolean = true;
ccc = false;

let arr: (string|number)[] = ["고양이", "강아지", 10];

//객체타입
interface IProfile{
    name: string,
    age: number | string,
    school: string,
    hobby?: string
}

const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "호호초등학교",
}

profile.name = "훈이";
profile.hobby = "축구";

//함수타입 : 함수의 매개변수는 타입 추론이 불가능하다
function add(num1:number, num2:number, unit:string): string{

    return num1 + num2 + unit
}

const result = add(10, 20, "원");
add(10, 20, "원");


const add2 = (num1:number, num2:number, unit:string): string => {
    return num1 + num2 + unit
}