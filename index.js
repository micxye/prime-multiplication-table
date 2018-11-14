// get N number of prime numbers
// get products of all prime numbers
// generate and log table

const generateNPrimes = n => {
    const primes = [2];
    let i = 3;
    while (primes.length < n) {
        let prime = true;
        let rootI = Math.sqrt(i) + 1;
        for (let j = 2; j < rootI; j++) {
            if (i % j == 0) { prime = false; break; }
        };
        if (prime) primes.push(i);
        i++;
    }
    return primes;
}

module.exports = {
    generateNPrimes
}
// process.stdout.write('2384823842384hsdfhjasfhwhefakwhfwhfkjahfjkasjkefhajkwhfjkawefjkahwkfh');

console.log(generateNPrimes(10))