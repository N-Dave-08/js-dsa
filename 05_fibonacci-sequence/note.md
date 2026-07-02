# 🌀 Problem: Fibonacci Sequence

## Problem Statement

Given a number **`n`**, return the first **`n`** elements of the **Fibonacci sequence**.

---

## What is the Fibonacci Sequence?

The **Fibonacci sequence** is a sequence in which each number is the **sum of the two preceding numbers**.

The first two numbers are:

```text
0, 1
```

Starting from the third number:

```text
Next Number = Previous Number + Number Before Previous
```

---

## Visualization

```text
0, 1, 1, 2, 3, 5, 8, 13, ...

0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
```

---

## Examples

```text
fibonacci(2)
```

Output:

```text
[0, 1]
```

---

```text
fibonacci(3)
```

Output:

```text
[0, 1, 1]
```

---

```text
fibonacci(7)
```

Output:

```text
[0, 1, 1, 2, 3, 5, 8]
```

---

## Algorithm

1. Create an array containing the first two Fibonacci numbers: `0` and `1`.
2. Repeat from index `2` until `n - 1`.
3. Compute the next Fibonacci number by adding the previous two numbers.
4. Store the result in the array.
5. Return the completed array.

---

## JavaScript Solution

```js
function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(7));

// Output:
// [0, 1, 1, 2, 3, 5, 8]
```

---

## Complexity Analysis

### Time Complexity

```text
O(n)
```

The loop runs approximately **`n`** times.

---

### Space Complexity

```text
O(n)
```

The array stores **`n`** Fibonacci numbers.

---

## Summary

| Input | Output                  |
| ----- | ----------------------- |
| `2`   | `[0, 1]`                |
| `3`   | `[0, 1, 1]`             |
| `5`   | `[0, 1, 1, 2, 3]`       |
| `7`   | `[0, 1, 1, 2, 3, 5, 8]` |

---

## Key Takeaways

- The sequence starts with **0** and **1**.
- Every new number is the **sum of the previous two numbers**.
- The algorithm builds the sequence one number at a time.
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`
