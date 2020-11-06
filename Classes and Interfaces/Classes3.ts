class Person1 {
    static peopleQuantity: number = 0;
    protected _name: string;
    protected _age: number;

    constructor(name: string, age: number) {
        Person1.peopleQuantity++;
        console.log(`Creating person number ${Person1.peopleQuantity}`);
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(value: string) {
        if (value) {
            this._name = value;
        } else {
            throw new Error("Name must be a non-empty string...");
        }
    }

    get age() {
        return this._age;
    }

    set age(value: number) {
        if (value > 0) {
            this._age = value;
        } else {
            throw new Error("Age must be a positive number...");
        }
    }
}

const p1 = new Person1("Israel Mendoza", 28);
// Creating person number 1
const p2 = new Person1("Mike Smith", 29);
// Creating person number 2
const p3 = new Person1("Kim Waxler", 35);
// Creating person number 3
const p4 = new Person1("Gus Fring", 50);
// Creating person number 4

console.log(`Total number of people: ${Person1.peopleQuantity}`);
// Total number of people: 4
