/*********************************************************/
// Från och med version ES2022!!! kan vi på ett äkta
// sätt skydda vårt data(egenskaper/fält och metoder)
/*********************************************************/
class Person {
  // Deklarerar private fält...
  #firstName = '';
  #lastName = '';
  #email = '';
  constructor(firstName, lastName, email) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
  }

  // getters och setters
  get firstName() {
    return this.#adjustNaming(this.#firstName);
  }

  set firstName(value) {
    this.#firstName = this.#adjustNaming(value);
  }

  get lastName() {
    return this.#adjustNaming(this.#lastName);
  }

  set lastName(value) {
    this.#lastName = this.#adjustNaming(value);
  }

  get email() {
    return this.#email.toLowerCase();
  }

  set email(value) {
    this.#email = value.toLowerCase();
  }

  // Publika metoder...
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Privata metoder använd hash(#) tecknet
  #adjustNaming(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  // Static metoder...
  static sayHello() {
    console.log('Hej och välkommen');
  }
}

class Student extends Person {
  #courses = [];
  #birthDate = '';

  constructor(firstName, lastName, email, birthDate) {
    super(firstName, lastName, email);
    this.#birthDate = birthDate;
  }

  // getters och setters
  get birthDate() {
    return this.#birthDate;
  }
  set birthDate(value) {
    this.#birthDate = value;
  }

  get courses() {
    return this.#courses;
  }

  // Publika metoder...
  // Instans metoder
  enrollCourse(courseName) {
    this.#courses.push(courseName);
  }
}

// const eva = new Person('Eva', 'Olsson', 'eva@mail.com');
const maria = new Student(
  'Maria',
  'Eriksson',
  'maria.eriksson@mail.com',
  '1989-10-25'
);

Person.sayHello();

maria.enrollCourse('Klientprogrammering med JavaScript');
maria.enrollCourse('Klientprogrammering med React');
maria.enrollCourse('Klientprogrammering med Angular');
maria.enrollCourse('Klientprogrammering med TypeScript');
console.log(maria.courses);
