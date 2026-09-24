/*
Algorithm: Find nth fibonacci number
Input: number n
Output: x of n

The Fibonacci sequence is a famous pattern of numbers where each new number is the sum of the two numbers before it.

Standard Math (\(F_0 = 0\)): In modern mathematics, the sequence is formally defined with a zeroth term of zero: \(F_0 = 0\) and \(F_1 = 1\). The sequence goes: \(0, 1, 1, 2, 3, 5, \dots\)

Steps:
1. init array
2. add 0 and 1 to array
3. if 0 or 1, return..
4. 

Using for loop:
1. init array
2. add 0 and 1 to array
3. if 0 or 1, return..
4. for i < n,
5. nextNum is 

"next num is sum of two previous numbers"
we only start getting 2 numbers at 2

if 0 => Return 0
if 1 => Calc nextNum, Return 0, 1
if 2 => Calc 0 + 1, RETURN 0, 1, 1
if 3 => Calc take 0, 1

nth Number:
if 0 => Return 0
if 1 => Calc nextNum, Return 1
if 2 => Calc 0 + 1, RETURN 1
if 3 => Calc take 2...
if 5 => 5
if 6 => 8...

this is wrong cause if I 0 passed as argument
it will return 0, 1. so keep 0 only

to get the number, I need the sequence?
cause the formula is 
x8 = x7 + x6

"To use a recursive formula we also need to know the first few terms. For Fibonacci we start with x0 = 0 and x1 = 1"

if 0, return 0
if 1, return 1
then
let's assume [0, 1] in the array since can only
start calculating from 2
just take last AND second last together
add to array
repeat! until n

for recursion it's going backwards!


you don't actually need a full sequence, just keeping previous
two numbers => improved space complexity if only
fibonacci NUMBER needed
https://www.w3schools.com/dsa/dsa_algo_simple.php
*/

function getFibonacciForLoop(n: number) {
  //const fibonacci = 0;
  const sequence = [0, 1];
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }
  for (let i = 2; i <= n; i++) {
    const nextNum = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNum);
  }
  return sequence;
}

// Time Complexity: O(n). for loop executes for as long as input n is there
// Space Complexity: O(n) cause array of n

function getFibonacciUsingRecursion(n: number): number {
  if (n <= 1) {
    return n;
  }

  const fibonacci: number =
    getFibonacciUsingRecursion(n - 1) +
    getFibonacciUsingRecursion(n - 2);

  return fibonacci;
}
// 3: 2 + 1 => 1 + 1 => 2

// Time Complexity: O(1)
// Space Complexity: O(n)

for (let index = 0; index < 11; index++) {
  console.log(`${index}: ${getFibonacciForLoop(index)}`);
}

for (let index = 0; index < 11; index++) {
  console.log(`${index}: ${getFibonacciUsingRecursion(index)}`);
}
