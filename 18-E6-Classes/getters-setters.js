/*********************************************************/
// Getters och Setters med E6 klasser...
/*********************************************************/
// Parent class (Base class, Super class)
class Person {
  constructor(firstName, lastName, email) {
    // Ändra namn på egenskaperna för att fejka synligheten...
    this._firstName = firstName; // Denna får inte ändras direkt...
    this._lastName = lastName;
    this._email = email.toLowerCase();
  }

  // Properties via Getter eller Setters
  // Getter hämta värden ifrån en egenskap
  get firstName() {
    // return this._firstName.toUpperCase();
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get email() {
    return this._email.toLowerCase();
  }

  // Setter skriver värden till en egenskap
  set firstName(value) {
    // const adjustedName = value.charAt(0).toUpperCase() + value.slice(1);
    // this._firstName = adjustedName;
    this._firstName = this.getAdjustNaming(value);
  }

  set lastName(value) {
    // const adjustedName = value.charAt(0).toUpperCase() + value.slice(1);
    // this._lastName = adjustedName;
    this._lastName = this.getAdjustNaming(value);
  }

  set email(value) {
    this._email = value.toLowerCase();
  }

  // Metoder...
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAdjustNaming(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

class Student extends Person {
  constructor(firstName, lastName, email, phone, birthDate) {
    super(firstName, lastName, email);
    this.phone = phone;
    this.birthDate = birthDate;
  }

  enrollCourse(course) {
    return `Välkommen till kursen ${course} ${this.getFullName()}`;
  }

  getFullName() {
    return ` ${this.email}`;
  }
}

const eva = new Student(
  'Eva',
  'Olsson',
  'Eva.OlSSon@MAil.CoM',
  '073-12345',
  '1990-02-10'
);

console.log(eva);

eva.firstName = 'eva';
eva.lastName = 'olsson';

// Tilldelar ett värde till egenskapen
// Det till höger om = är värdet som vi ger egenskapen _email
// eva._email = 'Eva.OlSSon@MAil.CoM';
eva.email = 'Eva.OlSSon@MAil.CoM';

console.log(eva.firstName);
console.log(eva.lastName);
console.log(eva.email);
console.log(eva.email.toLowerCase());
// GÅR INTE!!!
// const evaFirstName = eva.firstName();
// const evaFirstName = eva.firstName;
// console.log(evaFirstName);

// eva._firstName = 'Åsa';
// console.log(eva);
