# 🗂️ Data Structures

## What is a Data Structure?

A **data structure** is a way of **organizing, storing, and managing data** so it can be accessed and modified efficiently.

While an **algorithm** tells us **how to solve a problem**, a **data structure** determines **how the data is organized**.

---

# 📦 Storage Analogy

```text
+----------------+      +----------------------+      +----------------+
|      Data      | ---> |   Data Structure     | ---> | Organized Data |
+----------------+      +----------------------+      +----------------+
```

Imagine you have a pile of books.

Without organization:

```text
📚 📚 📚 📚 📚
```

Finding one specific book takes time.

If you organize them on a bookshelf:

```text
+---------+
| Book A  |
| Book B  |
| Book C  |
| Book D  |
+---------+
```

Finding a book becomes much easier.

A **data structure** organizes data in the same way.

---

# 💻 Programming Example

Suppose we want to store a list of numbers.

Without a data structure:

```text
5
8
2
10
```

Using an **Array**:

```text
+-----+-----+-----+------+
|  5  |  8  |  2  |  10  |
+-----+-----+-----+------+
   0     1     2      3
```

We can easily access:

```js
numbers[2];
```

Output

```text
2
```

---

# 🧠 Why Do We Need Data Structures?

Different problems require different ways of storing data.

For example:

- A browser's back button keeps track of previously visited pages.
- A music playlist stores songs in order.
- A navigation app finds the shortest path between locations.
- A social media app stores relationships between users.

Using the right data structure makes programs:

- Faster
- More efficient
- Easier to maintain

---

# 🛠️ Common Data Structures

## 1. Array

Stores elements in contiguous memory.

```text
[10, 20, 30, 40]
```

Best for:

- Fast access by index
- Sequential data

Examples:

- List of products
- Student grades
- Monthly sales

---

## 2. Object (Hash Map / Dictionary)

Stores data as key-value pairs.

```js
{
  name: "John",
  age: 25
}
```

Best for:

- Fast lookups by key

Examples:

- User profiles
- Configuration settings
- Product information

---

## 3. Stack (LIFO)

Last In, First Out.

Visualization:

```text
    Top
     ↓
+-------+
|   C   |
+-------+
|   B   |
+-------+
|   A   |
+-------+
```

Operations:

```text
Push
Pop
Peek
```

Examples:

- Undo feature
- Browser history
- Function call stack

---

## 4. Queue (FIFO)

First In, First Out.

Visualization:

```text
Front                     Rear

+-----+-----+-----+
|  A  |  B  |  C  |
+-----+-----+-----+
```

Operations:

```text
Enqueue
Dequeue
Front
```

Examples:

- Printer queue
- Customer service line
- Task scheduling

---

## 5. Linked List

Stores elements as connected nodes.

Visualization:

```text
+------+     +------+     +------+
| 10 | •| -->| 20 | •| -->| 30 |X|
+------+     +------+     +------+
```

Best for:

- Frequent insertions
- Frequent deletions

---

## 6. Tree

Stores data hierarchically.

Visualization:

```text
        A
      /   \
     B     C
    / \   / \
   D  E  F  G
```

Examples:

- File systems
- HTML DOM
- Organization charts

---

## 7. Graph

Stores relationships between objects.

Visualization:

```text
A ----- B
|       |
|       |
C ----- D
```

Examples:

- Social networks
- Google Maps
- Flight routes

---

## 8. Set

Stores unique values.

```text
{1, 2, 3}
```

Duplicate values are ignored.

Examples:

- Unique usernames
- Tags
- Categories

---

# ⚖️ Choosing the Right Data Structure

| Problem                | Data Structure |
| ---------------------- | -------------- |
| Ordered collection     | Array          |
| Fast key lookup        | Object / Map   |
| Undo operations        | Stack          |
| Waiting line           | Queue          |
| Frequent insert/delete | Linked List    |
| Hierarchical data      | Tree           |
| Relationships          | Graph          |
| Unique values          | Set            |

---

# 🔄 Algorithms vs Data Structures

| Algorithm             | Data Structure           |
| --------------------- | ------------------------ |
| Solves a problem      | Stores data              |
| Defines the steps     | Defines the organization |
| Focuses on processing | Focuses on storage       |

Think of them together:

```text
Data
      ↓
Data Structure
      ↓
Algorithm
      ↓
Solution
```

---

# ✨ Characteristics of a Good Data Structure

- Organizes data efficiently.
- Supports fast operations.
- Matches the problem requirements.
- Reduces memory or execution time when appropriate.

---

# ❓ Why Learn Data Structures?

- They make programs more efficient.
- Choosing the right data structure often improves performance more than changing the algorithm.
- Most technical interviews test knowledge of common data structures.
- Every modern application relies on them.

---

# 💡 Key Takeaways

- A **data structure** organizes and stores data efficiently.
- Different problems require different data structures.
- Algorithms and data structures work together.
- Choosing the right data structure can significantly improve a program's performance.
- Learning data structures is essential for becoming a better software developer.
