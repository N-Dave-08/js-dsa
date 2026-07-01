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
