# 🔍 Problem: Recursive Binary Search

## Problem Statement

Given a **sorted array** of `n` elements and a target value `target`, return the **index** of the target if it exists.

If the target is **not found**, return `-1`.

---

# 📖 What is Recursive Binary Search?

Recursive Binary Search is a searching algorithm that works by repeatedly dividing a **sorted array** in half.

Instead of checking every element one by one, it compares the target with the **middle element**.

- If the target is **equal** to the middle element, return its index.
- If the target is **smaller**, recursively search the **left half**.
- If the target is **greater**, recursively search the **right half**.

Unlike the iterative version, Recursive Binary Search uses **function calls** instead of a loop to continue searching.

> **Important:** Binary Search only works on **sorted arrays**.

---

# Example

Array:

```text
[-5, 2, 4, 6, 10]
```

Target:

```text
10
```

Output:

```text
4
```

Because:

```text
Index:   0   1   2   3   4
Array: [-5, 2, 4, 6, 10]
                    ↑
                 Target
```

---

# More Examples

### Example 1

Array:

```text
[-5, 2, 4, 6, 10]
```

Target:

```text
6
```

Output:

```text
3
```

---

### Example 2

Array:

```text
[-5, 2, 4, 6, 10]
```

Target:

```text
-5
```

Output:

```text
0
```

---

### Example 3

Array:

```text
[-5, 2, 4, 6, 10]
```

Target:

```text
7
```

Output:

```text
-1
```

Because `7` does not exist in the array.

---

# 🧠 How It Works

1. Find the middle element of the current search range.
2. Compare the middle element with the target.
3. If they are equal, return the middle index.
4. If the target is smaller, recursively search the left half.
5. If the target is larger, recursively search the right half.
6. If there are no elements left to search (`left > right`), return `-1`.

---

# 🔍 Visualization

Search for:

```text
Target = 10
```

Initial array:

```text
[-5, 2, 4, 6, 10]

Left = 0
Right = 4

Middle = 2

Value = 4
```

Since:

```text
10 > 4
```

Discard the left half, including the middle element.

```text
      X   X   X

[-5, 2, 4, 6, 10]
            ↑
```

Recursively search:

```text
[6, 10]
```

---

Second recursive call

```text
Left = 3
Right = 4

Middle = 3

Value = 6
```

Since:

```text
10 > 6
```

Discard the left half, including the middle element.

```text
          X

[-5, 2, 4, 6, 10]
               ↑
```

Recursively search:

```text
[10]
```

---

Third recursive call

```text
Left = 4
Right = 4

Middle = 4

Value = 10 ✅
```

Return:

```text
4
```

---

# 🔄 Why is it Recursive?

Instead of using a loop, the function calls itself with a **smaller search range**.

```text
Search Entire Array
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

Each recursive call reduces the number of elements that need to be searched.

---

# 📝 Algorithm

1. Start with `left = 0` and `right = arr.length - 1`.
2. If `left > right`, return `-1`.
3. Find the middle index of the current search range.
4. If the middle element equals the target, return the middle index.
5. If the target is smaller, recursively search the left half.
6. Otherwise, recursively search the right half.

---

# 💻 JavaScript Solution

```js
// Binary Search only works on a SORTED array.
const arr = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(arr, target) {
  // Start searching the entire array.
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  // Base case: target was not found.
  if (left > right) {
    return -1;
  }

  // Find the middle index of the current search range.
  const middle = left + Math.floor((right - left) / 2);

  // Target found.
  if (arr[middle] === target) {
    return middle;
  }

  // Search the left half.
  if (target < arr[middle]) {
    return search(arr, target, left, middle - 1);
  }

  // Search the right half.
  return search(arr, target, middle + 1, right);
}

console.log(recursiveBinarySearch(arr, 10)); // 4
console.log(recursiveBinarySearch(arr, 6)); // 3
console.log(recursiveBinarySearch(arr, 7)); // -1
```

---

# 🔍 Dry Run

Find:

```text
recursiveBinarySearch([-5, 2, 4, 6, 10], 10)
```

### Recursive Call 1

```text
Left = 0
Right = 4

Middle = 2

arr[2] = 4
```

Since:

```text
10 > 4
```

Recursively search the right half.

---

### Recursive Call 2

```text
Left = 3
Right = 4

Middle = 3

arr[3] = 6
```

Since:

```text
10 > 6
```

Recursively search the right half again.

---

### Recursive Call 3

```text
Left = 4
Right = 4

Middle = 4

arr[4] = 10
```

Target found.

Return:

```text
4
```

---

# ⚡ Complexity Analysis

## Best Time Complexity

```text
O(1)
```

The target is already the middle element.

Example:

```text
[-5, 2, 4, 6, 10]
          ↑

Target = 4
```

Only one comparison is needed.

---

## Average Time Complexity

```text
O(log n)
```

Each recursive call cuts the remaining search space in half.

---

## Worst Time Complexity

```text
O(log n)
```

Example:

```text
16 elements

↓

8 elements

↓

4 elements

↓

2 elements

↓

1 element
```

Each recursive call halves the search space, so the number of comparisons grows logarithmically.

---

## Space Complexity

```text
O(log n)
```

Unlike the iterative version, each recursive function call is stored on the **call stack**.

Since the search depth is at most `log₂(n)`, the recursive solution requires **O(log n)** extra space.

---

# 📊 Complexity Summary

| Complexity   | Value        |
| ------------ | ------------ |
| Best Time    | **O(1)**     |
| Average Time | **O(log n)** |
| Worst Time   | **O(log n)** |
| Space        | **O(log n)** |

---

# 🔄 Iterative vs Recursive Binary Search

| Feature                  | Iterative | Recursive |
| ------------------------ | --------- | --------- |
| Requires a sorted array? | ✅ Yes    | ✅ Yes    |
| Best Time                | O(1)      | O(1)      |
| Average Time             | O(log n)  | O(log n)  |
| Worst Time               | O(log n)  | O(log n)  |
| Space                    | O(1)      | O(log n)  |
| Uses a loop              | ✅ Yes    | ❌ No     |
| Uses recursion           | ❌ No     | ✅ Yes    |

---

# ✅ Key Takeaways

- Binary Search **requires a sorted array**.
- Recursive Binary Search repeatedly **cuts the search space in half**.
- Instead of using a loop, it solves the problem by **calling itself** with a smaller search range.
- It is much faster than Linear Search for large sorted arrays.
- **Best Time Complexity:** `O(1)`
- **Average Time Complexity:** `O(log n)`
- **Worst Time Complexity:** `O(log n)`
- **Space Complexity:** `O(log n)` because of the recursive call stack.
