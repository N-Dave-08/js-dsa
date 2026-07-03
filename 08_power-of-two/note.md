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

# Solution 1: Repeated Division

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

### Time Complexity

```text
O(log n)
```

### Space Complexity

```text
O(1)
```

---

# Solution 2: Bitwise Operator (Optimal)

Instead of repeatedly dividing by `2`, we can use a **bitwise AND (`&`)** operation.

## Key Observation

Every power of two has **exactly one `1` bit** in its binary representation.

Examples:

```text
1   = 0001
2   = 0010
4   = 0100
8   = 1000
16  = 10000
```

If we subtract `1` from a power of two:

```text
8  = 1000

7  = 0111
```

Notice that all the bits become opposite.

Now perform:

```text
1000
0111
----
0000
```

The result is always `0`.

---

## Algorithm

1. If `n` is less than `1`, return `false`.
2. Compute:

```text
n & (n - 1)
```

3. If the result is `0`, then `n` is a power of two.

---

## JavaScript Solution

```js
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
```

---

## Why Does It Work?

### Example: 8

```text
8 = 1000

7 = 0111

1000
0111
----
0000
```

Result:

```text
0
```

Return:

```text
true
```

---

### Example: 10

```text
10 = 1010

9  = 1001

1010
1001
----
1000
```

Result:

```text
1000
```

Not zero.

Return:

```text
false
```

---

### Time Complexity

```text
O(1)
```

Only one bitwise operation is performed.

---

### Space Complexity

```text
O(1)
```

No additional memory is used.

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
- Repeated division gives a **Time Complexity of `O(log n)`**.
- The bitwise solution uses the property:

```text
n & (n - 1) === 0
```

- The bitwise solution runs in **`O(1)`** time.
- Both solutions use **`O(1)`** space.
