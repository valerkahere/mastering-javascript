import { Stack } from './stack.js';

/*
  Algorithm: isValid 
  Input: expression: string
  Output: valid or not: boolean 
  Paradigm: Stack for remembering sequencing


  Steps:
  Init leftAngle and rightAngle counts to 0
  ~~First check if exp empty~~
  for split the exp, getting an array of char
  create stack from array - declare as a stack so its methods work
    don't have constructor which takes existing array as input, need to populate it?
  Remove whitespace from that array - filter()!
  for exp, not for length, BUT FOR INITIAL AMOUNT OF ELEMENTS, subtle cause gets smaller with each iteration
  topEl = exp.pop()
  if topEl is left angle
    increment leftAngle count by 1
  else if topEl is right angle
    increment rightAngle count by 1

  return leftAngle === rightAngle 

  How to split:
  if I split by empty space, I'll get
  [
    '<<1', '+',  '2>',
    '*',   '5>', '+',
    '<6',  '+',  '7>'
  ]

  so need split by ''
  [
    '<', '<', '1', ' ', '+',
    ' ', '2', '>', ' ', '*',
    ' ', '5', '>', ' ', '+',
    ' ', '<', '6', ' ', '+',
    ' ', '7', '>'
  ]
  I'll get a lot of empty strings but can just ignore them or CLEAN THEM UP


  Feedback:

  Your current approach counts the total number of brackets, but it doesn't account for the order in which they appear. A stack is designed to track the sequence—try using it to ensure that every closing bracket has a matching opening bracket that came before it!

  => Fair enough

  You're very close! Your logic handles the bracket matching well, but remember that the `pop()` method on your `Stack` class throws an error if the stack is empty, which might cause issues when you encounter a closing bracket without a preceding opening one. Try checking if the stack is empty before calling `pop()` to keep your code running smoothly!

  => Fair enough!

  */

// export function isValid(exp) {
//   let leftAngleCount = 0;
//   let rightAngleCount = 0;

//   exp = exp.split('').filter((el) => el !== ' ');
//   exp = new Stack(exp);
//   const initialExpLength = exp.size();

//   for (let i = 0; i < initialExpLength; i++) {
//     const topEl = exp.stack.pop();
//     switch (topEl) {
//       case '<':
//         leftAngleCount++;
//         break;
//       case '>':
//         rightAngleCount++;
//         break;
//       default:
//         break;
//     }
//   }

//   return leftAngleCount === rightAngleCount;
// }

export function isValid(input) {
    // reverse cause we're using a stack and pop which is LTR.
    // while my logic is RTL
    // reverse side effect: it changes ["<", ">"] to [">", "<"], breaking the logic still.
    // solution: change my logic to account for LTR?
    input = input.split('').filter((el) => el !== ' ');

    const stillOpenedBrackets = new Stack();
    const expectedClosedBrackets = new Stack();

    const initialStackSize = input.length;

    for (let i = 0; i < initialStackSize; i++) {
        const bottomEl = input.shift();
        if (bottomEl === '<') {
            stillOpenedBrackets.push('<');
            expectedClosedBrackets.push('>');
        } else if (bottomEl === '>') {
            if (stillOpenedBrackets.isEmpty() === false && stillOpenedBrackets.pop() === '<') {
                expectedClosedBrackets.pop();
            } else {
                return false;
            }
        }
    }

    if (stillOpenedBrackets.size() === 0 && expectedClosedBrackets.size() === 0) {
        return true;
    }

    return false;
}

// Time Complexity: O(n). loops
// Space Complexity: as much as < and > is in input basically

console.log(`valid: `);
console.log(isValid('<>'));

console.log(`invalid:`); // should this be invalid? :D yes... it must
console.log(isValid('><'));

console.log(`valid:`); // should this be invalid? :D yes... it must
console.log(isValid('< 1 + 2 > * 5'));

console.log(isValid('< 1 + 2 > * 5'));

console.log(isValid('asdf s s s'));

console.log(isValid('<<1 + 2> * 9'));

/* 
  testing

  const str = '<<1 + 2> * 5> + <6 + 7>';

  let strCopy = str.split('');
  console.log(strCopy);
  strCopy = strCopy.filter((el) => el !== ' ');
  console.log(strCopy);

  */
