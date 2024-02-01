export class Vehicle {
  // constructor(manufacturer){
  //   this.manufacturer = manufacturer
  // }

  constructor() {
    this.manufacturer = '';
    this.model = '';
    this.isSaved = false;
  }

  save() {
    this.isSaved = true;
  }
}
