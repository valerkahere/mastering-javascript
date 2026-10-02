import { Queue } from './queue'
import { describe, test, expect, beforeEach } from 'vitest'


describe("Queue", () => {

  let queue

  beforeEach(() => {
    queue = new Queue()
  })

  test('performs a number of valid enqueue and dequeue operations', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    queue.enqueue(5)
    const dequeued = queue.dequeue()
    expect(dequeued).toBe(1)
  })

  test('performs enqueue and dequeue operations and peeks at the front of the queue', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.dequeue()
    expect(queue.peek()).toBe(2)
  })

  test('performs enqueue and dequeue operations and checks size', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()
    expect(queue.size()).toBe(1)
  })

  test('performs enqueue and dequeue operations and checks if empty and it is not', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.dequeue()
    expect(queue.isEmpty()).toBeFalsy()
  })

  test('performs enqueue and dequeue operations and checks if empty and it is', () => {
    queue.enqueue(1)
    queue.dequeue()
    expect(queue.isEmpty()).toBeTruthy()
  })

  test('tries to dequeue from an empty queue', () => {
    expect(() => queue.dequeue()).toThrowError("Queue is empty.")
  })

  test('tries to peek at the front of an empty queue', () => {
    expect(() => queue.peek()).toThrowError("Queue is empty.")
  })

})