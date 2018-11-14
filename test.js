const { generateNPrimes } = require('./index');

test('generateNPrimes function should generate N number of prime numbers', () => {
    expect(generateNPrimes(20).length).toBe(20);
});