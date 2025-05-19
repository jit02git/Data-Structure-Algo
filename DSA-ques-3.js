function printPrime(limit){
    for (let i = 0; i < limit; i++) {
        let isPrime = true;
        for (let j = 2; j < i; j++) {
            if (i%j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}

printPrime(100);