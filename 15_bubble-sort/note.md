# 🫧 Problem: Bubble Sort

## Problem Statement

Given an array of integers, sort the array in **ascending order** using the **Bubble Sort** algorithm.

---

# 📖 What is Bubble Sort?

**Bubble Sort** is one of the simplest sorting algorithms.

It repeatedly compares **two adjacent elements** and swaps them if they are in the wrong order.

After each pass through the array, the **largest unsorted element "bubbles" to the end** of the array.

---

# 🔄 How Bubble Sort Works

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

# 🧪 Examples

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

The process stops when a full pass completes with no swaps.

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

No swaps occur → sorting is complete.

---

# 🔑 Swapping Condition

A swap only happens when:

```text
Left Element > Right Element
```

In JavaScript:

```js
if (arr[i] > arr[i + 1]) {
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}
```

---

# 📝 Algorithm

1. Assume the array is not sorted.
2. Traverse the array from left to right.
3. Compare each pair of adjacent elements.
4. If the left element is greater than the right element:
   - Swap them using a temporary variable.
   - Mark that a swap occurred.
5. Repeat the process until a full pass completes with no swaps.

---

# 💻 JavaScript Solution

```js
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

const arr = [-6, 20, 8, -2, 4];

console.log(bubbleSort(arr));
// [-6, -2, 4, 8, 20]
```

---

# 🔍 Dry Run

Initial array:

```text
[-6, 20, 8, -2, 4]
```

---

### Pass 1

- Compare -6 and 20 → no swap
- Compare 20 and 8 → swap
- Compare 20 and -2 → swap
- Compare 20 and 4 → swap

Result:

```text
[-6, 8, -2, 4, 20]
```

---

### Pass 2

- Compare -6 and 8 → no swap
- Compare 8 and -2 → swap
- Compare 8 and 4 → swap

Result:

```text
[-6, -2, 4, 8, 20]
```

---

### Pass 3

- Compare -6 and -2 → no swap
- Compare -2 and 4 → no swap
- Compare 4 and 8 → no swap

No swaps → stop.

Final result:

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

Occurs when array is reverse sorted.

Example:

```text
[5, 4, 3, 2, 1]
```

---

### Best Case

```text
O(n)
```

Occurs when array is already sorted.

Example:

```text
[1, 2, 3, 4, 5]
```

Only one pass is needed.

---

## Space Complexity

```text
O(1)
```

Bubble Sort is in-place and only uses a single temporary variable.

---

# 💡 Key Takeaways

- Bubble Sort compares adjacent elements.
- Swaps happen only when elements are in the wrong order.
- Each pass pushes the largest element to the end.
- The algorithm stops when no swaps occur in a pass.
- Simple but inefficient for large datasets.
- Worst & Average Time: `O(n²)`
- Best Time: `O(n)`
- Space: `O(1)`
