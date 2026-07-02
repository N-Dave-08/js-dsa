# 🔢 Problem: Prime Number

## Problem Statement

Given a natural number **`n`**, determine whether the number is **prime** or not.

---

## What is a Prime Number?

A **prime number** is a natural number **greater than 1** that has **exactly two positive factors**:

- `1`
- The number itself

In other words, a prime number **cannot** be written as the product of two smaller natural numbers.

---

## Examples

```text
isPrime(2)
```

Output:

```text
true
```

Factors:

```text
1 × 2
```

---

```text
isPrime(5)
```

Output:

```text
true
```

Factors:

```text
1 × 5
```

---

```text
isPrime(7)
```

Output:

```text
true
```

Factors:

```text
1 × 7
```

---

```text
isPrime(4)
```

Output:

```text
false
```

Factors:

```text
1 × 4
2 × 2
```

---

```text
isPrime(9)
```

Output:

```text
false
```

Factors:

```text
1 × 9
3 × 3
```

---

```text
isPrime(1)
```

Output:

```text
false
```

`1` is **not** a prime number because prime numbers must be **greater than 1**.

---

## Visualization

### Prime Number (5)

```text
5

Possible divisors:

2 ❌
3 ❌
4 ❌

No divisors found.

Return true
```

---

### Not a Prime Number (9)

```text
9

Possible divisors:

2 ❌
3 ✅

9 % 3 = 0

Return false
```

---

## Algorithm

1. If `n` is less than `2`, return `false`.
2. Loop from `2` to `n - 1`.
3. If `n` is divisible by any number in the loop, return `false`.
4. If no divisors are found, return `true`.

---

## JavaScript Solution

```js
function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(5));

// Output:
// true
```

---

## Complexity Analysis

### Time Complexity

```text
O(n)
```

In the worst case, the loop checks every number from `2` to `n - 1`.

---

### Space Complexity

```text
O(1)
```

Only a few variables are used, regardless of the input size.

---

## Summary

| Input | Output  |
| ----- | ------- |
| `1`   | `false` |
| `2`   | `true`  |
| `4`   | `false` |
| `5`   | `true`  |
| `7`   | `true`  |
| `9`   | `false` |

---

## Key Takeaways

- A prime number is **greater than 1**.
- It has **exactly two positive factors**: `1` and itself.
- If any number from `2` to `n - 1` divides `n` evenly, the number is **not prime**.
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`
