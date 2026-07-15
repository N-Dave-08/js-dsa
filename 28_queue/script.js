// ==========================================
// Queue Using a Class (Array Implementation)
// ==========================================

// A Queue follows the First In, First Out (FIFO)
// principle.
//
// The first element added is the first
// element removed.

class Queue {
  constructor() {
    // The array used to store queue elements.
    this.items = [];
  }

  // ------------------------------------------
  // Enqueue
  // Adds an element to the rear of the queue
  // Time Complexity: O(1)
  // ------------------------------------------
  enqueue(element) {
    this.items.push(element);
  }

  // ------------------------------------------
  // Dequeue
  // Removes and returns the front element
  // Time Complexity: O(n)
  // ------------------------------------------
  dequeue() {
    return this.items.shift();
  }

  // ------------------------------------------
  // Peek
  // Returns the front element without removing it
  // Time Complexity: O(1)
  // ------------------------------------------
  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }

    return null;
  }

  // ------------------------------------------
  // isEmpty
  // Checks whether the queue is empty
  // Time Complexity: O(1)
  // ------------------------------------------
  isEmpty() {
    return this.items.length === 0;
  }

  // ------------------------------------------
  // Size
  // Returns the number of elements
  // Time Complexity: O(1)
  // ------------------------------------------
  size() {
    return this.items.length;
  }

  // ------------------------------------------
  // Print
  // Displays the queue
  // ------------------------------------------
  print() {
    console.log(this.items.toString());
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
// 10,20,30

console.log(queue.size());
// 3

console.log(queue.peek());
// 10

console.log(queue.dequeue());
// 10

queue.print();
// 20,30

console.log(queue.peek());
// 20

console.log(queue.isEmpty());
// false

/*
==========================================
Understanding Queues
==========================================

A Queue is a linear data structure
that follows the First In, First Out
(FIFO) principle.

The first element added is always
the first element removed.

Think of people waiting in line.

The first person to join the line
is the first person to be served.

==========================================
FIFO Example
==========================================

Enqueue 10

Front -> 10 <- Rear

------------------------------------------

Enqueue 20

Front -> 10 20 <- Rear

------------------------------------------

Enqueue 30

Front -> 10 20 30 <- Rear

------------------------------------------

Dequeue

10 is removed.

Front -> 20 30 <- Rear

==========================================
Queue Class
==========================================

constructor()

Creates an empty queue.

------------------------------------------

enqueue(element)

Adds an element to the rear.

------------------------------------------

dequeue()

Removes and returns the front element.

------------------------------------------

peek()

Returns the front element without
removing it.

------------------------------------------

isEmpty()

Returns true if the queue has
no elements.

------------------------------------------

size()

Returns the number of elements.

------------------------------------------

print()

Displays the queue contents.

==========================================
Time Complexity
==========================================

Enqueue
O(1)

------------------------------------------

Dequeue
O(n)

shift() removes the first element,
then every remaining element must
be shifted one position to the left.

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
Why Use a Class?
==========================================

Using a class groups the queue's
data and operations together.

Instead of manipulating an array
directly, users interact through
methods like:

- enqueue()
- dequeue()
- peek()
- size()
- isEmpty()

This follows the principles of
encapsulation and object-oriented
programming.

==========================================
Real-World Applications
==========================================

- Waiting Lines
- Print Queue
- Task Scheduling
- Message Queues
- Breadth-First Search (BFS)

==========================================
Final Answer
==========================================

Enqueue    : O(1)
Dequeue    : O(n)
Peek        : O(1)
Size        : O(1)
isEmpty     : O(1)
*/
