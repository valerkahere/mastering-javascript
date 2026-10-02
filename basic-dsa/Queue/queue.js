// Correct version: LTR#

// You're very close! In a queue, the 'peek' method should look at the front element (the one that would be removed next), but your current implementation is looking at the back of the array. How can you access the first element instead?


export class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        return this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw Error('Queue is empty.');
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw Error('Queue is empty.');
        }
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    print() {
        console.log(this.queue);
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

queue.dequeue();
console.log(queue);

console.log(`peak: ${queue.peek()}`);

// new elements enter at the right
// push
// removed from start
// shift

// my version: RTL

// export class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     enqueue(element) {
//         return this.queue.unshift(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) {
//             throw Error('Queue is empty.');
//         }
//         return this.queue.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             throw Error('Queue is empty.');
//         }
//         return this.queue[this.queue.length - 1];
//     }

//     size() {
//         return this.queue.length;
//     }

//     isEmpty() {
//         return this.size() === 0;
//     }

//     print() {
//         console.log(this.queue);
//     }
// }
