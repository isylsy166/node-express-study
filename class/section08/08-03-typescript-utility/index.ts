interface IProfile {
  name: string;
  age: number;
  school: string;
  hobby?: string;
}

// 1. Partial 타입 : 부분을 의미. 있어도 되고 없어도 되는 전부 다 물음표 붇이기 (마우스 올려서 확인해보자)
type aaa = Partial<IProfile>;

// 2. Required 타입 : 전체 다 필수 요소로 만들기
type bbb = Required<IProfile>;

// 3. Pick 타입 : name과 age만 있는 타입을 만들고 싶음 (골라오고 싶음)
type ccc = Pick<IProfile, "name" | "age">;

// 4. Omit 타입 : school 타입을 없애고 싶음
type ddd = Omit<IProfile, "school">;

// 5. Record 타입 (Union을 먼저 알아야 됨)
type eee = "철수" | "영희" | "훈이"; // Union 타입 : string 타입 보다 안전하다

let child1: eee = "철수"; // 철수, 영희, 훈이만 됨
let child2: string = "사과";

type fff = Record<eee, IProfile>; // Record 타입 - key : value로 만들 수 있다

//
//
// 6. 객체의 키들로 Union타입 만들기
type ggg = keyof IProfile; // "name" | "age" | "school" | "hobby"
let myprofile: ggg = "age";

// 7. type 과 Interface의 차이
// interface는 같은 이름의 인터페이스를 만들면 두 개가 합쳐진다 : 선언 병합 가능

interface IProfile {
  edu: string;
}

// 배운거 응용해보기
let student1: Partial<IProfile> = {
  edu: "영어",
};
