class Employee {
    public firstName: string;
    public lastName: string;
    public displayName: string;
    private age: number;

    constructor(fistName: string, lastName: string, age: number) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.displayName = `${this.firstName} ${this.lastName}`;
        this.age = age;
    }

    introduce(this: Employee): string {
        return `My name is ${this.displayName} and I'm ${this.age} years old`;
    }

    hasBirthday(this: Employee): void {
        console.log(`Happy Birthday to ${this.firstName}`);
        this.age++;
    }

}


class Department {
    public name: string;
    private employees: Employee[] = [];
    public readonly id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    describe(this: Department): void {
        console.log(`The ${this.name.toLowerCase()} has ${this.employees.length} employees.`);
    }

    addEmployee(this: Department, employee: Employee): void {
        console.log(`${employee.firstName}, welcome to the ${this.name.toLowerCase()} deparment!`);
        this.employees.push(employee);
    }

    displayEmployees(this: Department): void {
        console.log(`There are ${this.employees.length} employees in the ${this.name.toLowerCase()} department: `)
        this.employees.forEach((employee) => {
            console.log(`\t${employee.displayName}`);
        });
    }
}


const accounting = new Department("Accounting", 1001);

accounting.addEmployee(new Employee("Israel", "Mendoza", 28));
// Israel, welcome to the accounting deparment!
accounting.addEmployee(new Employee("Andrew", "Coultas", 33));
// Andrew, welcome to the accounting deparment!
accounting.addEmployee(new Employee("Kiera", "McNeill", 30));
// Kiera, welcome to the accounting deparment!


accounting.displayEmployees();
// There are 3 employees in the accounting department:
// 	Israel Mendoza
// 	Andrew Coultas
// 	Kiera McNeill
