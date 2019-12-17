
/*
 * NOTE: Import does not work
 * Also tried examples_jest/packages/vehicle/vehicle
 */

import { Vehicle } from './vehicle';

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