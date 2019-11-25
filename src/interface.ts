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

  // 可索引类型

  /**
   * 支持两种索引签名类型：字符串和数字
   * TODO: 暂时不知道索引类型用来做什么，后续完善
   */
  interface StringArr {
    [index: number]: string;
    name: string;
    age: number;
  }

  let strArr: StringArr = { name: `Zhang`, age: 20 };
  console.log(strArr[0]);

  // 类类型
  /**
   * 接口实现
   */

  interface IClock {
    currentTime: Date;
    setTime(d: Date): void;
  }

  class Clock implements IClock {
    setTime(d: Date): void {
      this.currentTime = d;
    }
    currentTime: Date;
    constructor(h: string) {}
  }

  let clock = new Clock(`Test`);
  clock.setTime(new Date());
  console.log(clock.currentTime);

  /**
   * 类静态部分与实例部分的区别
   * 当类实现接口时，只有实例部分能够被 Check，构造函数是静态部分，因此不会被 Check
   */

  interface INewClockCtor {
    new (hour: number, min: number): INewClock;
  }

  interface INewClock {
    tick(): void;
  }

  function createClock(ctor: INewClockCtor, h: number, m: number): INewClock {
    return new ctor(h, m);
  }

  class DigitalClock implements INewClock {
    constructor(h: number, m: number) {}
    tick(): void {
      console.log(`Beep`);
    }
  }
  let digital = createClock(DigitalClock, 10, 20);
  digital.tick();

  /**
   * 接口继承
   */
  interface Shape {
    color: string;
  }
  interface Square extends Shape {
    sideLength: number;
  }

  /** 类型断言的两种写法 */
  let square = {} as Square;
  let newSquare = <Square>{};
  square.color = `red`;
  square.sideLength = 200;
  console.log(square);
  console.log(newSquare);

  // 接口继承类

  /**
   * 私有成员也会被接口继承
   */
  class Control {
    // private state: any;
  }
  interface SelectableControl extends Control {
    select(): void;
  }
  class Button extends Control implements SelectableControl {
    select() {
      console.log(`Button`);
    }
  }
  // class Image implements SelectableControl {
  //   select(): void {}
  // }

  let button = new Button();
  console.log(button.select());

  // let img = new Image();
  // console.log(img.select());
}
