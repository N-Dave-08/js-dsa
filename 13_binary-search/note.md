# 🔍 Problem: Binary Search

## Problem Statement

Given a **sorted array** of **`n`** elements and a target element **`t`**, find the **index** of `t` in the array.

If the target element is **not found**, return **`-1`**.

---

# 📖 What is Binary Search?

**Binary Search** is a searching algorithm that works by **repeatedly dividing the search space in half**.

Instead of checking every element one by one like Linear Search, Binary Search compares the target with the **middle element**.

- If the target is smaller, search the **left half**.
- If the target is larger, search the **right half**.
- Repeat until the target is found or no elements remain.

> **Important:** Binary Search **only works on sorted arrays**.

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

Another example

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

1. Find the middle element.
2. Compare the middle element with the target.
3. If they are equal, return the middle index.
4. If the target is smaller, search the left half.
5. If the target is larger, search the right half.
6. Repeat until the target is found or the search space becomes empty.

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

Ignore the left half.

```text
      X   X   X

[-5, 2, 4, 6, 10]
            ↑
```

Search only:

```text
[6, 10]
```

---

Second iteration

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

Ignore the left half again.

```text
          X

[-5, 2, 4, 6, 10]
               ↑
```

Search only:

```text
[10]
```

---

Third iteration

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

# 📝 Algorithm

1. Set `left = 0`.
2. Set `right = arr.length - 1`.
3. While `left <= right`:
   - Find the middle index.
   - If the middle value equals the target, return the middle index.
   - If the target is smaller, move `right` to `middle - 1`.
   - Otherwise, move `left` to `middle + 1`.
4. If the loop ends, return `-1`.

---

# 💻 JavaScript Solution

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}

const arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 10)); // 4
console.log(binarySearch(arr, 6)); // 3
console.log(binarySearch(arr, 7)); // -1
```

---

# 🔍 Dry Run

Find:

```text
binarySearch([-5, 2, 4, 6, 10], 10)
```

### Iteration 1

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

Search the right half.

---

### Iteration 2

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

Search the right half again.

---

### Iteration 3

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

The target is the middle element.

Example:

```text
[-5, 2, 4, 6, 10]
          ↑

Target = 4
```

Only one comparison is needed.

---

## Worst Time Complexity

```text
O(log n)
```

Each iteration cuts the search space in half.

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

The number of comparisons grows very slowly as the array size increases.

---

## Space Complexity

```text
O(1)
```

The iterative Binary Search only uses a few variables:

- `left`
- `right`
- `middle`

No additional arrays or data structures are created.

---

# 📊 Complexity Summary

| Complexity | Value    |
| ---------- | -------- |
| Best Time  | O(1)     |
| Worst Time | O(log n) |
| Space      | O(1)     |

---

# 🔄 Linear Search vs Binary Search

| Feature               | Linear Search | Binary Search |
| --------------------- | ------------- | ------------- |
| Array must be sorted? | ❌ No         | ✅ Yes        |
| Best Time             | O(1)          | O(1)          |
| Worst Time            | O(n)          | O(log n)      |
| Space                 | O(1)          | O(1)          |

---

# ✅ Key Takeaways

- Binary Search **requires a sorted array**.
- It repeatedly **cuts the search space in half**.
- It is much faster than Linear Search for large sorted arrays.
- **Best Time Complexity:** `O(1)`
- **Worst Time Complexity:** `O(log n)`
- **Space Complexity:** `O(1)`
