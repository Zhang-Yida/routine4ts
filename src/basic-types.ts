export default function basicTypesConsole() {
  // boolean 类型
  let bool: boolean = false;
  console.log(bool);

  // number 类型
  let hexLiteral = 0xff;
  console.log(hexLiteral);

  let octalLiteral = 0o70;
  console.log(octalLiteral);

  // string 类型
  let name: string = "Gene";
  let age: number = 27;

  let sentence = `My name is ${name}, and I am ${age} years old`;

  console.log(sentence);

  // 数组
  let arr: number[] = [1, 2, 3];
  console.log(arr, arr.length);

  let arr2: Array<number> = [4, 5, 6];
  console.log(arr2);

  // 元组 - 代表已知数量和类型的数组
  let tup: [number, string];

  tup = [10, "10"];
  console.log(tup);

  /**
   * 元组复制需完全匹配对应位置的类型，及元组中的元素个数
   * - wrong
   * tup = [10, '10', 20]
   * - wrong
   * tup = ['str', '10']
   */

  // Enum 枚举
  enum Color {
    Red,
    Green,
    Blue
  }
  let c: Color = Color.Red;
  console.log(c);

  enum Color1 {
    Red = 1,
    Green,
    Blue = 4
  }
  let d: Color1 = Color1.Blue;
  console.log(d, typeof d);
  console.log(Color1[4], typeof Color1[1]);

  // Any
  let notSure: any = 4;
  notSure = false;
  console.log(notSure);

  let anyList: Array<any> = [1, "1", true];
  console.log(anyList);
  /**
   * any 与 Object 的不同请参考
   * https://stackoverflow.com/questions/18961203/any-vs-object
   */

  // Void

  /**
   * 可为 void 类型的变量赋值 undefined 或 null
   * strictNullChecks 如果为 true，则只能为 void 类型变量赋值 undefined
   */
  let voidVar: void = undefined;
  console.log(voidVar);

  function warningUser(): void {
    console.log(`This is a warning message`);
  }
  warningUser();

  // Undefined 和 Null

  /**
   * 默认情况下null和undefined是所有类型的子类型。
   * 需要注意的是，当在 tsconfig 中的 strictNullChecks 配置项设置为 true 时，
   * null 和 undefined 只能赋值给 any 类型变量和其各自类型的变量
   */
  /**
   * null 和 undefined 都可以赋值给任何类型的变量
   */
  let undefinedVar: any = undefined;
  console.log(undefinedVar);
  let nullVar: any = null;
  console.log(nullVar);

  /**
   * null 和 undefined 都可以赋值给其各自类型的变量
   */
  let undefinedType: undefined = undefined;
  let nullType: null = null;
  console.log(undefinedType, nullType);

  // Never

  // function error(params: string): never {
  //   throw new Error(params);
  // }

  // error(`error message`);

  // Object
  function create(o: object | null): void {}
  create({});
  create(null);
  /**
   * object 类型是 number、string、boolean、bigint、symbol、null、undefined
   * 以上类型之外的变量类型
   * - wrong
   * create(4);
   * create(undefined);
   */

  // 类型断言
  let someVal: any = `this is a string`;
  let numVal: any = `4`;

  // 类型断言并非是类型转换
  let strLen: number = (someVal as string).length + (numVal as number);

  console.log(strLen);
}
