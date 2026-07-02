# ✖️ Problem: Factorial of a Number

## Problem Statement

Given an integer **`n`**, find the **factorial** of that integer.

---

## What is a Factorial?

In mathematics, the **factorial** of a non-negative integer **`n`**, denoted by **`n!`**, is the product of all positive integers less than or equal to **`n`**.

```text
n! = n × (n - 1) × (n - 2) × ... × 2 × 1
```

---

## Special Case

The factorial of **0** is defined as:

```text
0! = 1
```

---

## Examples

```text
factorial(0)
```

Output:

```text
1
```

---

```text
factorial(1)
```

Output:

```text
1
```

---

```text
factorial(4)
```

Calculation:

```text
4 × 3 × 2 × 1 = 24
```

Output:

```text
24
```

---

```text
factorial(5)
```

Calculation:

```text
5 × 4 × 3 × 2 × 1 = 120
```

Output:

```text
120
```

---

## Visualization

```text
factorial(4)

result = 1

1 × 1 = 1
1 × 2 = 2
2 × 3 = 6
6 × 4 = 24

Final Answer = 24
```

---

## Algorithm

1. Initialize `result` to `1`.
2. Loop from `2` to `n`.
3. Multiply `result` by the current number.
4. Return `result`.

---

## JavaScript Solution

```js
function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(4));

// Output:
// 24
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
O(1)
```

Only one variable (`result`) is used, regardless of the input size.

---

## Summary

| Input | Output |
| ----- | ------ |
| `0`   | `1`    |
| `1`   | `1`    |
| `4`   | `24`   |
| `5`   | `120`  |

---

## Key Takeaways

- The factorial of **0** is **1**.
- Multiply all positive integers from **1** to **`n`**.
- The algorithm uses a single loop.
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`
