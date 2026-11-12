
class User {
    #name: string;
    #age: number;

    constructor(name: string, age: number) {
        this.#name = name;
        this.#age = age;
    }

   get getDetails(): string {
        return `${this.#name} is ${this.#age} years old`;
    }
}

const user = new User("Navya", 27);

console.log(user.getDetails);

// Error: Private field cannot be accessed outside the class
// console.log(user.#name);
