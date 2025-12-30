/* 
    fizz buzz - classics, use switch
    print numbers from  1 to 100

    nums divisible by 3 - Fizz
    nums divisible (% === 0) by 5 - Buzz
    THEN,
    nums divisible by 3 && 5 - FizzBuzz

    PRINT NUMBER IS DEFAULT CASE

    Note from Eloquent Javascript:
    (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)
*/


let testCases = [...Array(101).keys()];

// Pure Function to determine logic
// It is testable because it returns a value
function FizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (number % 3 === 0) {
        return 'Fizz';

    } else if (number % 5 === 0) {
        return 'Buzz';

    } else {
        return Number(number);
    }
}

for (let index = 1; index < testCases.length; index++) {
    const testNumber = testCases[index];
    console.log(FizzBuzz(testNumber));
}

// Adapted for leetcode:
console.log('Adapted FOR LEETCODE');
const fizzBuzz = function(n) {
    let answer = [];
        for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                answer.push('FizzBuzz');
            }
            else if (i % 3 === 0) {
                answer.push('Fizz');

            } else if (i % 5 === 0) {
                answer.push('Buzz');

            } else {
                answer.push(String(i));
            }
        }
    return answer;
};
console.log(fizzBuzz(5));