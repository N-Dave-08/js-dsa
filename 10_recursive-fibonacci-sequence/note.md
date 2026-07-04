# 🔁 Problem: Recursive Fibonacci Sequence

## Problem Statement

Given a non-negative integer **`n`**, return the **nth** element of the Fibonacci sequence using **recursion**.

---

# 📘 What is the Fibonacci Sequence?

The Fibonacci sequence is a sequence of numbers where each number is the sum of the **two previous numbers**.

The first two numbers are:

```text
0, 1
```

The sequence continues as:

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

---

# 📝 Examples

```text
recursiveFibonacci(0)
```

Output:

```text
0
```

---

```text
recursiveFibonacci(1)
```

Output:

```text
1
```

---

```text
recursiveFibonacci(2)
```

Output:

```text
1
```

---

```text
recursiveFibonacci(3)
```

Output:

```text
2
```

---

```text
recursiveFibonacci(6)
```

Output:

```text
8
```

---

# 💡 How Recursion Solves It

To find the nth Fibonacci number:

```text
F(n) = F(n - 1) + F(n - 2)
```

This means:

```text
F(6)

↓

F(5) + F(4)
```

Then:

```text
F(5)

↓

F(4) + F(3)
```

Each problem becomes **smaller versions of the same problem**.

---

# 🌳 Recursive Tree Example

Finding:

```text
F(4)
```

Breaks down into:

```text
                 F(4)
               /      \
            F(3)      F(2)
           /   \      /   \
        F(2) F(1)  F(1) F(0)
        /  \
     F(1) F(0)
```

Eventually, every branch reaches one of the base cases.

---

# 📌 Base Cases

The recursion stops when:

```text
F(0) = 0

F(1) = 1
```

These are the **base cases**.

---

# 🧠 Algorithm

1. If `n` is `0`, return `0`.
2. If `n` is `1`, return `1`.
3. Otherwise, return:
   - `recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)`

---

# 💻 JavaScript Solution

```js
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(6));

// Output:
// 8
```

---

# 📊 Complexity Analysis

## Time Complexity

```text
O(2ⁿ)
```

Each function call creates **two more recursive calls** (except the base cases).

The number of calls grows exponentially.

---

## Space Complexity

```text
O(n)
```

The deepest recursive call stack is proportional to `n`.

---

# 📝 Summary

| Input | Output |
| ----: | -----: |
|   `0` |    `0` |
|   `1` |    `1` |
|   `2` |    `1` |
|   `3` |    `2` |
|   `4` |    `3` |
|   `5` |    `5` |
|   `6` |    `8` |

---

# 🎯 Key Takeaways

- The Fibonacci sequence starts with **0** and **1**.
- Every number after that is the sum of the previous two numbers.
- The recursive formula is:

```text
F(n) = F(n - 1) + F(n - 2)
```

- The recursion stops at the **base cases**:
  - `F(0) = 0`
  - `F(1) = 1`
- **Time Complexity:** `O(2ⁿ)` (Exponential Time)
- **Space Complexity:** `O(n)`
