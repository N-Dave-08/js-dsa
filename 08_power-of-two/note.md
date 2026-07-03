# 🔢 Problem: Power of Two

## Problem Statement

Given a positive integer **`n`**, determine whether the number is a **power of 2**.

---

## What is a Power of Two?

A number is a **power of 2** if there exists an integer **`x`** such that:

```text
n = 2^x
```

where `x ≥ 0`.

---

## Examples

```text
isPowerOfTwo(1)
```

Output:

```text
true
```

Explanation:

```text
1 = 2⁰
```

---

```text
isPowerOfTwo(2)
```

Output:

```text
true
```

Explanation:

```text
2 = 2¹
```

---

```text
isPowerOfTwo(4)
```

Output:

```text
true
```

Explanation:

```text
4 = 2²
```

---

```text
isPowerOfTwo(8)
```

Output:

```text
true
```

Explanation:

```text
8 = 2³
```

---

```text
isPowerOfTwo(16)
```

Output:

```text
true
```

Explanation:

```text
16 = 2⁴
```

---

```text
isPowerOfTwo(6)
```

Output:

```text
false
```

Explanation:

```text
There is no integer x such that:

2^x = 6
```

---

```text
isPowerOfTwo(10)
```

Output:

```text
false
```

---

## Visualization

### Power of Two (16)

```text
16

16 ÷ 2 = 8
8 ÷ 2 = 4
4 ÷ 2 = 2
2 ÷ 2 = 1

Reached 1

Return true
```

---

### Not a Power of Two (12)

```text
12

12 ÷ 2 = 6
6 ÷ 2 = 3

3 is not divisible by 2

Return false
```

---

## Algorithm

1. If `n` is less than `1`, return `false`.
2. While `n` is greater than `1`:
   - If `n` is odd, return `false`.
   - Divide `n` by `2`.
3. Return `true`.

---

## JavaScript Solution

```js
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}
```

---

## Complexity Analysis

### Time Complexity

```text
O(log n)
```

The input is divided by `2` during every iteration.

---

### Space Complexity

```text
O(1)
```

Only a few variables are used.

---

## Summary

| Input | Output  |
| ----: | :-----: |
|   `1` | `true`  |
|   `2` | `true`  |
|   `4` | `true`  |
|   `8` | `true`  |
|  `16` | `true`  |
|   `6` | `false` |
|  `10` | `false` |

---

## Key Takeaways

- A power of two can be written as `2^x`.
- Continuously divide the number by `2`.
- If you eventually reach `1`, the number is a power of two.
- If an odd number appears before reaching `1`, it is **not** a power of two.
- **Time Complexity:** `O(log n)`
- **Space Complexity:** `O(1)`
