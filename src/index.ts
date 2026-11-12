class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    ((this.name = name), (this.age = age));
  }
}

const user = new User("navya", 24);
console.log(user);
