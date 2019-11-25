let i = 1;

while (i <= 100) {
    if (i % 15 === 0) {
        console.log('FizzBuzz')
    }
    else if (i % 5 === 0) {
        console.log('Buzz')
    }
    else if (i % 3 === 0) {
        console.log('Fizz')
    }
    else {
        console.log(i);
    }
    //else if (i % 5) {
    //     return ('Buzz')
    // } else (i % 3 && 5) {
    //     return ('FizzBuzz')
    // }

    i++;
};
