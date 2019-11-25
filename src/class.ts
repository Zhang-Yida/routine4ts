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

  // TODO: 公共，私有与受保护的修饰符
}
