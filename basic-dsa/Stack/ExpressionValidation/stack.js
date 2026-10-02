export class Stack {
    constructor() {
        this.items = [];
        // if (inputArray) {
        //   for (const element of inputArray) {
        //     this.stack.push(element);
        //   }
        // }
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        console.log(this.items);
    }
}

// Example Usage
// ANY OPERATIONS - ON THE STACK DIRECTLY
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.isEmpty());
stack.print();

// stack = [1,2,3] // this reassigns that to an array
// console.log(stack)

// if want to assign array to stack prop
stack.items = [1, 2, 3];
console.log(stack);
console.log(stack.items);
// Stack { items: [ 1, 2, 3 ] }
// [ 1, 2, 3 ]
