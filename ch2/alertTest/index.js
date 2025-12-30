let yourName;
yourName = prompt('Who are you?')
console.log(!Boolean(yourName) == false);




let theNumber = Number(prompt('Enter a number'));
if (!Number.isNaN(theNumber)) {
    console.log(`Your number is the square root of ${theNumber * theNumber}`)
}
