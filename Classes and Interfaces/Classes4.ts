abstract class Human {

    protected _name: string;
    protected _age: number;

    constructor(name: string, age: number) {
        console.log(`Calling the Person original constructor!`);
        this._name = name;
        this._age = age;
    }

    abstract get name(): string;

    abstract set name(value: string);

    abstract get age(): number;

    abstract set age(value: number);

    abstract speak(): void;

    abstract move(): void;

    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} old.`);
    }
}


class Mexican extends Human {

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value) {
            this._name = value;
        } else {
            throw new Error("Name must be a valind non-empty Mexican name...");
        }
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            throw new Error("Age must be a positive number...");
        }
    }

    move(): void {
        console.log(`Mexican on the move, looking for tacos...`);
    }

    speak(): void {
        console.log("¿Qué onda, vato loco?");
    }
}

class French extends Human {

    protected _province: string;

    constructor(name: string, age: number, province: string) {
        console.log(`Oh là là! Calling the French constructor!`);
        super(name, age);
        this._province = province;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value) {
            this._name = value;
        } else {
            throw new Error("Name must be a valind non-empty French name...");
        }
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value >= 0) {
            this._age = value;
        } else {
            throw new Error("Age must be a positive number...");
        }
    }

    move(): void {
        console.log(`French on the move, looking for croissants...`);
    }

    speak(): void {
        console.log("Ça roule, le mec? On y va?");
    }
}

const m1 = new Mexican("Israel", 28);
// Calling the Person original constructor!

const f1 = new French("MIchel", 30, "Bretagne");
// Oh là là! Calling the French constructor!
// Calling the Person original constructor!
