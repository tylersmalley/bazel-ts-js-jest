import { Color, CRAYOLA_24 } from './color';

test('tests isPrimary', () => {
  expect(Color.isPrimary('red')).toBe(true);
  expect(Color.isPrimary('blue')).toBe(true);
  expect(Color.isPrimary('yellow')).toBe(true);

  expect(Color.isPrimary('green')).toBe(false);
  expect(Color.isPrimary('purple')).toBe(false);
});

test('returns random Crayola color', () => {
  for (let i: number = 0; i <= 10; i++) {
    expect(CRAYOLA_24).toContain(Color.random());
  }
})
