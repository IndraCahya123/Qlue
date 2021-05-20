const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = () => {
    return new Promise((resolve, reject) => {
        rl.question("Masukkan suatu angka : ", (number) => {
            resolve(number);
        });
    });
}

const isPrime = (n) => {
    if (n < 2) {
        return false;
    } else if (n == 2) {
        return true;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

const main = async () => {
    const getNumber = await questions();
    let primeNumber = [];

    for (let i = 0; i < getNumber; i++) {
        if (isPrime(i)) primeNumber.push(i);
    }

    console.log(primeNumber);

    rl.close();
}

main();