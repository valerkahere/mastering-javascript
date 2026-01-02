// how to reverse an array?
// how to sort in js?
// use split

let array = [5, 10, 3, 4];
//console.log(array.sort(function(a,b){return a - b}));

// 1 Reversing an array to a normal order
// 2 combining into a string with ','
// 3 adding together (displaying)

let l1 = [2,4,3], l2 = [5,6,4];
let numString = '';
//let l1 = [0], l2 = [0];
//let l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// need to change reverse back to original
// not 2,4,3 - but 3,4,2

console.log(l1.reverse());
// two numbers do not contain leading zeros except the number 0 itself
console.log(l1.toString());
// how to remove commas? Loop?

// 1 reverse array to normal order
// 2 join into string by comma
console.log(l1.reverse().join('')); // THIS IS THE SOLUTION
let sum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
console.log(sum); // 807
// 3 get the sum, convert to string
// 4 convert to array
// 5 inverse

console.log(sum.toString().split('').reverse()); // CONTINUATION

let addTwoNumbers = function(l1, l2) {
    let sum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
    return sum.toString().split('').reverse();
};
console.log(addTwoNumbers(l1, l2));
