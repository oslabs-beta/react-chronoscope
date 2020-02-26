const summing = require('../src/components/sample.ts');

test('adds 1 + 2 to equal 3', () => {
  expect(summing(1, 2)).toBe(3);
});
// describe('calculate - sample', () => {
//   it('adds', () => {
//     const result = Calculator.Sum(5, 2);
//     expect(result).toBe(7);
//   });
// });
