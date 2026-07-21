# 🔗 Linked List

## What is a Linked List?

A **Linked List** is a linear data structure where elements are stored in **nodes**.

Unlike an array, the elements are **not stored next to each other in memory**.

Instead, each node stores:

- The **data (value)**
- A **reference (pointer)** to the next node

Because each node points to the next one, they form a chain.

---

# 📖 Why Use a Linked List?

Arrays store elements in contiguous memory.

```text
Array

Index

0     1     2     3
+-----+-----+-----+-----+
| 10  | 20  | 30  | 40  |
+-----+-----+-----+-----+
```

In a Linked List:

```text
Head
 │
 ▼

+------+------+
| 10   |  •───┼────►
+------+------+

            +------+------+
            | 20   |  •───┼────►
            +------+------+

                        +------+------+
                        | 30   |  •───┼────►
                        +------+------+

                                    +------+------+
                                    | 40   | null |
                                    +------+------+
```

Each node knows where the next node is located.

---

# 🧩 Structure of a Node

Each node contains two parts.

```text
+------+------+
| Data | Next |
+------+------+
```

Example:

```text
+------+------+
| 10   |  •───┼────►
+------+------+
```

- **Data** stores the value.
- **Next** stores the reference to the next node.

The last node points to:

```text
null
```

which indicates the end of the list.

---

# 🧠 Head Pointer

Every Linked List starts with a **head**.

The head stores a reference to the first node.

```text
Head
 │
 ▼

+------+------+
| 10   |  •───┼────►
+------+------+
```

If the list is empty:

```text
Head

null
```

---

# 🔄 Traversing a Linked List

To visit every element, start from the head.

```text
Head
 │
 ▼

10 → 20 → 30 → 40 → null
```

Traversal order:

```text
10

↓

20

↓

30

↓

40

↓

null
```

Unlike arrays, you cannot jump directly to the third element.

You must follow each node one by one.

---

# ➕ Inserting a Node

Suppose we have:

```text
10 → 30 → null
```

Insert **20**.

Before:

```text
Head

10 ─────► 30 ─────► null
```

After:

```text
Head

10 ─────► 20 ─────► 30 ─────► null
```

Only the references change.

No elements need to be shifted.

---

# ➖ Removing a Node

Suppose:

```text
10 → 20 → 30 → 40
```

Remove **20**.

Before:

```text
10 ─────► 20 ─────► 30 ─────► 40
```

After:

```text
10 ─────────────────► 30 ─────► 40
```

The previous node simply skips over the removed node.

---

# 📊 Array vs Linked List

| Array                                 | Linked List                                |
| ------------------------------------- | ------------------------------------------ |
| Contiguous memory                     | Nodes stored anywhere in memory            |
| Fast random access                    | Sequential access only                     |
| Fixed index                           | No indexes                                 |
| Expensive insert/delete in the middle | Efficient insert/delete when node is known |
| Better cache performance              | Extra memory for pointers                  |

---

# ⚡ Time Complexity

| Operation           |              Array | Linked List |
| ------------------- | -----------------: | ----------: |
| Access by Index     |             `O(1)` |      `O(n)` |
| Search              |             `O(n)` |      `O(n)` |
| Insert at Beginning |             `O(n)` |      `O(1)` |
| Insert at End\*     | `O(1)` (amortized) |      `O(n)` |
| Delete at Beginning |             `O(n)` |      `O(1)` |
| Delete at End       |             `O(1)` |      `O(n)` |

> **Note:** A basic singly linked list only stores a **head** pointer. Appending to the end requires traversing the list, making it `O(n)`. If a **tail** pointer is also maintained, inserting at the end becomes `O(1)`.

---

# 👍 Advantages

- Dynamic size.
- Efficient insertion and deletion at the beginning.
- No shifting of elements.
- Memory is allocated as needed.
- Easy to grow and shrink.

---

# 👎 Disadvantages

- No direct index access.
- Traversal is slower than arrays.
- Extra memory is required for storing pointers.
- Reverse traversal is not possible in a singly linked list.

---

# 💼 Real-World Applications

Linked Lists are commonly used in:

- Music playlists
- Browser history
- Undo/Redo functionality
- Image viewers (Next / Previous)
- Implementing Stacks
- Implementing Queues
- Hash table collision handling
- Memory management

---

# 💡 Key Takeaways

- A Linked List is made up of **nodes**.
- Each node stores **data** and a **reference to the next node**.
- Elements are **not stored contiguously in memory**.
- A Linked List starts with a **head** pointer.
- The last node points to **null**.
- Accessing an element requires traversing from the head.
- Insertions and deletions are efficient because nodes are relinked instead of shifted.
- Linked Lists are ideal when the collection changes size frequently.
