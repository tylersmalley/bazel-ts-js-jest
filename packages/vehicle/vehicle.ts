import { Color } from 'example_project/packages/color/color';

export class Vehicle {
  make: string;
  model: string;
  color: string

  constructor(make: string, model: string, color: string = Color.random()) {
      this.make = make;
      this.model = model;
      this.color = color;
  }

  print() {
      return `${this.make} ${this.model}`;
  }

  foo() {
      return 'bar';
  }
}