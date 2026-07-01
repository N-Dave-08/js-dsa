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
Time = 3n + 2
```

Big-O focuses on the part that grows the fastest:

```text
O(n)
```

Because as `n` becomes very large, the `+2` and the constant `3` become insignificant.

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

- Constants (3)
- Smaller terms (+4)

```text
3n + 4
   ↓

O(n)
```

---

## Final Answer

```text
Time Complexity: O(n)
```

---

## 💡 Easy Way to Think About It

If:

```text
n = 10
```

The loop executes about **10** times.

If:

```text
n = 1,000
```

The loop executes about **1,000** times.

If:

```text
n = 1,000,000
```

The loop executes about **1,000,000** times.

The running time grows **linearly** with the input size.

Therefore:

```text
O(n)
```
