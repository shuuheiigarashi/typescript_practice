export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age });   
}

debugProfile("shuuhei", 28);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["hogehoge", 70];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
)
    => any ? P : never;
