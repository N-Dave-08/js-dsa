# 🔁 Problem: Recursive Fibonacci Sequence

## Problem Statement

Given a non-negative integer **`n`**, find the **nth Fibonacci number** using **recursion**.

---

# 📖 What is the Fibonacci Sequence?

The **Fibonacci sequence** is a sequence in which each number is the sum of the **two preceding numbers**.

The sequence starts with:

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

Mathematically:

```text
F(n) = F(n - 1) + F(n - 2)
```

---

# Examples

```text
recursiveFibonacci(0)
```

Output

```text
0
```

---

```text
recursiveFibonacci(1)
```

Output

```text
1
```

---

```text
recursiveFibonacci(2)
```

Output

```text
1
```

---

```text
recursiveFibonacci(3)
```

Output

```text
2
```

---

```text
recursiveFibonacci(6)
```

Output

```text
8
```

Sequence:

```text
Index : 0  1  2  3  4  5  6

Value : 0, 1, 1, 2, 3, 5, 8
```

---

# 🧠 Recursive Thinking

Instead of solving:

```text
F(6)
```

directly, recursion breaks it into smaller problems.

```text
F(6)

↓

F(5) + F(4)
```

But now:

```text
F(5)

↓

F(4) + F(3)
```

and

```text
F(4)

↓

F(3) + F(2)
```

Each problem becomes **smaller versions of the same problem**.

---

# 🌳 Recursion Tree

```text
F(6)
├── F(5)
│   ├── F(4)
│   │   ├── F(3)
│   │   └── F(2)
│   └── F(3)
└── F(4)
    ├── F(3)
    └── F(2)
```

Notice that many values are calculated **multiple times**.

For example:

```text
F(4)

F(3)

F(2)
```

are repeatedly recomputed.

---

# 🔑 Base Case

Every recursive solution needs a **base case**.

For Fibonacci:

```text
F(0) = 0

F(1) = 1
```

Once recursion reaches either of these values, it stops.

---

# 📝 Algorithm

1. If `n` is `0`, return `0`.
2. If `n` is `1`, return `1`.
3. Otherwise:
   - Return `recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)`.

---

# ⚡ Complexity Analysis

## Time Complexity

```text
O(2ⁿ)
```

Each recursive call creates **two more recursive calls**, causing the number of function calls to grow exponentially.

---

## Space Complexity

```text
O(n)
```

The maximum depth of the recursive call stack is `n`.

---

# 💡 Tips for Solving Recursive Problems

- Break the problem into **smaller versions of the same problem**.
- Identify the **base case** that stops the recursion.
- Make sure each recursive call gets closer to the base case.

---

# 📝 Key Takeaways

- Fibonacci is a classic example of recursion.
- The recursive formula is:

```text
F(n) = F(n - 1) + F(n - 2)
```

- Base cases:
  - `F(0) = 0`
  - `F(1) = 1`
- Recursive Fibonacci is easy to understand but **inefficient** because it recalculates the same values many times.
- **Time Complexity:** `O(2ⁿ)`
- **Space Complexity:** `O(n)`
