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
  
   
}
