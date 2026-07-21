# 🔄 Circular Queue

## What is a Circular Queue?

A **Circular Queue** is a linear data structure that follows the **First In, First Out (FIFO)** principle.

Unlike a regular queue, the **size of a circular queue is fixed**, and the last position is connected back to the first position, forming a circle.

Because of this circular structure, a circular queue can **reuse the empty spaces** created after dequeue operations instead of wasting them.

A Circular Queue is also known as a:

- Circular Buffer
- Ring Buffer

---

# 📖 Why Do We Need a Circular Queue?

Consider a regular queue implemented using a fixed-size array.

Suppose the queue has a capacity of **5**.

Initial queue:

```text
Front                    Rear

+----+----+----+----+----+
|    |    |    |    |    |
+----+----+----+----+----+
```

---

Enqueue **10**, **20**, **30**, **40**, **50**

```text
Front                    Rear
  ▼                        ▼

+----+----+----+----+----+
| 10 | 20 | 30 | 40 | 50 |
+----+----+----+----+----+
```

Now the queue is full.

---

Dequeue twice.

```text
Front              Rear
        ▼            ▼

+----+----+----+----+----+
|    |    | 30 | 40 | 50 |
+----+----+----+----+----+
```

Although there are empty spaces at the beginning, a normal fixed-size queue cannot reuse them without shifting elements.

This wastes memory.

A **Circular Queue** solves this problem by wrapping around to the beginning of the array.

---

# 🔄 Circular Behavior

Suppose we have a queue with a capacity of **5**.

After removing the first two elements:

```text
Front              Rear

+----+----+----+----+----+
|    |    | 30 | 40 | 50 |
+----+----+----+----+----+
```

The next enqueue operation places the new element at the beginning.

Enqueue **60**

```text
Rear wraps around

+----+----+----+----+----+
| 60 |    | 30 | 40 | 50 |
+----+----+----+----+----+
```

Enqueue **70**

```text
+----+----+----+----+----+
| 60 | 70 | 30 | 40 | 50 |
+----+----+----+----+----+
```

The queue has reused the available space.

---

# 🧠 Circular Queue Visualization

```text
           Front
             │
             ▼

      +---------------+
     /                 \
    ▼                   ▲
+----+----+----+----+----+
| 10 | 20 | 30 | 40 | 50 |
+----+----+----+----+----+
    ▲                   ▼
     \                 /
      +---------------+

             Rear
```

The last position connects back to the first position.

---

# 🔧 Common Circular Queue Operations

| Operation   | Description                    |
| ----------- | ------------------------------ |
| `enqueue()` | Adds an element to the rear    |
| `dequeue()` | Removes the front element      |
| `peek()`    | Returns the front element      |
| `isEmpty()` | Checks if the queue is empty   |
| `isFull()`  | Checks if the queue is full    |
| `size()`    | Returns the number of elements |

---

# 📦 How Wrapping Works

Instead of continuously increasing the index, we use the **modulus (`%`) operator**.

```text
nextIndex = (currentIndex + 1) % capacity
```

Example

Capacity = **5**

```text
Current Rear = 4

(4 + 1) % 5

5 % 5

0
```

The rear wraps back to index **0**.

Another example

```text
Current Rear = 2

(2 + 1) % 5

3
```

The rear simply moves to the next position.

---

# 💻 Typical Internal Representation

```text
Capacity = 5

Items

+----+----+----+----+----+
| 60 | 70 | 30 | 40 | 50 |
+----+----+----+----+----+

Front = 2

Rear = 1
```

Although the rear index is smaller than the front index, the queue still works correctly because it is circular.

---

# ⚡ Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Enqueue   | `O(1)`          |
| Dequeue   | `O(1)`          |
| Peek      | `O(1)`          |
| isEmpty   | `O(1)`          |
| isFull    | `O(1)`          |
| Size      | `O(1)`          |

No shifting of elements is required.

---

# 📦 Queue vs Circular Queue

| Queue                     | Circular Queue               |
| ------------------------- | ---------------------------- |
| FIFO                      | FIFO                         |
| May waste empty spaces    | Reuses empty spaces          |
| Rear only moves forward   | Rear wraps around            |
| Better for dynamic queues | Better for fixed-size queues |

---

# 💡 When Should You Use a Circular Queue?

A Circular Queue is a great choice when:

- The maximum size is known.
- Memory usage should be efficient.
- Elements are frequently added and removed.
- Fast enqueue and dequeue operations are required.

Common applications include:

- CPU Scheduling
- Printer Buffers
- Keyboard Buffers
- Streaming Data
- Network Packet Buffers
- Embedded Systems

---

# 💡 Key Takeaways

- A Circular Queue follows the **FIFO** principle.
- It has a **fixed capacity**.
- The last position connects back to the first.
- Empty spaces created by dequeue operations are reused.
- The modulus (`%`) operator is used to wrap around.
- All major operations run in **O(1)** time.
- Circular queues are commonly used in buffering and scheduling systems.
