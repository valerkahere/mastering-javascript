function min(...values) { // an array, if any
    if (values.length !== 0 ) {// if not empty
        let smallest = values[0];
        values.forEach(element => {
            if (element < smallest) {
                smallest = element;
            }
        });
        return smallest;
    }
    return Infinity;
}
// 1) can loop through and check for the smallest
// another way? I do need to take all arguments as array for this


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(25, 35, -23459834));
console.log(min());
// > infinity

console.log(Math.min());
