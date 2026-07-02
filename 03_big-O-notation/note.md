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

The `+2` becomes insignificant as `n` grows.

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

Big-O focuses on the **overall growth** of an algorithm, not the exact number of operations.

---

## Time Complexity: O(n) (Linear Time)

An algorithm has **O(n)** time complexity if its running time **grows linearly** with the input size.

```text
Input Size (n)      Operations

10                  ~10
100                 ~100
1,000               ~1,000
10,000              ~10,000
```

As the input size increases, the number of operations also increases at approximately the same rate.

```text
Input Size ↑
     │
     │
     │
     │
     └────────────────────────►

Operations ↑
```

This growth pattern is called **Linear Time**, represented as:

```text
O(n)
```
