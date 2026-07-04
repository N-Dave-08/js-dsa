# 🔍 Problem: Recursive Binary Search

## Problem Statement

Given a **sorted array** of `n` elements and a target element `t`, return the **index** of `t`.

If the target element is **not found**, return `-1`.

---

## What is Binary Search?

Binary Search is a searching algorithm that works by repeatedly dividing a **sorted array** in half.

Instead of checking every element one by one, it compares the target with the middle element.

- If the target is **equal** to the middle element, return its index.
- If the target is **smaller**, search the left half.
- If the target is **greater**, search the right half.

The recursive version does this by **calling itself** on the appropriate half of the array.

---

# Example

```text
arr = [-5, 2, 4, 6, 10]
t = 10
```

Output:

```text
4
```

Because:

```text
arr[4] = 10
```

---

# More Examples

### Example 1

```text
arr = [-5, 2, 4, 6, 10]
t = 6
```

Output:

```text
3
```

---

### Example 2

```text
arr = [-5, 2, 4, 6, 10]
t = -5
```

Output:

```text
0
```

---

### Example 3

```text
arr = [-5, 2, 4, 6, 10]
t = 7
```

Output:

```text
-1
```

---

# Visualization

Suppose:

```text
arr = [-5, 2, 4, 6, 10]
t = 10
```

### Step 1

```text
           mid
            ↓
[-5, 2, 4, 6, 10]
```

Middle value:

```text
4
```

```text
10 > 4
```

Ignore the left half.

Search:

```text
[6, 10]
```

---

### Step 2

```text
     mid
      ↓
[6, 10]
```

Middle value:

```text
6
```

```text
10 > 6
```

Ignore the left half.

Search:

```text
[10]
```

---

### Step 3

```text
mid
 ↓
[10]
```

```text
10 == 10
```

Target found.

Return:

```text
4
```

---

# Why is it Recursive?

Instead of using a loop, the function calls itself.

```text
Search Whole Array
        │
        ▼
Search Right Half
        │
        ▼
Search Right Half
        │
        ▼
Target Found
```

Each recursive call searches a **smaller portion** of the array.

---

# Algorithm

1. Find the middle index.
2. If the middle element equals the target, return the index.
3. If the target is smaller, recursively search the left half.
4. If the target is larger, recursively search the right half.
5. If the search range becomes invalid (`left > right`), return `-1`.

---

# JavaScript Solution

```js
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (target === arr[middle]) {
    return middle;
  }

  if (target < arr[middle]) {
    return search(arr, target, left, middle - 1);
  }

  return search(arr, target, middle + 1, right);
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
```

Output:

```text
4
```

---

# Complexity Analysis

## Time Complexity

```text
O(log n)
```

Each recursive call cuts the search space in half.

Example:

```text
16 elements

↓

8

↓

4

↓

2

↓

1
```

---

## Space Complexity

```text
O(log n)
```

Each recursive call is stored on the **call stack**.

The maximum number of recursive calls is approximately `log₂(n)`.

---

# Summary

| Input Array     | Target | Output |
| --------------- | ------ | ------ |
| `[-5,2,4,6,10]` | `10`   | `4`    |
| `[-5,2,4,6,10]` | `6`    | `3`    |
| `[-5,2,4,6,10]` | `-5`   | `0`    |
| `[-5,2,4,6,10]` | `7`    | `-1`   |

---

# Key Takeaways

- The array **must be sorted**.
- Binary Search repeatedly divides the search space in half.
- The recursive version solves the problem by searching **smaller portions of the same array**.
- It is much faster than Linear Search for large sorted arrays.
- **Time Complexity:** `O(log n)`
- **Space Complexity:** `O(log n)` (because of the recursive call stack)

```

```
