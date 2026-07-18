// ==========================================
// Circular Queue
// ==========================================

// A Circular Queue follows the First In,
// First Out (FIFO) principle.
//
// Unlike a regular queue, it has a fixed
// capacity and reuses empty spaces by
// wrapping around to the beginning.

class CircularQueue {
  constructor(capacity) {
    // Fixed-size array to store elements.
    this.items = new Array(capacity);

    // Maximum number of elements.
    this.capacity = capacity;

    // Number of elements currently in the queue.
    this.currentLength = 0;

    // Index of the front element.
    this.front = -1;

    // Index of the rear element.
    this.rear = -1;
  }

  // ------------------------------------------
  // isFull
  // Checks whether the queue is full
  // Time Complexity: O(1)
  // ------------------------------------------
  isFull() {
    return this.currentLength === this.capacity;
  }

  // ------------------------------------------
  // isEmpty
  // Checks whether the queue is empty
  // Time Complexity: O(1)
  // ------------------------------------------
  isEmpty() {
    return this.currentLength === 0;
  }

  // ------------------------------------------
  // Enqueue
  // Adds an element to the rear
  // Time Complexity: O(1)
  // ------------------------------------------
  enqueue(element) {
    if (this.isFull()) {
      return;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = element;
    this.currentLength++;

    if (this.front === -1) {
      this.front = this.rear;
    }
  }

  // ------------------------------------------
  // Dequeue
  // Removes and returns the front element
  // Time Complexity: O(1)
  // ------------------------------------------
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.items[this.front];

    this.items[this.front] = null;

    this.front = (this.front + 1) % this.capacity;

    this.currentLength--;

    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }

    return item;
  }

  // ------------------------------------------
  // Peek
  // Returns the front element
  // Time Complexity: O(1)
  // ------------------------------------------
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.items[this.front];
  }

  // ------------------------------------------
  // Print
  // Displays the queue
  // ------------------------------------------
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }

    let result = "";

    for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      result += this.items[i] + ", ";
    }

    result += this.items[this.rear];

    console.log(result);
  }
}

// ------------------------------------------
// Using the Circular Queue
// ------------------------------------------

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
// true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
// 10, 20, 30

console.log(queue.peek());
// 10

console.log(queue.dequeue());
// 10

queue.print();
// 20, 30

queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);

queue.print();
// 20, 30, 40, 50, 60

console.log(queue.isFull());
// true

console.log(queue.dequeue());
// 20

queue.enqueue(70);

queue.print();
// 30, 40, 50, 60, 70

console.log(queue.peek());
// 30

/*
==========================================
Understanding Circular Queues
==========================================

A Circular Queue is a fixed-size
queue that follows the FIFO
(First In, First Out) principle.

Unlike a normal queue, it reuses
empty spaces after dequeueing.

==========================================
Why is it Circular?
==========================================

When the rear reaches the end
of the array, it wraps around
to the beginning.

This is done using the modulus
operator.

Example

rear = (rear + 1) % capacity

If:

capacity = 5

rear = 4

(4 + 1) % 5

= 0

The rear wraps back to index 0.

==========================================
Internal State
==========================================

items

[10, 20, 30, null, null]

front = 0

rear = 2

------------------------------------------

After dequeue()

items

[null, 20, 30, null, null]

front = 1

rear = 2

------------------------------------------

After enqueue(40)

items

[null, 20, 30, 40, null]

rear = 3

------------------------------------------

Eventually the rear wraps
back to index 0.

==========================================
Why Keep currentLength?
==========================================

Without currentLength,

front == rear

could mean either

- Empty queue

or

- Full queue

Keeping track of the number of
elements removes this ambiguity.

==========================================
Time Complexity
==========================================

Enqueue
O(1)

------------------------------------------

Dequeue
O(1)

------------------------------------------

Peek
O(1)

------------------------------------------

isEmpty
O(1)

------------------------------------------

isFull
O(1)

==========================================
Advantages
==========================================

- Fixed memory usage
- No shifting of elements
- Reuses empty spaces
- Constant-time operations

==========================================
Common Applications
==========================================

- CPU Scheduling
- Printer Buffers
- Keyboard Buffers
- Audio Streaming
- Video Streaming
- Network Packet Buffers

==========================================
Final Answer
==========================================

Enqueue    : O(1)
Dequeue    : O(1)
Peek        : O(1)
isEmpty     : O(1)
isFull      : O(1)
*/
