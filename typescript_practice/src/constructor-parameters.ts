export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person("taro", 28);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ["shuuhei", 28];
const shuuhei = new Person(...profile);
console.log(shuuhei);

type MyConstructorParameters<
    T extends new (...args: any) => any
    > = T extends new (...args: infer P) => any ? P : never;
