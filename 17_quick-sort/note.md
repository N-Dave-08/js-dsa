# 🃏 Problem: Quick Sort

## Problem Statement

Given an array of integers, sort the array in **ascending order** using the **Quick Sort** algorithm.

Example:

```js
const arr = [-6, 20, 8, -2, 4];

quickSort(arr);
// [-6, -2, 4, 8, 20]
```

---

# 📖 What is Quick Sort?

**Quick Sort** is a divide-and-conquer sorting algorithm that sorts an array by repeatedly selecting a **pivot** element and partitioning the remaining elements around it.

Instead of sorting the entire array at once, Quick Sort:

- Chooses a pivot.
- Places smaller values on the left.
- Places larger values on the right.
- Recursively repeats the same process for the left and right sides.

Once every partition contains only one element, the entire array is sorted.

---

# 🧠 Quick Sort Idea

The key idea behind Quick Sort is to repeatedly divide the array into smaller arrays.

Each step consists of:

1. Select a pivot element.
2. Compare every other element with the pivot.
3. Put smaller elements into the **left** array.
4. Put larger elements into the **right** array.
5. Recursively sort the left and right arrays.
6. Combine:

```text
Sorted Left + Pivot + Sorted Right
```

---

# 🎯 Choosing a Pivot

A **pivot** is the element used to divide the array into two parts.

There are several ways to choose a pivot:

- First element
- Last element **(our approach)**
- Random element
- Median element

In this tutorial, we'll always use the **last element** as the pivot.

Example:

```text
[-6, 20, 8, -2, 4]
                  ↑
                Pivot
```

---

# 🌊 First Partition

Suppose we have:

```text
[-6, 20, 8, -2, 4]
```

Choose the last element as the pivot.

```text
Pivot = 4
```

Now compare every element except the pivot.

```text
-6 < 4
```

Place it into the left array.

```text
Left

[-6]
```

---

Compare:

```text
20 > 4
```

Place it into the right array.

```text
Right

[20]
```

---

Compare:

```text
8 > 4
```

```text
Right

[20, 8]
```

---

Compare:

```text
-2 < 4
```

```text
Left

[-6, -2]
```

Now we've compared every element.

Result:

```text
Left

[-6, -2]

Pivot

4

Right

[20, 8]
```

Notice that **the pivot is already in its correct final position**.

The only remaining work is to sort the left and right arrays.

---

# 🔄 Continue Recursively

We now sort the two smaller arrays.

```text
quickSort([-6, -2])

quickSort([20, 8])
```

Each recursive call performs the exact same process.

---

## Left Side

```text
[-6, -2]
```

Choose the last element.

```text
Pivot = -2
```

Compare:

```text
-6 < -2
```

Left

```text
[-6]
```

Right

```text
[]
```

Result:

```text
[-6] + [-2] + []
```

which becomes

```text
[-6, -2]
```

The left side is sorted.

---

## Right Side

Current array:

```text
[20, 8]
```

Choose the last element.

```text
Pivot = 8
```

Compare:

```text
20 > 8
```

Left

```text
[]
```

Right

```text
[20]
```

Result:

```text
[] + [8] + [20]
```

which becomes

```text
[8, 20]
```

The right side is sorted.

---

# 🔗 Combine Everything

We now have:

```text
Left

[-6, -2]

Pivot

4

Right

[8, 20]
```

Combine them.

```text
[-6, -2] + [4] + [8, 20]
```

Result:

```text
[-6, -2, 4, 8, 20]
```

The array is now completely sorted.

---

# 🧪 Examples

```text
quickSort([-6, 20, 8, -2, 4])
```

Output

```text
[-6, -2, 4, 8, 20]
```

---

```text
quickSort([5, 4, 3, 2, 1])
```

Output

```text
[1, 2, 3, 4, 5]
```

---

```text
quickSort([1, 2, 3, 4, 5])
```

Output

```text
[1, 2, 3, 4, 5]
```

The array is already sorted.

---

# 🧠 Quick Sort Thinking

For every recursive call:

```text
Choose a Pivot

↓

Partition the array

↓

Smaller values
go left

↓

Larger values
go right

↓

Recursively sort
both sides

↓

Combine

Left + Pivot + Right
```

Unlike Bubble Sort or Insertion Sort, Quick Sort doesn't repeatedly move neighboring elements.

Instead, it repeatedly divides the problem into smaller pieces until each piece is naturally sorted.

---

# 🌊 Another Visual Example

Suppose we have:

```text
[7, 2, 5, 1]
```

Choose the last element.

```text
Pivot = 1
```

Partition:

```text
Left

[]

Pivot

1

Right

[7, 2, 5]
```

Now sort the right side.

Choose:

```text
Pivot = 5
```

Partition:

```text
Left

[2]

Pivot

5

Right

[7]
```

Combine:

```text
[2, 5, 7]
```

Finally:

```text
[1, 2, 5, 7]
```

---

# 🔑 Partition Rule

For every element:

```text
Element < Pivot

↓

Left Array
```

```text
Element > Pivot

↓

Right Array
```

