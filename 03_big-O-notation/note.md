# 📈 Big-O Notation

## What is Big-O?

**Big-O notation** represents the **worst-case time complexity** of an algorithm.

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

# 📈 Big-O Example: Summation

```js
function summation(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}
```

---

## Step 1: Count the Operations

```text
let sum = 0        → 1 time

for loop
    i = 1          → 1 time
    i <= n         → n + 1 times
    i++            → n times
    sum += i       → n times

return sum         → 1 time
```

---

## Step 2: Total Operations

```text
1 + 1 + (n + 1) + n + n + 1

= 3n + 4
```

---

## Step 3: Convert to Big-O

Big-O ignores:

- Constants (`3`)
- Lower-order terms (`+4`)

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

As `n` gets larger:

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

The same idea applies to:

```text
3n + 4
```

```text
3n + 4
   ↓

O(n)
```

Big-O focuses on the **bigger picture**, not the exact number of operations.

---

## Time Complexity: O(n) (Linear Time)

An algorithm has **O(n)** time complexity if its running time grows **linearly** with the input size.

```text
Input Size (n)      Approximate Operations

10                  ~10
100                 ~100
1,000               ~1,000
10,000              ~10,000
1,000,000           ~1,000,000
```

As the input size increases, the number of operations also increases at approximately the same rate.

```text
Input Size ↑  →  Operations ↑

10            →  ~10
100           →  ~100
1,000         →  ~1,000
10,000        →  ~10,000
```

This growth pattern is called **Linear Time**, which is represented as:

```text
O(n)
```
