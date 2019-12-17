export class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
  }

  print() {
      return `${this.make} ${this.model}`;
  }

  foo() {
      return 'bar';
  }
}