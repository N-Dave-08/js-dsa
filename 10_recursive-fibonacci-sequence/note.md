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

But those problems also become smaller:

```text
F(5)

↓

F(4) + F(3)
```

```text
F(4)

↓

F(3) + F(2)
```

Each recursive call keeps reducing the problem until it reaches the base case.

---

# 🌳 Recursion Tree

```text
F(6)
├── F(5)
│   ├── F(4)
│   │   ├── F(3)
│   │   │   ├── F(2)
│   │   │   └── F(1)
│   │   └── F(2)
│   └── F(3)
└── F(4)
```

Notice that:

```text
F(4)
F(3)
F(2)
```

are calculated multiple times.

This is why the recursive solution is **not very efficient**.

---

# 🔑 Base Case

Every recursive solution needs a **base case**.

For Fibonacci:

```text
F(0) = 0

F(1) = 1
```

When recursion reaches either of these values, it stops.

---

# 📝 Algorithm

1. If `n` is `0`, return `0`.
2. If `n` is `1`, return `1`.
3. Otherwise:
   - Return `recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)`.

---

# 💻 JavaScript Solution

```js
function recursiveFibonacci(n) {
  // Base cases
  if (n < 2) {
    return n;
  }

  // Recursive case
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(6)); // 8
```

---

# 🔍 Dry Run

Find:

```text
recursiveFibonacci(4)
```

Step 1

```text
F(4)

↓

F(3) + F(2)
```

Step 2

```text
F(3)

↓

F(2) + F(1)
```

Step 3

```text
F(2)

↓

F(1) + F(0)
```

Base cases:

```text
F(1) = 1

F(0) = 0
```

Now solve upward:

```text
F(2)

= 1 + 0

= 1
```

```text
F(3)

= F(2) + F(1)

= 1 + 1

= 2
```

```text
F(4)

= F(3) + F(2)

= 2 + 1

= 3
```

Final answer:

```text
recursiveFibonacci(4) = 3
```

---

# ⚡ Complexity Analysis

## Time Complexity

```text
O(2ⁿ)
```

Reason:

Each function call creates **two more recursive calls**, causing the number of calls to grow exponentially.

---

## Space Complexity

```text
O(n)
```

Reason:

The maximum depth of the recursive call stack is `n`.

---

# 💡 Tips for Solving Recursive Problems

- Break the problem into **smaller versions of the same problem**.
- Identify the **base case**.
- Make sure every recursive call moves closer to the base case.
- Always ask yourself:
  - **What is the smallest problem I already know how to solve?**
  - **How can I use that to solve a bigger problem?**

---

# 📝 Key Takeaways

- Recursion is when a function calls itself.
- Fibonacci follows the recursive formula:

```text
F(n) = F(n - 1) + F(n - 2)
```

- Base cases:
  - `F(0) = 0`
  - `F(1) = 1`
- The recursive solution is simple to understand but inefficient because it recalculates the same values many times.
- **Time Complexity:** `O(2ⁿ)`
- **Space Complexity:** `O(n)`
