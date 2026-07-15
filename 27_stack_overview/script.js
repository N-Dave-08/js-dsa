// ==========================================
// Stack Using an Array
// ==========================================

// A stack follows the Last In, First Out (LIFO)
// principle.
//
// The last element added is the first
// element removed.

// ------------------------------------------
// Creating a Stack
// ------------------------------------------

const stack = [];

console.log(stack);
// []

// ------------------------------------------
// Push
// Adds an element to the top of the stack
// Time Complexity: O(1)
// ------------------------------------------

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack);
// [10, 20, 30]

// ------------------------------------------
// Peek
// Returns the top element without removing it
// Time Complexity: O(1)
// ------------------------------------------

console.log(stack[stack.length - 1]);
// 30

// ------------------------------------------
// Pop
// Removes the top element
// Time Complexity: O(1)
// ------------------------------------------

const removedItem = stack.pop();

console.log(removedItem);
// 30

console.log(stack);
// [10, 20]

// ------------------------------------------
// Size
// Returns the number of elements
// Time Complexity: O(1)
// ------------------------------------------

console.log(stack.length);
// 2

// ------------------------------------------
// isEmpty
// Checks whether the stack is empty
// Time Complexity: O(1)
// ------------------------------------------

console.log(stack.length === 0);
// false

// ------------------------------------------
// Emptying the Stack
// ------------------------------------------

while (stack.length > 0) {
  console.log(`Removed: ${stack.pop()}`);
}

/*
Removed: 20
Removed: 10
*/

console.log(stack);
// []

console.log(stack.length === 0);
// true

/*
==========================================
Understanding Stacks
==========================================

A Stack is a linear data structure
that follows the Last In, First Out
(LIFO) principle.

The last element added is always
the first element removed.

Think of a stack of books.

You place a new book on top.

You also remove the top book first.

==========================================
LIFO Example
==========================================

Push 10

Top
 |
 v

10

------------------------------------------

Push 20

Top
 |
 v

20
10

------------------------------------------

Push 30

Top
 |
 v

30
20
10

------------------------------------------

Pop

30 is removed.

Top
 |
 v

20
10

==========================================
Common Stack Operations
==========================================

Push

stack.push(value)

Adds a value to the top.

------------------------------------------

Pop

stack.pop()

Removes the top value.

------------------------------------------

Peek

stack[stack.length - 1]

Returns the top value without
removing it.

------------------------------------------

Size

stack.length

Returns the number of elements.

------------------------------------------

isEmpty

stack.length === 0

Returns true if the stack
contains no elements.

==========================================
Time Complexity
==========================================

Push
O(1)

------------------------------------------

Pop
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
Why Use an Array?
==========================================

JavaScript arrays already provide
everything needed to implement a stack.

push()

Adds to the end.

pop()

Removes from the end.

Since both operations occur at
the end of the array, they are
very efficient.

==========================================
Real-World Applications
==========================================

- Browser Back Button
- Undo / Redo
- Function Call Stack
- Expression Evaluation
- Parentheses Matching
- Depth-First Search (DFS)

==========================================
Final Answer
==========================================

Push      : O(1)
Pop       : O(1)
Peek      : O(1)
Size      : O(1)
isEmpty   : O(1)
*/
