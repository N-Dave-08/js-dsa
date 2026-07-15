// ==========================================
// Queue Using an Array
// ==========================================

// A queue follows the First In, First Out (FIFO)
// principle.
//
// The first element added is the first
// element removed.

// ------------------------------------------
// Creating a Queue
// ------------------------------------------

const queue = [];

console.log(queue);
// []

// ------------------------------------------
// Enqueue
// Adds an element to the rear of the queue
// Time Complexity: O(1)
// ------------------------------------------

queue.push(10);
queue.push(20);
queue.push(30);

console.log(queue);
// [10, 20, 30]

// ------------------------------------------
// Peek
// Returns the front element without removing it
// Time Complexity: O(1)
// ------------------------------------------

console.log(queue[0]);
// 10

// ------------------------------------------
// Dequeue
// Removes the front element
// Time Complexity: O(n)
// ------------------------------------------

const removedItem = queue.shift();

console.log(removedItem);
// 10

console.log(queue);
// [20, 30]

// ------------------------------------------
// Size
// Returns the number of elements
// Time Complexity: O(1)
// ------------------------------------------

console.log(queue.length);
// 2

// ------------------------------------------
// isEmpty
// Checks whether the queue is empty
// Time Complexity: O(1)
// ------------------------------------------

console.log(queue.length === 0);
// false

// ------------------------------------------
// Emptying the Queue
// ------------------------------------------

while (queue.length > 0) {
  console.log(`Removed: ${queue.shift()}`);
}

/*
Removed: 20
Removed: 30
*/

console.log(queue);
// []

console.log(queue.length === 0);
// true

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
Common Queue Operations
==========================================

Enqueue

queue.push(value)

Adds a value to the rear.

------------------------------------------

Dequeue

queue.shift()

Removes the front value.

------------------------------------------

Peek

queue[0]

Returns the front value without
removing it.

------------------------------------------

Size

queue.length

Returns the number of elements.

------------------------------------------

isEmpty

queue.length === 0

Returns true if the queue
contains no elements.

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
Why Use an Array?
==========================================

JavaScript arrays provide built-in
methods for implementing a queue.

push()

Adds an element to the end.

shift()

Removes an element from the front.

Although simple, shift() has a
time complexity of O(n), making
arrays less efficient for queues
with many dequeue operations.

A linked list implementation can
perform both enqueue and dequeue
in O(1) time.

==========================================
Real-World Applications
==========================================

- Waiting Lines
- Print Queue
- Task Scheduling
- Message Queues
- Breadth-First Search (BFS)

==========================================
Stack vs Queue
==========================================

Stack

- Last In, First Out (LIFO)
- push() / pop()

Queue

- First In, First Out (FIFO)
- enqueue() / dequeue()

==========================================
Final Answer
==========================================

Enqueue    : O(1)
Dequeue    : O(n)
Peek        : O(1)
Size        : O(1)
isEmpty     : O(1)

*/
