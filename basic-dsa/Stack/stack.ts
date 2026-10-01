export class Stack {
  stack: Array<any>;
  constructor() {
    this.stack = [];
  }

  push(element: any) {
    // Push the element to the top/end of the stack.
    // stack.push(element)
    // symbolically return the new length of the stack

    this.stack.push(element);
    return this.stack.length;
  }

  pop() {
    // Remove the top element from the end of stack and return it.

    if (this.stack.length === 0) {
      throw new Error('Stack is empty.');
    }

    const topEl = this.stack[this.stack.length - 1];

    this.stack.pop();
    return topEl;
  }

  peek() {
    // Return the top element from the stack without removing it.
    if (this.stack.length === 0) {
      throw new Error('Stack is empty.');
    }

    return this.stack[this.stack.length - 1];
  }

  size() {
    // Return the size of the stack.
    return this.stack.length;
  }

  isEmpty() {
    // Return whether the stack is empty or not.
    if (this.stack.length === 0) {
      return true;
    }
    return false;
  }
}
const stack = new Stack();
console.log(stack.push(234));
console.log(stack.pop());
console.log(stack);
console.log(stack.isEmpty());
