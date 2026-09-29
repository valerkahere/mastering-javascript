/*
Personal Notes:
let a = 0;
let array = [1, 2, 3, 4]// 0,1,2,3. midpoint index?
let array2 = [1, 2, 3, 3, 4] // 0,1,2,3,4. midpoint = 2

let array3 = [1, 2, 3, 3, 8, 345, 1234, 1234, 123]; // midpoint INDEX 4

//index is always 1 less of a given number position count cause 0-based indexing... like 1 less than length

console.log(array3.length); // 9
console.log(Math.floor(array3.length/2)); // 4
console.log(Math.floor(array.length/2)); // even returns 2



Algorithm: Merge Sort
Input: array of numbers
Output: a new array with the numbers sorted in ascending order

Steps:
1. If there is one or no number in the array:
2.   Return the array. It's already sorted.
3. Find the index of the mid point in the array.
4. Get a copy of the left half of the array.
5. Get a copy of the right half of the array.
6. Sort the left half.
7. Sort the right half.
8. Merge the two sorted halves and return the result.
*/

/*
Challenge:
***********

Implement the first algorithm in JavaScript. 


Notes:
******

1. Use recursion.
2. You may find `Math.floor()` and the array `slice()` methods useful.
*/

export function mergeSort(unSortedArray) {
  if (unSortedArray.length <= 1) {
    return unSortedArray;
  } else {
    // find the index of the midpoint
    // even or uneven
    // if even - take 1 more left side - it will always do that
    // cause length/2 and index is always 1 smaller, therefore
    // taking 1 more element on the right
    // even - split equal,
    // uneven - left takes more
    // don't need to distinguish even/uneven

    let left = [];
    let right = [];
    const midpointIndex = Math.floor(unSortedArray.length / 2);
    if (unSortedArray.length % 2 === 0) {
      // even = equal
      left = unSortedArray.slice(0, midpointIndex); // up to including midpoint, hence
      right = unSortedArray.slice(midpointIndex); // starting from midpoint
    } else {
      // uneven - left takes 1 more
      left = unSortedArray.slice(0, midpointIndex + 1); // incl midpoint
      right = unSortedArray.slice(midpointIndex + 1); // starting from midpoint+1 including end
    }

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return MergeTwoSortedArrays(sortedLeft, sortedRight); // need explicit return value
  }
}



let array1 = [38, 27, 43, 3, 9, 82, 10];
// length 7
// 7/2 = 3.5
// Math.floor(3.5) = 3
// Left: 0,1,2,3 Right: 4,5,6
// 38, 27, 43, 3, /  9, 82, 10

// 38, 27 / 43, 3

// 38 / 27 |

// return 38

let array2 = [38, 27, 43, 9, 82, 10];
// length 6
// 6/2 = 3
// Math.floor(3) = 3
// left: 0,1,2, Right: 3,4,5

console.log(mergeSort(array1));
console.log(mergeSort(array2));
/*
Algorithm: Merge Two Sorted Arrays
Input: two sorted arrays of numbers, left and right
Output: a new array of the two arrays merged

Steps:
1. Init an empty result array.
2. Init a pointer for the left half.
3. Init a pointer for the right half.
4. Loop over both arrays until we reached the end of one of them:
5.   If the current number in the left half is less than the current number in the right half:
6.     Add it to the result.
7.     Increase the left pointer.
8.   Else:
9.     Add the current number from the right half to the result.
10.    Increase the right pointer.
11. After the loop is over, add whatever is left in either halves to the result.
12. Return the result array.
*/

function MergeTwoSortedArrays(firstArray, secondArray) {
  let sortedArray = [];
  let leftPointer = 0;
  let rightPointer = 0;

  // loop until END OF ONE OF ARRAY
  // how do i know it's the end of array - check for undefined
  while (
    firstArray[leftPointer] !== undefined &&
    secondArray[rightPointer] !== undefined
  ) {
    if (firstArray[leftPointer] < secondArray[rightPointer]) {
      sortedArray.push(firstArray[leftPointer]);
      leftPointer++;
    } else {
      sortedArray.push(secondArray[rightPointer]);
      rightPointer++;
    }
  }

  // After the loop is over, add whatever is left in either halves to the result.
  // left: 1 2
  // right:  1, left loop end, add what's left
  // left loop - how do i know i don't need it
  // from where?
  for (let i = leftPointer; i < firstArray.length; i++) {
    sortedArray.push(firstArray[i]);
  }

  for (let i = rightPointer; i < secondArray.length; i++) {
    sortedArray.push(secondArray[i]);
  }
  return sortedArray;
}

// Time Complexity: O(n(log n))
// Space: n
