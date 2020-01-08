export default function genericsConsole(): void {
  function identity(arg: number): number {
    return arg;
  }
  console.log(identity(1));

  // 输入与输出的类型不确定，即使已明确了解输入的具体类型
  function identityAny(arg: any): any {
    return arg;
  }
  console.log(identityAny("test"));

  // 泛型定义
  function identityT<T>(arg: T): T {
    return arg;
  }
  // 显式定义泛型
  console.log(typeof identityT<string>("1"));
  // 类型推论
  console.log(typeof identityT(1));

  /**
   * 泛型变量
   */
  function identityVar<T>(arg: T[]): T[] {
    //
    console.log(arg.length);

    return arg;
  }
  console.log(identityVar([1, 2, 3, "3"]));

  /**
   * 泛型类型
   */
  // 类型定义
  let myIdentity: <T>(arg: T) => T = identityT;
  console.log(myIdentity(1));

  let myIdentity1: { <T>(arg: T): T } = identityT;
  console.log(myIdentity1(`Test`));

  /**
   * 泛型接口
   */
  interface GenericInterfaceFn {
    <T>(arg: T): T;
  }
  let genericInterfaceTest: GenericInterfaceFn = identityT;
  console.log(genericInterfaceTest(`generic interface test`));

  // 如果初始化明确泛型类型，也可以如下定义
  interface GenericInterfaceFn1<T> {
    (arg: T): T;
  }
  let genericInterfaceTest1: GenericInterfaceFn1<number> = identityT;
  console.log(genericInterfaceTest1(123));

  /**
   * 泛型类
   */
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 10;
  myGenericNumber.add = (x, y) => x + y;

  console.log(myGenericNumber);

  /**
   * 泛型约束
   */
  // 此前例子中，传递的泛型参数无 length 属性，导致报错，可以通过 extends 实现参数约束
  interface Lengthwise {
    length: number;
  }

  function LengthGenericTest<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);

    return arg;
  }
  // wrong
  // console.log(LengthGenericTest(3));
  console.log(LengthGenericTest(`test`));

  // 泛型约束中使用类型参数
  // keyof 关键字
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3 };
  console.log(getProperty(x, "a"));
  // wrong
  // console.log(getProperty(x, "d"));

  // 泛型中使用类类型
  // TODO: I do not know how to use it
  // function clzGeneric<T>(params: { new (): T }): T {
  //   return new params();
  // }

  // because of I didn't understand this explain, so the example doesn't typed.
  // and I will try to understand this grammar
}
