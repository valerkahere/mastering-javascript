
/*
Algorithm: Linear Search
Input: array of numbers, and target
Output: index of target in array, or -1 if not found

Steps:
1. Loop over the array:
2.   If the element is the target:
3.     Return the index.
4. Return -1.
*/

/*
Challenge:
***********

Implement the linear search algorithm. Call the function linearSearch() and make sure to export it. When done, run the tests in the terminal with ’npm test’ to make sure it works. At the end, provide its time and space complexity.
*/

export function linearSearch(numbers, target) {
  // need a for loop to track index
  for(let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
}

// Time: O(n) (well cause it's linear)
// Space: 1

// or just as simple as
function linearSearchByIndex(numbers, target) {

  return numbers.indexOf(target);

}
