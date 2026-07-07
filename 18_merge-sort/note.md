# 🃏 Problem: Merge Sort

## Problem Statement

Given an array of integers, sort the array in **ascending order** using the **Merge Sort** algorithm.

Example:

```js
const arr = [-6, 20, 8, -2, 4];

mergeSort(arr);
// [-6, -2, 4, 8, 20]
```

---

# 📖 What is Merge Sort?

**Merge Sort** is a **divide-and-conquer** sorting algorithm.

Instead of repeatedly comparing neighboring elements, Merge Sort:

1. Divides the array into two halves.
2. Recursively sorts each half.
3. Merges the sorted halves back together.

Unlike Bubble Sort or Insertion Sort, Merge Sort keeps breaking the problem into smaller problems until each subarray contains only one element.

A single element is already considered sorted.

---

# 🧠 Merge Sort Idea

Suppose we have:

```text
[-6, 20, 8, -2, 4]
```

Split it into two halves.

```text
[-6, 20]      [8, -2, 4]
```

Keep splitting.

```text
[-6] [20]     [8] [-2, 4]
```

Split again.

```text
[-2] [4]
```

Every piece now contains only one element.

Now begin merging.

---

Merge

```text
[-2] + [4]

↓

[-2, 4]
```

Merge

```text
[8] + [-2, 4]

↓

[-2, 4, 8]
```

Merge

```text
[-6] + [20]

↓

[-6, 20]
```

Finally merge both sorted halves.

```text
[-6, 20]

+

[-2, 4, 8]

↓

[-6, -2, 4, 8, 20]
```

---

# 🔄 How Merge Sort Works

Starting array

```text
[-6, 20, 8, -2, 4]
```

Split

```text
[-6, 20]

[8, -2, 4]
```

Split again

```text
[-6]

[20]

[8]

[-2, 4]
```

Split again

```text
[-2]

[4]
```

Now merge.

```text
[-2]

+

[4]

↓

[-2, 4]
```

Merge.

```text
[8]

+

[-2, 4]

↓

[-2, 4, 8]
```

Merge.

```text
[-6]

+

[20]

↓

[-6, 20]
```

Final merge.

```text
[-6, 20]

+

[-2, 4, 8]

↓

[-6, -2, 4, 8, 20]
```

Array sorted.

---

# 🧪 Examples

```text
mergeSort([-6, 20, 8, -2, 4])
```

Output

```text
[-6, -2, 4, 8, 20]
```

---

```text
mergeSort([5, 4, 3, 2, 1])
```

Output

```text
[1, 2, 3, 4, 5]
```

---

```text
mergeSort([1, 2, 3, 4])
```

Output

```text
[1, 2, 3, 4]
```

The array is already sorted.

---

# 🧠 Merge Sort Thinking

For every array:

```text
Split

↓

Split again

↓

Continue until every
subarray has one element

↓

Merge sorted pieces

↓

Repeat until one
sorted array remains
```

Instead of moving elements around while sorting, Merge Sort creates new sorted arrays by merging smaller sorted arrays.

---

# 🌊 Visual Example

Consider

```text
[5, 2, 4, 6]
```

Split

```text
[5, 2]

[4, 6]
```

Split again

```text
[5]

[2]

[4]

[6]
```

Merge

```text
[2, 5]

[4, 6]
```

Final merge

```text
[2, 4, 5, 6]
```

Sorted!

---

# 🔑 Merge Condition

When merging two sorted arrays:

Compare the first element of each array.

Example

```text
Left

[-6, 20]

Right

[-2, 4, 8]
```

Compare

```text
-6 < -2

↓

Take -6
```

Compare again

```text
20 > -2

↓

Take -2
```

Continue until one side becomes empty.

Then append the remaining elements.

---

# 📝 Algorithm

1. If the array has one element, return it.
2. Find the middle of the array.
3. Split the array into left and right halves.
4. Recursively sort both halves.
5. Merge the two sorted halves.
6. Return the merged array.

---

# 💻 JavaScript Solution

```js
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [-6, 20, 8, -2, 4];

console.log(mergeSort(arr));
// [-6, -2, 4, 8, 20]
```

---

# 🔍 Code Breakdown

```js
if (arr.length < 2)
```

If the array has zero or one element, it is already sorted.

Return it immediately.

---

```js
const mid = Math.floor(arr.length / 2);
```

Find the middle index.

---

```js
const leftArr = arr.slice(0, mid);
```

Create the left half.

---

```js
const rightArr = arr.slice(mid);
```

Create the right half.

---

```js
mergeSort(leftArr);
```

Recursively sort the left half.

---

```js
mergeSort(rightArr);
```

Recursively sort the right half.

---

```js
merge(...)
```

Merge the two sorted halves into one sorted array.

---

```js
while (leftArr.length && rightArr.length)
```

Continue while both arrays still contain elements.

---

```js
if (leftArr[0] <= rightArr[0])
```

Compare the first elements.

Take the smaller one.

---

```js
sortedArr.push(leftArr.shift());
```

Move the smaller element into the sorted array.

---

```js
return [...sortedArr, ...leftArr, ...rightArr];
```

Append any remaining elements after one side becomes empty.

---

# 🔍 Dry Run

Sort

```text
[-6, 20, 8, -2, 4]
```

### Split

```text
[-6, 20]

[8, -2, 4]
```

---

### Split Again

```text
[-6]

[20]

[8]

[-2, 4]
```

---

### Split Again

```text
[-2]

[4]
```

---

### Merge

```text
[-2]

+

[4]

↓

[-2, 4]
```

---

### Merge

```text
[8]

+

[-2, 4]

↓

[-2, 4, 8]
```

---

### Merge

```text
[-6]

+

[20]

↓

[-6, 20]
```

---

### Final Merge

Compare

```text
-6 vs -2

↓

Take -6
```

Compare

```text
20 vs -2

↓

Take -2
```

Compare

```text
20 vs 4

↓

Take 4
```

Compare

```text
20 vs 8

↓

Take 8
```

Only one element remains.

```text
20
```

Final result

```text
[-6, -2, 4, 8, 20]
```

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(n log n)
```

Reason:

The array is repeatedly divided into halves, and each merge processes all elements once.

---

### Average Case

```text
O(n log n)
```

Reason:

The same divide-and-merge process happens regardless of the input order.

---

### Best Case

```text
O(n log n)
```

Reason:

Even if the array is already sorted, Merge Sort still splits and merges every level.

---

## Space Complexity

```text
O(n)
```

Reason:

Merge Sort creates additional arrays while merging.

It is **not** an in-place sorting algorithm.

---

# 💡 Tips for Merge Sort

- Think of repeatedly cutting the array in half.
- A single element is already sorted.
- The real work happens during the merge step.
- Always merge two sorted arrays into one sorted array.
- Merge Sort is much faster than Bubble Sort and Insertion Sort for large datasets.

---

# 📝 Key Takeaways

- Merge Sort uses the **divide-and-conquer** approach.
- It repeatedly splits the array into smaller halves.
- Each half is recursively sorted.
- The sorted halves are merged together.
- The merge step always combines two sorted arrays.
- Merge Sort has consistent performance regardless of input order.
- It requires additional memory to create temporary arrays.
- **Worst Time Complexity:** `O(n log n)`
- **Average Time Complexity:** `O(n log n)`
- **Best Time Complexity:** `O(n log n)`
- **Space Complexity:** `O(n)`
