/*********************************************************/
// Arv med E6 klasser...
/*********************************************************/
/*
  Uppdragsspec...
  Vi behöver information om studenter och lärare
  För studenter behöver vi veta följande
  1.  Förnamn och efternamn
  2.  E-post adress
  3.  Telefon
  4.  Födelseår

  För lärare behöver vi följande information
  1.  Förnamn och efternamn
  2.  E-post adress
  3.  Telefon
  4.  Vilka kurser håller läraren
*/

// Parent class (Base class, Super class)
class Person {
  constructor(firstName, lastName, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// extends sägar att Student klassen ärver ifrån Person klassen
// Student blir en så kallad:
// Barn klass/härledd klass (Child or Derived class)
class Student extends Person {
  constructor(firstName, lastName, email, phone, birthDate) {
    super(firstName, lastName, email, phone);
    this.birthDate = birthDate;
  }

  // Egen metod skapad i Student klassen...
  enrollCourse(course) {
    // return `Välkommen till kursen ${course} ${this.firstName} ${this.lastName}`;
    return `Välkommen till kursen ${course} ${this.getFullName()}`;
  }

  // Åsidosätter förälderns getFullName() metoden...
  getFullName() {
    return ` ${this.email}`;
  }
}

const eva = new Student(
  'Eva',
  'Olsson',
  'eva.olsson@mail.com',
  '073-12345',
  '1990-02-10'
);

eva.phone = '111111111';
eva.email = 'eva.mail.com';
console.log(eva);

console.log(eva.enrollCourse('Frontend med JavaScript'));
// console.log(eva);
// console.log(eva.getFullName());

const johndoe = new Person('John', 'Doe', 'johndoe@mail.com', '075-336699');
// console.log(johndoe);
// console.log(johndoe.getFullName());
