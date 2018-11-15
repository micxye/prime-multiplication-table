// get N number of prime numbers
// get products of all prime numbers
// generate and log table

const logTable = n => {
    // create first line of all primes, space in front
    const primes = generateNPrimes(n);
    printFirstRow(primes);
    // console.log('   ' + primes.join('     ')); // prints top row, 5 spaces between each number
    // add line divider
    // create 2nd line
}

const printFirstRow = nums => {
    const formattedRow = nums.map(num => firstRowCellFormatter(num))
    // prints the first row, with all cells formatted
    console.log('   ' + formattedRow.join(''));
}

const firstRowCellFormatter = num => {
    // 2 cases: 1 digit
    let str = num.toString();
    if (str.length === 1) {
        str = `  ${str}  `;
    } else if (str.length === 2) {
        str = ` ${str}  `;
    }
    return str;
    // returns 5 character format for each num, spaces at end, e.g. __5__, _11__
}

const firstColumnCellFormatter = num => {
    let str = num.toString();
    if (str.length === 1) {
        str = ` ${str}|`
    } else if (str.length === 2) {
        str = `${str}|`
    }
    return str;
    // returns 3 character format with divider at end, e.g. 11|
}

const cellFormatter = num => {
    let str = num.toString();
    if (str.length === 1) {
        str = `  ${str} |`
    } else if (str.length === 2) {
        str = ` ${str} |`
    } else if (str.length === 3) {
        str = ` ${str}|`
    }
    return str;
    // returns 5 character format, divider at the end, space always in front, e.g __5_|, _10_|, _143|
}

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

logTable(10)
// process.stdout.write('2384823842384hsdfhjasfhwhefakwhfwhfkjahfjkasjkefhajkwhfjkawefjkahwkfh');

module.exports = {
    generateNPrimes,
    firstRowCellFormatter,
    firstColumnCellFormatter,
    cellFormatter
}