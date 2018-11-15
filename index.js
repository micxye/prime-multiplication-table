const n = 10;

const logTable = n => {
    console.log(`First ${n} Prime Numbers Multiplication Table! \n`);

    const primes = generateNPrimes(n);
    printFirstRow(primes);
    printCellBorder();

    primes.forEach(prime => {
        printRow(prime, primes);
        printCellBorder();
    })
}

const printFirstRow = nums => {
    const formattedRow = nums.map(num => firstRowCellFormatter(num))
    console.log('   ' + formattedRow.join(''));
}

const printCellBorder = () => console.log('   --------------------------------------------------');

const printRow = (num, nums) => {
    let str = firstColumnCellFormatter(num);
    for (let i = 0; i < nums.length; i++) {
        let prod = num * nums[i];
        str += cellFormatter(prod);
    }
    console.log(str);
}

const firstRowCellFormatter = num => {
    let str = num.toString();
    if (str.length === 1) {
        str = `  ${str}  `;
    } else if (str.length === 2) {
        str = ` ${str}  `;
    }
    return str;
}

const firstColumnCellFormatter = num => {
    let str = num.toString();
    if (str.length === 1) {
        str = ` ${str}|`
    } else if (str.length === 2) {
        str = `${str}|`
    }
    return str;
}

const cellFormatter = num => {
    let str = num.toString();
    if (str.length === 1) {
        str = `  ${str} |`
    } else if (str.length === 2) {
        str = ` ${str} |`
    } else if (str.length === 3) {
        str = `${str} |`
    }
    return str;
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

logTable(n);

module.exports = {
    generateNPrimes,
    firstRowCellFormatter,
    firstColumnCellFormatter,
    cellFormatter,
}