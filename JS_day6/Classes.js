class Person {
    constructor(name , age) {
        this.name = name;
        this.age = age;
    }

    intoduction() {
        console.log(`user name is: ${this.name} and his age is: ${this.age}`);
    }
}

const person = new Person('Shakir',21);


class Animal {
    eat() {
        console.log('Animal is eating');
    }
}

class Dog extends Animal {
    bark() {
        console.log('Dog is Barking');
    }
}

const dog1 = new Dog();

dog1.eat();
dog1.bark();



class User {
    constructor(name){
        this.name = name;
    }
}

class Students extends User {
    constructor(name, age){
        super(name);
        this.age = age;
    }
}

const s1 = new Students("Hashir", 21);
console.log(s1.name);
console.log(s1.age);