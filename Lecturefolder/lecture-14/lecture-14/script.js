"use strict";

// Global context
console.log(this);

// In an object method, 'this' points to the object itself
const person = {
  name: "John",
  age: 30,
  yearOfBirth: function () {
    console.log(this);

    // Arrow function does not have its own 'this'; it uses 'this' from the surrounding context
    const innerFunction = () => {
      console.log(this);
    };
    innerFunction();
    return 2024 - this.age;
  },
};

person.yearOfBirth();

// In a regular function, 'this' is undefined in strict mode but points to the global object in non-strict mode
function calcAge(birthYear) {
  console.log(this);
  return 2024 - birthYear;
}

calcAge(1990);

//ES5 Function
//Constructor function or functional Class
const Person = function (name, age, grade) {
  this.name = name;
  this.grade = grade;
  this.age = age;
  this.yearOfBirth = function () {
    return 2024 - this.age; // 'this' points to the instance
  };
  console.log(this);
};

const alice = new Person("Alice", 25, "B");
const bob = new Person("Bob", 35, "C");

console.log(alice.name);
console.log(bob.name);
console.log(alice.yearOfBirth());
console.log(bob.yearOfBirth());

//ES6 Class
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  yearOfBirth() {
    return 2024 - this.age; // 'this' points to the instance
  }
}

const charlie = new Student("Charlie", 20, "A");
console.log(charlie.yearOfBirth());

//The Prototype Chain
//Es5 Prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

alice.greet();
bob.greet();

//ES5 Prototype on ES6 Class
Student.prototype.greet = function () {
  console.log(`Hi, I'm ${this.name}`);
};
charlie.greet();

//The Extend Keyword
class Teacher extends Student {
  constructor(name, age, subject) {
    super(name, age); // Call the parent class constructor
    this.subject = subject;
  }

  myAge() {
    return super.yearOfBirth();
  }

  introduce() {
    console.log(
      `Hello, I'm ${this.name}, a ${this.age}-year-old teacher of ${this.subject}.`
    );
  }
}

const mrSmith = new Teacher("Mr. Smith", 40, "Mathematics");
mrSmith.introduce();
mrSmith.greet();
console.log(mrSmith.yearOfBirth());
