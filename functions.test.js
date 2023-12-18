
const { returnTwo, greeting, add } = require('./functions');

test('ReturnTwo should return 2', () => {
  expect(returnTwo()).toBe(2);
});

test('Greeting should return the correct greeting for James', () => {
  expect(greeting('James')).toBe('Hello, James.');
});

test('Add should return the sum of two numbers', () => {
  expect(add(1, 2)).toBe(3);
});


