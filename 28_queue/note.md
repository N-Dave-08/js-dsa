# 🚶 Queue

## What is a Queue?

A **Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle.

This means that the **first element added** to the queue is the **first element removed**.

Think of a queue as people waiting in line. The person who joins the line first is the first person to be served.

---

# 📖 FIFO (First In, First Out)

Suppose three people join a queue.

```text
Enqueue A

Front
  │
  ▼
+-----+
|  A  |
+-----+
Rear
```

---

```text
Enqueue B

Front
  │
  ▼
+-----+-----+
|  A  |  B  |
+-----+-----+
          ▲
        Rear
```

---

```text
Enqueue C

Front
  │
  ▼
+-----+-----+-----+
|  A  |  B  |  C  |
+-----+-----+-----+
                ▲
              Rear
```

Since **A** entered first, it will leave first.

```text
Dequeue

Front
  │
  ▼
+-----+-----+
|  B  |  C  |
+-----+-----+
          ▲
        Rear
```

---

# 🧠 Real-World Examples

Queues are commonly used in:

- Waiting lines
- Printer job scheduling
- Customer service systems
- Task scheduling
- Breadth-First Search (BFS)
- Message queues

---

# 🔧 Common Queue Operations

| Operation   | Description                                   |
| ----------- | --------------------------------------------- |
| `enqueue()` | Adds an element to the rear of the queue      |
| `dequeue()` | Removes the front element                     |
| `peek()`    | Returns the front element without removing it |
| `isEmpty()` | Checks whether the queue is empty             |
| `size()`    | Returns the number of elements                |

---

# 📦 Queue Visualization

Start with an empty queue.

```text
Front         Rear
  │             │
  ▼             ▼

+-------------+
|             |
+-------------+
```

---

Enqueue **10**

```text
Front Rear
  │     │
  ▼     ▼

+------+
|  10  |
+------+
```

---

Enqueue **20**

```text
Front     Rear
  │         │
  ▼         ▼

+------+------+
|  10  |  20  |
+------+------+
```

---

Enqueue **30**

```text
Front           Rear
  │               │
  ▼               ▼

+------+------+------+
|  10  |  20  |  30  |
+------+------+------+
```

---

Dequeue

```text
Front     Rear
  │         │
  ▼         ▼

+------+------+
|  20  |  30  |
+------+------+
```

The value **10** is removed because it was the first one added.

---

# 💻 Implementing a Queue

There are multiple ways to implement a queue in JavaScript.

Using an **Array**

```js
const queue = [];
```

Using a **Linked List**

```text
Front
  │
  ▼

+------+    +------+    +------+
| 10 | •--->| 20 | •--->| 30 | X |
+------+    +------+    +------+

                           ▲
                         Rear
```

Although queues can be implemented using arrays, repeatedly removing the first element with `shift()` is inefficient because the remaining elements must be re-indexed.

A linked list provides a more efficient implementation.

---

# ⚡ Time Complexity

Using an array implementation:

| Operation         | Time Complexity |
| ----------------- | --------------- |
| Enqueue (`push`)  | `O(1)`          |
| Dequeue (`shift`) | `O(n)`          |
| Peek              | `O(1)`          |
| isEmpty           | `O(1)`          |
| Size              | `O(1)`          |

> **Note:** `shift()` is `O(n)` because every remaining element must be moved one position to the left.

---

# 📦 Stack vs Queue

| Stack                       | Queue                                  |
| --------------------------- | -------------------------------------- |
| Last In, First Out (LIFO)   | First In, First Out (FIFO)             |
| Add and remove from the top | Add at the rear, remove from the front |
| Uses `push()` and `pop()`   | Uses `enqueue()` and `dequeue()`       |
| Example: Stack of books     | Example: Waiting line                  |

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

# 💡 When Should You Use a Queue?

Use a queue when:

- The first item added should be processed first.
- Tasks must be handled in arrival order.
- You are implementing scheduling systems.
- You are solving Breadth-First Search (BFS).
- You are processing requests in sequence.

Examples include:

- Waiting lines
- Print queues
- Task scheduling
- Message queues
- BFS traversal

---

# 💡 Key Takeaways

- A Queue follows the **First In, First Out (FIFO)** principle.
- Elements are added at the **rear** and removed from the **front**.
- The main operations are **enqueue**, **dequeue**, and **peek**.
- An array implementation has an **O(n)** dequeue operation because of `shift()`.
- A linked list provides a more efficient queue implementation.
- Queues are commonly used for scheduling, request processing, and breadth-first search.
