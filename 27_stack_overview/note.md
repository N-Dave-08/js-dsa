# 📚 Stack

## What is a Stack?

A **Stack** is a linear data structure that follows the **Last In, First Out (LIFO)** principle.

This means that the **last element added** to the stack is the **first element removed**.

Think of a stack as a pile of books. You can only add a new book to the top, and you can only remove the book from the top.

---

# 📖 LIFO (Last In, First Out)

Suppose we add three books to a stack.

```text
Push A

+-----+
|  A  |
+-----+
```

---

```text
Push B

+-----+
|  B  |
+-----+
|  A  |
+-----+
```

---

```text
Push C

+-----+
|  C  |
+-----+
|  B  |
+-----+
|  A  |
+-----+
```

Since **C** was added last, it will be removed first.

```text
Pop

+-----+
|  B  |
+-----+
|  A  |
+-----+
```

---

# 🧠 Real-World Examples

Stacks are commonly used in:

- Browser back and forward history
- Undo and redo operations in text editors
- Function call management (Call Stack)
- Expression evaluation
- Parentheses matching
- Depth-First Search (DFS)

---

# 🔧 Common Stack Operations

| Operation   | Description                                 |
| ----------- | ------------------------------------------- |
| `push()`    | Adds an element to the top of the stack     |
| `pop()`     | Removes the top element                     |
| `peek()`    | Returns the top element without removing it |
| `isEmpty()` | Checks whether the stack is empty           |
| `size()`    | Returns the number of elements              |

---

# 📦 Stack Visualization

Start with an empty stack.

```text
Top
 │
 ▼
+-----+
|     |
+-----+
```

---

Push **10**

```text
Top
 │
 ▼
+-----+
| 10  |
+-----+
```

---

Push **20**

```text
Top
 │
 ▼
+-----+
| 20  |
+-----+
| 10  |
+-----+
```

---

Push **30**

```text
Top
 │
 ▼
+-----+
| 30  |
+-----+
| 20  |
+-----+
| 10  |
+-----+
```

---

Pop

```text
Top
 │
 ▼
+-----+
| 20  |
+-----+
| 10  |
+-----+
```

The value **30** is removed because it was the last one added.

---

# 💻 Implementing a Stack

There are multiple ways to implement a stack in JavaScript.

Using an **Array**

```js
const stack = [];
```

Using a **Linked List**

```text
Top
 │
 ▼
+------+    +------+    +------+
| 30 | •--->| 20 | •--->| 10 | X |
+------+    +------+    +------+
```

In most JavaScript applications, stacks are implemented using **arrays** because they are simple and efficient.

---

# ⚡ Time Complexity

Using an array implementation:

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | `O(1)`          |
| Pop       | `O(1)`          |
| Peek      | `O(1)`          |
| isEmpty   | `O(1)`          |
| Size      | `O(1)`          |

All stack operations occur at the **top** of the stack, so no shifting of elements is required.

---

# 📦 Stack vs Queue

| Stack                                  | Queue                                       |
| -------------------------------------- | ------------------------------------------- |
| Last In, First Out (LIFO)              | First In, First Out (FIFO)                  |
| Insertion and removal occur at the top | Insertion at the rear, removal at the front |
| Uses `push()` and `pop()`              | Uses `enqueue()` and `dequeue()`            |
| Example: Stack of books                | Example: Waiting line                       |

Visualization

Stack

```text
Push → [A][B][C]
             ▲
             Pop
```

Queue

```text
Enqueue → [A][B][C] → Dequeue
```

---

# 💡 When Should You Use a Stack?

Use a stack when:

- The most recently added item should be processed first.
- You need to undo recent actions.
- You need to evaluate expressions.
- You are solving recursive problems.
- You are performing Depth-First Search (DFS).

Examples include:

- Browser history
- Undo/Redo
- Call Stack
- Balanced parentheses
- DFS traversal

---

# 💡 Key Takeaways

- A Stack follows the **Last In, First Out (LIFO)** principle.
- Elements are added and removed from the **top**.
- The main operations are **push**, **pop**, and **peek**.
- Stack operations are **O(1)** when implemented with an array.
- Stacks are commonly used for recursion, browser history, undo functionality, and depth-first search.
