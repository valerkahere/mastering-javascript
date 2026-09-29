/*
Algorithm: Binary Search
Input: array of sorted numbers, and target
Output: index of target in array, or -1 if not found
Paradigm:  divide and conquer

Steps:
1. Init l to 0.
2. Init r to point to the last element in the array.
3. Loop as long as l did not pass r:
4.   Init m to be the middle point between l and r.
5.   If the value at m is the target:
6.     Return m.
7.   Else if the value at m is less than the target:
8.     Move l to right after m.
9.   Else:
10.    Move r to right before m.
11. Return -1.
*/

/*
Challenge:
***********

Implement the binary search algorithm. Call the function binarySearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works.

Note: If needed, see hint.md for the formula.
*/

export function binarySearch(sortedNumbers, target) {
  let l = 0;
  let r = sortedNumbers.length - 1;
  // Loop as long as l did not pass r: - basically array size

  // You're very close! While your logic is sound, using a `for` loop based on the array length can cause issues with the search boundaries.
  // Try using a `while` loop that continues as long as `l <= r` to keep your pointers accurate.
  // that's the translation to " Loop as long as l did not pass r"
  while (l <= r) {
    // middle point. isn't the same as in merge sort?
    // but it has to be between l and r
    // say l = 5, r = 10 - INDICES. just between them - THE AVERAGE
    //  15 / 2 = 7.5 = 8
    // roung - left takes more
    const m = Math.round((l + r) / 2);
    // if the number AT THAT MIDDLE POINT is THE TARGET,
    // then return that middle point cause that's the index
    if (sortedNumbers[m] === target) {
      return m;
    } else if (sortedNumbers[m] < target) {
      // the value "at m"
      l = m + 1; // "right after" index
    } else {
      r = m - 1; // right before
    }
  }

  return -1;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 7;
// result is 6 here..

console.log(binarySearch(numbers, target));
