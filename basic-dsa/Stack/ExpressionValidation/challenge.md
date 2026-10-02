Challenge:
**********

You are familiar with human mathematical expressions like (1 + 2) * 5. We humans use parentheses, "(" and ")", to group parts of the expression together and determine the order of evaluation. Dinosaurs, on the other hand, use angle brackets, "<" and ">". We would like to help the Dinosaur Data Management System validate expressions. A valid expression is one that has a matching closing bracket for each opening bracket. Brackets are the only characters we care about here.


Examples:
**********

Example 1:
```
exp = <1 + 2> * 5
valid = true
```

Example 2:
```
exp = <<1 + 2> * 5> + <6 + 7>
valid = true
```

Example 3:
```
exp = <<1 + 2> * 9
valid = false
```

Example 4:
```
exp = <1 + 2> * 9>
valid = false
```


Task:
*****

Implement the function isValid() that takes a string representing an expression, and returns `true` or `false` indicating the validity of the expression.
1. Write the algorithm.
2. Implement it.
3. Run the tests to make sure it works as expected.
4. Analyze its time and space complexity.


Constraints:
************

1. exp.length >= 0


Notes:
******

1. Use the Stack class provided. 
2. Check out `hints.md` if needed.