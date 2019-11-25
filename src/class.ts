export default function classConsole(): void {
  // 基础写法
  class Greeter {
    greeting: string;
    constructor(msg: string) {
      this.greeting = msg;
    }

    greet(): string {
      return `Greet ${this.greeting}`;
    }
  }

  let greeter = new Greeter(`Yes`);
  console.log(greeter.greet());

  // 类继承
  class Animal {
    move(distance: number = 0) {
      console.log(`Animal moved ${distance}`);
    }
  }

  class Dog extends Animal {
    bark() {
      console.log(`Wang Wang!`);
    }
  }

  let dog = new Dog();
  dog.bark();
  dog.move(20);
  dog.bark();

  // 公共，私有与受保护的修饰符

  /**
   * ts 中，类成员默认为 public
   */
  class Human {
    public name: string;
    public constructor(name: string) {
      this.name = name;
    }
    public move(distance: number): void {
      console.log(`${this.name} has moved ${distance}`);
    }
  }
  let personA = new Human(`Yida`);
  console.log(personA.name);

  personA.move(200);

  /**
   * private 声明的类成员不能在外部访问
   */
  class Product {
    private name: string;
    constructor(name: string) {
      this.name = name;
    }

    printName(): void {
      console.log(this.name);
    }
  }
  let productA = new Product(`Soap`);
  // console.log(productA.name);
  productA.printName();

  class Food extends Product {
    public foodName: string;
    constructor(name: string) {
      super(name);
      this.foodName = name;
    }

    printFoodName(): void {
      console.log(this.foodName);
    }
  }
  let foodA = new Food(`Chicken`);
  foodA.printFoodName();

  /**
   * protected 与 private 行为相似，protected 在派生类中可访问
   */
  class Person {
    protected name: string;
    constructor(name: string) {
      this.name = name;
    }
    printPersonName(): void {
      console.log(this.name);
    }
  }

  class Employee extends Person {
    constructor(name: string) {
      super(name);
    }

    printUserName(): void {
      console.log(this.name);
    }
  }

  let employeeA = new Employee(`Zhang`);
  employeeA.printUserName();
  employeeA.printPersonName();

  /**
   * protected 可修饰 constructor，代表该类能被继承，但不能被实例化
   */
  class System {
    protected name: string;
    protected constructor(name: string) {
      this.name = `System ${name}`;
    }
  }

  class Ubuntu extends System {
    private deptName: string;
    constructor(name: string, deptName: string) {
      super(name);
      this.deptName = deptName;
    }
    printSystemLog(): void {
      console.log(`${this.name} in ${this.deptName}`);
    }
  }

  let ubuntu = new Ubuntu(`Ubuntu 14.04`, `DEPT`);
  ubuntu.printSystemLog();

  // readonly 修饰符
  /**
   * readonly 成员变量只能在声明或构造函数中被初始化
   */
  class Bug {
    readonly name: string;
    readonly numberOfLegs: number = 4;

    constructor(name: string) {
      this.name = name;
    }
  }

  let newBug = new Bug(`Nullable`);
  console.log(newBug.name, newBug.numberOfLegs);

  // 参数属性
  /**
   * 参数属性方便我们定义并初始化一个成员
   * 通过给构造函数的参数前，添加参数修饰符进行声明
   */
  class RewriteBug {
    constructor(readonly name: string) {
      this.name = name;
    }
  }

  let newRewriteBug = new RewriteBug(`TESTER`);
  console.log(newRewriteBug.name);
  // newRewriteBug.name = `new bug`
  // console.log(newRewriteBug.name);

  // TODO: 存取器
}
