export default function interfaceConsole(): void {
  /**
   * 接口的作用是结构性的类型检查，duck typing
   */

  interface LabelledValue {
    label: string;
  }

  function printLabel(labelledObj: LabelledValue): void {
    console.log(labelledObj.label);
  }

  printLabel({ label: `ZhangYida` });

  // 可选属性
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function getSquareInfo(
    squareConfig: SquareConfig
  ): { color: string; area: number } {
    let baseConfig = { color: "white", area: 100 };

    if (squareConfig.color) baseConfig.color = squareConfig.color;

    if (squareConfig.width) baseConfig.area = squareConfig.width ^ 2;

    return baseConfig;
  }

  let { color, area } = getSquareInfo({ color: "black" });
  console.log(color);
  console.log(area);

  // 只读属性
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  /**
   * 只读属性只能在第一次赋值中生效
   */
  let p1: Point = { x: 100, y: 200 };
  console.log(p1);

  /**
   * ReadonlyArray 只读数组
   */
  let arr: ReadonlyArray<number>;
  arr = [1, 2, 3];
  console.log(arr);

  // 额外的属性检查
  console.log(getSquareInfo({ colour: "test" } as SquareConfig));

  // 可以使用索引签名的形式
  interface Tester {
    name: string;
    age?: number;
    [propName: string]: any;
  }

  function interviewTest(tester: Tester) {
    console.log(tester.name + tester.age);
  }
  console.log(interviewTest({ name: `yida`, age: 28 }));

  // 函数类型

  interface Func {
    (paramA: string, paramB: number): boolean;
  }
  let func: Func;
  func = function testFunc(_, param2) {
    return param2 > 0;
  };

  console.log(func(``, 10));

  // TODO: 可索引类型 等
}
