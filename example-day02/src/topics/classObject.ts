export const classObject = () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    greet(): string {
      return `Hello, my name is ${this.name}`;
    }
  }

  const person1 = new Person("John");
  // console.log(person1.greet()); // Hello, my name is John

  // asscess modifier
  class Car {
    private speed: number = 0;

    constructor(brand: string) {}

    accerate(amount: number): void {
      this.speed += amount;
      //   console.log(`Accelerating to ${this.speed} km/h`);
    }
  }

  const myCar = new Car("Toyota");
  myCar.accerate(50);

  class Animal {
    protected name: string;

    constructor(name: string) {
      this.name = name;
    }

    makeSound(): void {
      console.log("some sound");
    }
  }

  class Dog extends Animal {
    private age: number;

    constructor(name: string, age: number) {
      super(name);
      this.age = age;
    }
    makeSound(): void {
      console.log("Woof! Woof!");
    }

    getInfo(): string {
      return `${this.name} is ${this.age} years old.`;
    }
  }

    const dog = new Dog("Buddy", 3);
    dog.makeSound(); // Woof! Woof!
    // console.log(dog.getInfo()); // Buddy is 3 years old.

    // inheritance and polymorphism
    interface Canfly{
        fly(): void;
    }

    interface CanSwim{
        swim(): void;
    }

    class Bird implements Canfly {
        fly(): void {
            console.log("Flying high in the sky!");
        }
    }

    class Fish implements CanSwim {
        swim(): void {
            console.log("Swimming in the water!");
        }
    }

    class Duck extends Bird implements CanSwim {
        swim(): void {
            console.log("Swimming like a duck!");
        }
        fly(): void {
            console.log("Flying like a duck!");
        }
    }

    const duck = new Duck();
    duck.fly(); // Flying like a duck!
    duck.swim(); // Swimming like a duck!

    const fish = new Fish();
    fish.swim(); // Swimming in the water!
    const bird = new Bird();
    bird.fly(); // Flying high in the sky!
};
