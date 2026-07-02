# 📈 Big-O Notation

## What is Big-O?

**Big-O notation** represents the **worst-case complexity** of an algorithm.

---

## Purpose

Big-O describes the complexity of an algorithm using **algebraic expressions**.

---

## Characteristics

- Expressed in terms of the **input size (`n`)**.
- Focuses on the **overall growth** of an algorithm, ignoring small constant details.

---

## Example

Instead of saying:

```text
Time = 3n + 4
```

Big-O focuses on the part that grows the fastest:

```text
O(n)
```

Because as `n` becomes very large, the constant `3` and the `+4` become insignificant.

---

## Key Idea

Big-O tells us **how an algorithm grows as the input size (`n`) increases**, not the exact running time.

---

# ⏱️ Time Complexity

**Time complexity** measures the amount of **time (operations)** an algorithm takes as the input size (`n`) grows.

Just like space complexity, we express time complexity using **Big-O notation**.

### Common Time Complexities

| Complexity   | Description      |
| ------------ | ---------------- |
| **O(1)**     | Constant Time    |
| **O(log n)** | Logarithmic Time |
| **O(n)**     | Linear Time      |
| **O(n²)**    | Quadratic Time   |
| **O(n³)**    | Cubic Time       |

---

# 📈 Big-O Example: O(n)

```js
function summation(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
```

### Step 1: Count the Operations

```text
let sum = 0        → 1 time

for loop
    i = 1          → 1 time
    i <= n         → n + 1 times
    i++            → n times
    sum += i       → n times

return sum         → 1 time
```

### Step 2: Total Operations

```text
1 + 1 + (n + 1) + n + n + 1

= 3n + 4
```

### Step 3: Convert to Big-O

Ignore:

- Constant coefficients
- Lower-order terms

```text
3n + 4
   ↓

O(n)
```

---

## Why Do We Ignore Constants?

Big-O focuses on the **overall growth** of an algorithm.

Consider:

```text
n + 2
```

As `n` grows:

```text
n = 10
10 + 2 = 12

n = 100
100 + 2 = 102

n = 1,000
1000 + 2 = 1002

n = 10,000
10000 + 2 = 10002

n = 1,000,000
1000000 + 2 = 1000002
```

The `+2` becomes insignificant compared to `n`.

Therefore:

```text
n + 2
  ↓

O(n)
```

The same applies to:

```text
3n + 4
   ↓

O(n)
```

---

# ⏱️ O(1) — Constant Time

```js
function summation(n) {
  return (n * (n + 1)) / 2;
}

console.log(summation(4));
```

### Time Complexity

```text
O(1)
```

The number of operations stays the **same**, regardless of the input size.

```text
n = 10          → 1 operation
n = 100         → 1 operation
n = 1,000       → 1 operation
n = 1,000,000   → 1 operation
```

This is called **Constant Time**.

---

# 📈 O(n) — Linear Time

```js
for (let i = 0; i < n; i++) {
  // some code
}
```

### Time Complexity

```text
O(n)
```

The number of operations grows **proportionally** with the input size.

```text
n = 10          → ~10 operations
n = 100         → ~100 operations
n = 1,000       → ~1,000 operations
```

This is called **Linear Time**.

---

# 📈 O(n²) — Quadratic Time

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // some code
  }
}
```

### Time Complexity

```text
3n² + 5n + 1
      ↓

O(n²)
```

The number of operations grows proportionally to **n²**.

This is called **Quadratic Time**.

---

# 📈 O(n³) — Cubic Time

```js
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      // some code
    }
  }
}
```

### Time Complexity

```text
O(n³)
```

The number of operations grows proportionally to **n³**.

This is called **Cubic Time**.

---

# 📈 O(log n) — Logarithmic Time

An algorithm has **O(log n)** time complexity when the input size is **reduced by half** during each iteration.

Example:

```text
16
↓
8
↓
4
↓
2
↓
1
```

The larger the input becomes, the slower the number of steps grows.

This is called **Logarithmic Time**.

```text
O(log n)
```

---

# 💾 Space Complexity

**Space complexity** measures the amount of **memory** an algorithm uses as the input size (`n`) grows.

Just like time complexity, we express space complexity using **Big-O notation**.

### Common Space Complexities

| Complexity   | Description       |
| ------------ | ----------------- |
| **O(1)**     | Constant Space    |
| **O(log n)** | Logarithmic Space |
| **O(n)**     | Linear Space      |

---

## O(1) — Constant Space

The algorithm uses the **same amount of memory**, regardless of the input size.

### Example

```js
function sum(a, b) {
  return a + b;
}
```

Memory used:

```text
a
b

return value
```

Whether:

```text
a = 5, b = 10
```

or

```text
a = 1000000, b = 2000000
```

the algorithm still stores only a few variables.

```text
Space Complexity: O(1)
```

---

## O(n) — Linear Space

The memory used grows with the input size.

### Example

```js
function createArray(n) {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  return numbers;
}
```

If:

```text
n = 5
```

Memory:

```text
[1, 2, 3, 4, 5]
```

If:

```text
n = 1000
```

Memory:

```text
[1, 2, 3, ..., 1000]
```

As `n` grows, the array grows.

```text
Space Complexity: O(n)
```

---

## O(log n) — Logarithmic Space

The memory grows very slowly as the input size increases.

This commonly happens in recursive algorithms.

Example:

```text
16
↓
8
↓
4
↓
2
↓
1
```

Only a few recursive calls need to be stored at a time.

```text
Space Complexity: O(log n)
```

---

# ⚖️ Time Complexity vs Space Complexity

## Time Complexity

Measures:

```text
How much work is performed?
```

Example:

```js
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

```text
Time: O(n)
Space: O(1)
```

The loop runs `n` times but does not allocate additional memory proportional to `n`.

---

## Space Complexity

Measures:

```text
How much extra memory is used?
```

Example:

```js
const arr = [];

for (let i = 0; i < n; i++) {
  arr.push(i);
}
```

```text
Time: O(n)
Space: O(n)
```

The loop runs `n` times **and** creates an array containing `n` elements.

---

# 📈 Big-O Trend

From best to worst growth:

![Big-O Trend](image.png)

---

# 📝 A Few Points to Note

- Multiple algorithms can solve the same problem.
- There is **no single best algorithm** for every situation.
- Different algorithms perform better under different constraints.
- The same algorithm can be implemented in different ways, even using the same programming language.
- Choose the algorithm that best fits your requirements.
- Don't lose sight of the bigger picture.
- Write code that is **simple, readable, and maintainable** rather than clever but difficult to understand.