After every recursive call:

```text
Sorted Left

+

Pivot

+

Sorted Right
```

---

# 📝 Algorithm

1. If the array contains zero or one element, return it.
2. Choose the last element as the pivot.
3. Compare every other element with the pivot.
4. Place smaller values into the left array.
5. Place larger values into the right array.
6. Recursively sort the left and right arrays.
7. Concatenate:

```text
Left + Pivot + Right
```

to produce the sorted array.

---

# 💻 JavaScript Solution

```js
function quickSort(arr) {
  // Arrays with 0 or 1 element are already sorted.
  if (arr.length < 2) {
    return arr;
  }

  // Choose the last element as the pivot.
  const pivot = arr[arr.length - 1];

  const left = [];
  const right = [];

  // Compare every element except the pivot.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left and right arrays,
  // then combine them with the pivot.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [-6, 20, 8, -2, 4];

console.log(quickSort(arr));
// [-6, -2, 4, 8, 20]
```

---

# 🔍 Code Breakdown

### Base Case

```js
if (arr.length < 2) {
  return arr;
}
```

If the array contains **zero or one element**, it is already sorted.

Examples:

```text
[]
```

```text
[-6]
```

No further work is required.

---

### Choose the Pivot

```js
const pivot = arr[arr.length - 1];
```

We always choose the **last element**.

Example:

```text
[-6, 20, 8, -2, 4]
                  ↑
                Pivot
```

Here,

```text
pivot = 4
```

---

### Create the Left and Right Arrays

```js
const left = [];
const right = [];
```

The left array stores values **smaller** than the pivot.

The right array stores values **greater than or equal to** the pivot.

---

### Compare Every Element

```js
for (let i = 0; i < arr.length - 1; i++)
```

Notice:

```js
arr.length - 1;
```

We stop before the last element because the last element is the pivot.

---

### Put Smaller Elements on the Left

```js
if (arr[i] < pivot) {
  left.push(arr[i]);
}
```

Example:

```text
Pivot = 4

-6 < 4
```

Result

```text
Left

[-6]
```

---

### Put Larger Elements on the Right

```js
else {
    right.push(arr[i]);
}
```

Example:

```text
20 > 4
```

Result

```text
Right

[20]
```

---

### Recursive Call

```js
return [...quickSort(left), pivot, ...quickSort(right)];
```

This is the heart of Quick Sort.

It means:

1. Sort the left array.
2. Put the pivot after it.
3. Sort the right array.
4. Combine everything into one array.

---

# 🔍 Complete Dry Run

Sort:

```text
[-6, 20, 8, -2, 4]
```

---

## First Call

```text
quickSort([-6, 20, 8, -2, 4])
```

Choose

```text
Pivot = 4
```

Compare every element.

```text
-6 < 4

Left

[-6]
```

```text
20 > 4

Right

[20]
```

```text
8 > 4

Right

[20, 8]
```

```text
-2 < 4

Left

[-6, -2]
```

After partitioning:

```text
Left

[-6, -2]

Pivot

4

Right

[20, 8]
```

Now Quick Sort recursively sorts both sides.

---

## Recursive Call 1

```text
quickSort([-6, -2])
```

Choose

```text
Pivot = -2
```

Compare

```text
-6 < -2
```

Result

```text
Left

[-6]

Right

[]
```

Now recursively sort again.

---

### Left Side

```text
quickSort([-6])
```

Only one element.

Return immediately.

```text
[-6]
```

---

### Right Side

```text
quickSort([])
```

Empty array.

Return immediately.

```text
[]
```

Combine

```text
[-6]

+

[-2]

+

[]
```

Result

```text
[-6, -2]
```

The left half is sorted.

---

## Recursive Call 2

```text
quickSort([20, 8])
```

Choose

```text
Pivot = 8
```

Compare

```text
20 > 8
```

Result

```text
Left

[]

Right

[20]
```

---

### Left Side

```text
quickSort([])
```

Returns

```text
[]
```

---

### Right Side

```text
quickSort([20])
```

Returns

```text
[20]
```

Combine

```text
[]

+

[8]

+

[20]
```

Result

```text
[8, 20]
```

The right half is sorted.

---

## Final Combination

Now we have

```text
Sorted Left

[-6, -2]
```

Pivot

```text
4
```

Sorted Right

```text
[8, 20]
```

Combine them.

```text
[-6, -2]

+

[4]

+

[8, 20]
```

Result

```text
[-6, -2, 4, 8, 20]
```

---

# 🌳 Recursion Tree

```text
                 [-6,20,8,-2,4]
                      pivot=4
                   /            \
             [-6,-2]          [20,8]
            pivot=-2          pivot=8
            /      \          /      \
         [-6]      []       []      [20]
```

Now combine from the bottom upward.

```text
[-6]

↓

[-6,-2]

↓

[8,20]

↓

[-6,-2,4,8,20]
```

---

# 💡 Why Is It Called "Divide and Conquer"?

Quick Sort doesn't try to sort the whole array in one pass.

Instead it repeatedly:

