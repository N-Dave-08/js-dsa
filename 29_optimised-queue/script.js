// ==========================================
// Optimized Queue Using an Object
// ==========================================

// This implementation avoids using Array.shift(),
// making both enqueue() and dequeue() O(1).

class Queue {
  constructor() {
    // Stores queue elements.
    this.items = {};

    // Index of the front element.
    this.front = 0;

    // Index where the next element will be inserted.
    this.rear = 0;
  }

  // ------------------------------------------
  // Enqueue
  // Adds an element to the rear of the queue
  // Time Complexity: O(1)
  // ------------------------------------------
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
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

    delete this.items[this.front];

    this.front++;

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
  // isEmpty
  // Checks whether the queue is empty
  // Time Complexity: O(1)
  // ------------------------------------------
  isEmpty() {
    return this.rear - this.front === 0;
  }

  // ------------------------------------------
  // Size
  // Returns the number of elements
  // Time Complexity: O(1)
  // ------------------------------------------
  size() {
    return this.rear - this.front;
  }

  // ------------------------------------------
  // Print
  // Displays the queue
  // ------------------------------------------
  print() {
    console.log(this.items);
  }
}

// ------------------------------------------
// Using the Queue
// ------------------------------------------

const queue = new Queue();

console.log(queue.isEmpty());
// true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
// { '0': 10, '1': 20, '2': 30 }

console.log(queue.size());
// 3

console.log(queue.peek());
// 10

console.log(queue.dequeue());
// 10

queue.print();
// { '1': 20, '2': 30 }

console.log(queue.peek());
// 20

queue.enqueue(40);

queue.print();
// { '1': 20, '2': 30, '3': 40 }

console.log(queue.dequeue());
// 20

queue.print();
// { '2': 30, '3': 40 }

console.log(queue.size());
// 2

console.log(queue.isEmpty());
// false

/*
==========================================
Understanding the Optimized Queue
==========================================

Unlike the array implementation,
this queue stores elements inside
an object.

Example

{
  0: 10,
  1: 20,
  2: 30
}

Instead of shifting every element
after a dequeue(), two pointers
are maintained:

front -> first element

rear -> next insertion position

==========================================
Why is this Faster?
==========================================

Array Queue

dequeue()

Uses shift()

Every remaining element is moved
one position to the left.

Time Complexity

O(n)

------------------------------------------

Optimized Queue

dequeue()

Simply:

1. Read the front element.
2. Delete it.
3. Increment front.

No elements are moved.

Time Complexity

O(1)

==========================================
Visualization
==========================================

After enqueue(10)

front = 0
rear = 1

{
  0: 10
}

------------------------------------------

enqueue(20)

front = 0
rear = 2

{
  0: 10,
  1: 20
}

------------------------------------------

enqueue(30)

front = 0
rear = 3

{
  0: 10,
  1: 20,
  2: 30
}

------------------------------------------

dequeue()

Removes key 0

front = 1
rear = 3

{
  1: 20,
  2: 30
}

Notice that nothing shifts.

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

Size
O(1)

------------------------------------------

isEmpty
O(1)

==========================================
Advantages
==========================================

- No shifting of elements
- Constant-time enqueue
- Constant-time dequeue
- Efficient for large queues

==========================================
Final Answer
==========================================

Enqueue    : O(1)
Dequeue    : O(1)
Peek        : O(1)
Size        : O(1)
isEmpty     : O(1)
*/
