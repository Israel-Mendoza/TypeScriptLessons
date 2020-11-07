// Singleton classes out of which we can only instantiate one single instance
// In orther to achieve this, we must implement a private constructor.


class Person {
    private static instance: Person;
    public name: string;
    public age: number;

    private constructor(name: string, age: number) {
        this.name = "Israel";
        this.age = 28;
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new Person('Israel', 28);
        return this.instance;
    }

    sayHello(): void {
        console.log(this);
        console.log(`Person ${this.name} says 'Hello, folks!'`);
    }
}

const israel = Person.getInstance();

israel.sayHello();
