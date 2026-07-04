# 🫧 Problem: Bubble Sort

## Problem Statement

Given an array of integers, sort the array in **ascending order** using the **Bubble Sort** algorithm.

---

# 📖 What is Bubble Sort?

**Bubble Sort** is one of the simplest sorting algorithms.

It repeatedly compares **two adjacent elements** and swaps them if they are in the wrong order.

After each pass through the array, the **largest unsorted element "bubbles" to the end** of the array.

---

# How Bubble Sort Works

Suppose we have:

```text
[-6, 20, 8, -2, 4]
```

During the first pass:

```text
Compare -6 and 20

-6 < 20

No swap

[-6, 20, 8, -2, 4]
```

---

```text
Compare 20 and 8

20 > 8

Swap

[-6, 8, 20, -2, 4]
```

---

```text
Compare 20 and -2

20 > -2

Swap

[-6, 8, -2, 20, 4]
```

---

```text
Compare 20 and 4

20 > 4

Swap

[-6, 8, -2, 4, 20]
```

Notice that **20**, the largest value, has moved to the end.

---

# Examples

```text
bubbleSort([-6, 20, 8, -2, 4])
```

Output

```text
[-6, -2, 4, 8, 20]
```

---

```text
bubbleSort([5, 4, 3, 2, 1])
```

Output

```text
[1, 2, 3, 4, 5]
```

---

```text
bubbleSort([1, 2, 3, 4])
```

Output

```text
[1, 2, 3, 4]
```

The array is already sorted, so no swaps are needed.

---

# 🧠 Bubble Sort Thinking

Bubble Sort keeps making passes through the array.

Each pass compares neighboring elements.

If they are out of order:

```text
Left > Right

↓

Swap
```

Otherwise:

```text
Left < Right

↓

Do nothing
```

Every pass places the **largest remaining element** at its correct position.

---

# 🌊 Bubble Effect

Consider:

```text
[5, 1, 4, 2]
```

After the first pass:

```text
[1, 4, 2, 5]
```

The largest value (**5**) has bubbled to the end.

Second pass:

```text
[1, 2, 4, 5]
```

Now **4** is also in its correct position.

Third pass:

```text
[1, 2, 4, 5]
```

The array is completely sorted.

---

# 🔑 Swapping Condition

A swap only happens when:

```text
Left Element > Right Element
```

In JavaScript:

```js
if (arr[i] > arr[i + 1]) {
  [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
```

---

# 📝 Algorithm

1. Repeat until the array is sorted.
2. Compare each pair of adjacent elements.
3. If the left element is greater than the right element:
   - Swap them.
4. Continue until no swaps occur during an entire pass.

---

# 💻 JavaScript Solution

```js
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const arr = [-6, 20, 8, -2, 4];

console.log(bubbleSort(arr)); // [-6, -2, 4, 8, 20]
```

---

# 🔍 Dry Run

Sort:

```text
[-6, 20, 8, -2, 4]
```

### Pass 1

```text
Compare -6 and 20

No swap

[-6, 20, 8, -2, 4]
```

```text
Compare 20 and 8

Swap

[-6, 8, 20, -2, 4]
```

```text
Compare 20 and -2

Swap

[-6, 8, -2, 20, 4]
```

```text
Compare 20 and 4

Swap

[-6, 8, -2, 4, 20]
```

Largest element is now in its correct position.

---

### Pass 2

```text
Compare -6 and 8

No swap
```

```text
Compare 8 and -2

Swap

[-6, -2, 8, 4, 20]
```

```text
Compare 8 and 4

Swap

[-6, -2, 4, 8, 20]
```

---

### Pass 3

```text
Compare -6 and -2

No swap
```

```text
Compare -2 and 4

No swap
```

```text
Compare 4 and 8

No swap
```

No swaps occurred.

The algorithm stops.

Final answer:

```text
[-6, -2, 4, 8, 20]
```

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(n²)
```

Reason:

If the array is in reverse order, Bubble Sort must compare and swap many elements across multiple passes.

Example:

```text
[5, 4, 3, 2, 1]
```

---

### Best Case

```text
O(n)
```

Reason:

If the array is already sorted, only one pass is needed to verify that no swaps are required.

Example:

```text
[1, 2, 3, 4, 5]
```

---

## Space Complexity

```text
O(1)
```

Reason:

Bubble Sort sorts the array **in place**.

It only uses a few extra variables regardless of the input size.

---

# 💡 Tips for Bubble Sort

- Compare **adjacent elements** only.
- Swap only when the left value is greater than the right value.
- After every pass, the largest unsorted value moves to the end.
- Stop early if an entire pass finishes without any swaps.

---

# 📝 Key Takeaways

- Bubble Sort repeatedly compares adjacent elements.
- If two neighboring elements are in the wrong order, they are swapped.
- Each pass places the largest unsorted element at the end.
- The algorithm stops when no swaps occur during a pass.
- Bubble Sort is simple but inefficient for large datasets.
- **Worst Time Complexity:** `O(n²)`
- **Best Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`