```text
Divide

↓

Sort smaller arrays

↓

Combine
```

Each recursive call works on a much smaller portion of the original array until every array contains only one element, which is already sorted by definition.

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(n²)
```

**Reason:**

The worst case occurs when the pivot repeatedly divides the array into one very large partition and one empty partition.

Example:

```text
[1, 2, 3, 4, 5]
```

Using the **last element** as the pivot:

```text
Pivot = 5

Left

[1, 2, 3, 4]

Right

[]
```

The next recursive call becomes:

```text
[1, 2, 3, 4]
```

Again:

```text
Pivot = 4

Left

[1, 2, 3]

Right

[]
```

This continues until only one element remains.

Instead of dividing the work evenly, Quick Sort processes almost the entire array again and again.

---

### Average Case

```text
O(n log n)
```

**Reason:**

On average, the pivot divides the array into two reasonably balanced parts.

For example:

```text
[10, 3, 8, 15, 6, 12]
```

might become

```text
[3, 6]

Pivot

8

[10, 15, 12]
```

Each recursive call works on approximately half of the previous array.

Because the array keeps getting divided, Quick Sort is much faster than Bubble Sort or Insertion Sort for large datasets.

---

### Best Case

```text
O(n log n)
```

**Reason:**

The best case occurs when every pivot divides the array almost perfectly in half.

Example:

```text
8

↓

[3, 5, 6]

[12, 15, 20]
```

Each level processes every element once.

The number of levels is approximately:

```text
log₂(n)
```

So the total work becomes:

```text
n × log n
```

which is written as

```text
O(n log n)
```

---

## Space Complexity

```text
O(n)
```

**Reason:**

This implementation creates two new arrays:

```text
Left

Right
```

during every recursive call.

These extra arrays require additional memory.

> **Note:** Some versions of Quick Sort are implemented **in place**, reducing the extra memory usage, but the implementation in this tutorial uses additional arrays for simplicity.

---

# 🌳 Why Is Quick Sort So Fast?

Instead of comparing every element with every other element, Quick Sort repeatedly divides the problem into smaller pieces.

Imagine sorting:

```text
1,000 numbers
```

Instead of sorting all 1,000 at once, it might divide them into:

```text
500

500
```

Then

```text
250

250

250

250
```

Then

```text
125

125

125

125

125

125

125

125
```

Each recursive call becomes easier because it works on a much smaller array.

---

# 🧠 Quick Sort Thinking

Whenever you see Quick Sort, think:

```text
Choose a Pivot

↓

Partition

↓

Left

Pivot

Right

↓

Sort Left

↓

Sort Right

↓

Combine
```

The same process repeats until every array has one element.

---

# 🌊 Visual Summary

Suppose we have

```text
[-6, 20, 8, -2, 4]
```

Choose the last element.

```text
Pivot = 4
```

Partition:

```text
        4
      /   \
[-6,-2] [20,8]
```

Sort left.

```text
[-6,-2]
```

Sort right.

```text
[8,20]
```

Combine.

```text
[-6,-2]

+

[4]

+

[8,20]
```

Final result:

```text
[-6,-2,4,8,20]
```

---

# 💡 Tips for Quick Sort

- Choose a pivot.
- Compare every element with the pivot.
- Smaller values go left.
- Larger values go right.
- Recursively repeat the same process.
- Arrays with one element are already sorted.
- Combine the sorted left array, pivot, and sorted right array.

---

# 🆚 Quick Sort vs Bubble Sort

| Bubble Sort                   | Quick Sort                     |
| ----------------------------- | ------------------------------ |
| Compares neighboring elements | Compares elements with a pivot |
| Swaps repeatedly              | Partitions the array           |
| No recursion                  | Uses recursion                 |
| Average: `O(n²)`              | Average: `O(n log n)`          |
| Simple but slow               | Fast for large datasets        |

---

# 🆚 Quick Sort vs Insertion Sort

| Insertion Sort                     | Quick Sort                        |
| ---------------------------------- | --------------------------------- |
| Builds one sorted portion          | Divides the array into partitions |
| Shifts larger elements             | Uses a pivot                      |
| Excellent for nearly sorted arrays | Excellent for large random arrays |
| Average: `O(n²)`                   | Average: `O(n log n)`             |

---

# 📝 Key Takeaways

- Quick Sort is a **divide-and-conquer** algorithm.
- A **pivot** is chosen to partition the array.
- Smaller elements go to the left.
- Larger elements go to the right.
- The same process is applied recursively to both partitions.
- Arrays with zero or one element are already sorted.
- The final sorted array is built by combining:

```text
Sorted Left

+

Pivot

+

Sorted Right
```

- **Worst Time Complexity:** `O(n²)`
- **Average Time Complexity:** `O(n log n)`
- **Best Time Complexity:** `O(n log n)`
- **Space Complexity (this implementation):** `O(n)`

---

# 🎯 Remember Quick Sort in One Sentence

> **Choose a pivot, split the array into smaller and larger values, recursively sort both sides, then combine them into one sorted array.**
