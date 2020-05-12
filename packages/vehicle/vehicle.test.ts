import { Vehicle } from './vehicle';
import { CRAYOLA_24 } from 'example_project/packages/color/color';

let vehicle: Vehicle;

beforeEach(() => {
  vehicle = new Vehicle('Subaru', 'Outback');
})

test('formats print', () => {
  expect(vehicle.print()).toBe('Subaru Outback');
});

test('exposes make', () => {
  expect(vehicle.make).toBe('Subaru');
});

test('expose model', () => {
  expect(vehicle.model).toBe('Outback');
});

test('has a default random Crayola color', () => {
  expect(CRAYOLA_24).toContain(vehicle.color);
})