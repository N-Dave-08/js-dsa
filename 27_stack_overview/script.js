// ==========================================
// Stack Using a Class (Array Implementation)
// ==========================================

// A Stack follows the Last In, First Out (LIFO)
// principle.
//
// The last element added is the first
// element removed.

class Stack {
  constructor() {
    // The array used to store stack elements.
    this.items = [];
  }

  // ------------------------------------------
  // Push
  // Adds an element to the top of the stack
  // Time Complexity: O(1)
  // ------------------------------------------
  push(element) {
    this.items.push(element);
  }

  // ------------------------------------------
  // Pop
  // Removes and returns the top element
  // Time Complexity: O(1)
  // ------------------------------------------
  pop() {
    return this.items.pop();
  }

  // ------------------------------------------
  // Peek
  // Returns the top element without removing it
  // Time Complexity: O(1)
  // ------------------------------------------
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }

    return null;
  }

  // ------------------------------------------
  // isEmpty
  // Checks whether the stack is empty
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
  // Displays the stack
  // ------------------------------------------
  print() {
    console.log(this.items);
  }
}

// ------------------------------------------
// Using the Stack
// ------------------------------------------

const stack = new Stack();

console.log(stack.isEmpty());
// true

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
// [10, 20, 30]

console.log(stack.size());
// 3

console.log(stack.peek());
// 30

console.log(stack.pop());
// 30

stack.print();
// [10, 20]

console.log(stack.peek());
// 20

console.log(stack.isEmpty());
// false

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
Stack Class
==========================================

constructor()

Creates an empty stack.

------------------------------------------

push(element)

Adds an element to the top.

------------------------------------------

pop()

Removes and returns the top element.

------------------------------------------

peek()

Returns the top element without
removing it.

------------------------------------------

isEmpty()

Returns true if the stack has
no elements.

------------------------------------------

size()

Returns the number of elements.

------------------------------------------

print()

Displays the stack contents.

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
Why Use a Class?
==========================================

Using a class groups the stack's
data and operations together.

Instead of manipulating an array
directly, users interact through
methods like:

- push()
- pop()
- peek()
- size()
- isEmpty()

This follows the principles of
encapsulation and object-oriented
programming.

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

Push       : O(1)
Pop        : O(1)
Peek       : O(1)
Size       : O(1)
isEmpty    : O(1)
*/
