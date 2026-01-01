let twoSum = function(nums, target) {
    let indices = [];
    for(let numberIndex = 0; numberIndex < nums.length; numberIndex++) {
        const number = Number(nums[numberIndex]);
        for(let secondNumberIndex = 0; secondNumberIndex < nums.length; secondNumberIndex++) {
            if (Number(numberIndex) === Number(secondNumberIndex)) {
                continue;
            }
            const result = number + Number(nums[secondNumberIndex]);
            if(Number(result) === target) {
                indices.push(numberIndex, secondNumberIndex);
                return indices;
            }
        }
    }
};

// may not use same INDEX twice


// return indices of the two numbers from nums
// such that they add up to target?

// each input - one solution
// can't use same num twice

// just need to check each number's combination 

//let nums = [2,7,11,15];
let nums = [3,2,4];
let target = 6;
// output 0, 0
// expected 1, 2
// let nums = [3, 3];
// let target = 6;
console.log(twoSum(nums, target));
