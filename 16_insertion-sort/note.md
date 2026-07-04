# 🃏 Problem: Insertion Sort

## Problem Statement

Given an array of integers, sort the array in **ascending order** using the **Insertion Sort** algorithm.

Example:

```js
const arr = [-6, 20, 8, -2, 4];

insertionSort(arr);
// [-6, -2, 4, 8, 20]
```

---

# 📖 What is Insertion Sort?

**Insertion Sort** is a simple sorting algorithm that builds the sorted array **one element at a time**.

It works by **virtually dividing** the array into two parts:

- A **sorted** part
- An **unsorted** part

Initially:

- The **first element** is considered sorted.
- Every other element belongs to the unsorted part.

One by one, each element from the unsorted part is inserted into its correct position in the sorted part.

---

# 🧠 Insertion Sort Idea

Imagine the array is divided like this:

```text
Sorted | Unsorted

[-6] | [20, 8, -2, 4]
```

The first element is already sorted.

Take the first unsorted element:

```text
20
```

Compare it with the sorted part.

```text
-6 < 20
```

Since it belongs after **-6**, no shifting is needed.

```text
[-6, 20] | [8, -2, 4]
```

---

Now take:

```text
8
```

Compare from right to left.

```text
20 > 8
```

Shift **20** one position to the right.

```text
[-6, 20, 20, -2, 4]
```

Now compare with **-6**.

```text
-6 < 8
```

Insert **8**.

```text
[-6, 8, 20] | [-2, 4]
```

---

# 🔄 How Insertion Sort Works

Suppose we have:

```text
[-6, 20, 8, -2, 4]
```

Initially:

```text
Sorted   | Unsorted

[-6]     | [20, 8, -2, 4]
```

---

Insert **20**

```text
[-6, 20] | [8, -2, 4]
```

---

Insert **8**

Shift 20.

```text
[-6, 8, 20] | [-2, 4]
```

---

Insert **-2**

Shift 20.

Shift 8.

Shift -6.

```text
[-2, -6, 8, 20]
```

Insert -2.

```text
[-6, -2, 8, 20] | [4]
```

---

Insert **4**

Shift 20.

Shift 8.

```text
[-6, -2, 4, 8, 20]
```

The array is now completely sorted.

---

# 🧪 Examples

```text
insertionSort([-6, 20, 8, -2, 4])
```

Output

```text
[-6, -2, 4, 8, 20]
```

---

```text
insertionSort([5, 4, 3, 2, 1])
```

Output

```text
[1, 2, 3, 4, 5]
```

---

```text
insertionSort([1, 2, 3, 4])
```

Output

```text
[1, 2, 3, 4]
```

The array is already sorted.

---

# 🧠 Insertion Sort Thinking

For every element after the first:

```text
Pick the current element

↓

Compare it with elements
to its left

↓

If larger elements exist

↓

Shift them right

↓

Insert the current element
into the empty position
```

Unlike Bubble Sort, Insertion Sort **moves the current element to its correct position immediately**.

---

# 🌊 Visual Example

Consider:

```text
[5, 2, 4, 6]
```

Initially

```text
[5] | [2, 4, 6]
```

Insert 2

```text
[2, 5] | [4, 6]
```

Insert 4

```text
[2, 4, 5] | [6]
```

Insert 6

```text
[2, 4, 5, 6]
```

Sorted!

---

# 🔑 Shifting Condition

Keep shifting while:

```text
Current Left Element > Selected Element
```

Example:

```text
20 > 8

↓

Shift 20 to the right
```

---

# 📝 Algorithm

1. Assume the first element is already sorted.
2. Pick the next element from the unsorted part.
3. Compare it with elements in the sorted part from right to left.
4. Shift larger elements one position to the right.
5. Insert the selected element into the empty position.
6. Repeat until every element has been inserted.

---

# 💻 JavaScript Solution

```js
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = numberToInsert;
  }

  return arr;
}

const arr = [-6, 20, 8, -2, 4];

console.log(insertionSort(arr));
// [-6, -2, 4, 8, 20]
```

---

# 🔍 Code Breakdown

```js
for (let i = 1; i < arr.length; i++)
```

Start from index **1** because the first element is already considered sorted.

---

```js
const numberToInsert = arr[i];
```

Store the current element that we want to insert into the sorted part.

---

```js
let j = i - 1;
```

Start comparing with the element immediately to the left.

---

```js
while (j >= 0 && arr[j] > numberToInsert)
```

Continue moving left while:

- We haven't reached the beginning.
- The current sorted element is larger.

---

```js
arr[j + 1] = arr[j];
```

Shift the larger element one position to the right.

---

```js
j--;
```

Move one step left.

---

```js
arr[j + 1] = numberToInsert;
```

Insert the selected element into its correct position.

---

# 🔍 Dry Run

Sort:

```text
[-6, 20, 8, -2, 4]
```

### Pass 1

Insert **20**

```text
[-6, 20]
```

---

### Pass 2

Insert **8**

Shift 20.

```text
[-6, 20, 20, -2, 4]
```

Insert 8.

```text
[-6, 8, 20, -2, 4]
```

---

### Pass 3

Insert **-2**

Shift 20.

```text
[-6, 8, 20, 20, 4]
```

Shift 8.

```text
[-6, 8, 8, 20, 4]
```

Shift -6.

```text
[-6, -6, 8, 20, 4]
```

Insert -2.

```text
[-6, -2, 8, 20, 4]
```

---

### Pass 4

Insert **4**

Shift 20.

```text
[-6, -2, 8, 20, 20]
```

Shift 8.

```text
[-6, -2, 8, 8, 20]
```

Insert 4.

```text
[-6, -2, 4, 8, 20]
```

Array sorted.

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(n²)
```

Reason:

The array is reverse sorted.

Every new element must be shifted all the way to the beginning.

Example:

```text
[5, 4, 3, 2, 1]
```

---

### Average Case

```text
O(n²)
```

Reason:

Random arrays usually require several shifts.

---

### Best Case

```text
O(n)
```

Reason:

The array is already sorted.

No shifting is required.

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

Insertion Sort sorts the array **in place**.

It only uses a few extra variables.

---

# 💡 Tips for Insertion Sort

- Think of sorting playing cards in your hand.
- The left side is always sorted.
- Shift larger elements instead of swapping repeatedly.
- Insert the current element into its correct position.
- Very efficient for **small** or **nearly sorted** arrays.

---

# 📝 Key Takeaways

- Insertion Sort divides the array into a sorted and an unsorted part.
- The first element is assumed to be sorted.
- Each new element is inserted into its correct position.
- Larger elements are shifted to make room.
- It performs well on nearly sorted arrays.
- It is an **in-place** sorting algorithm.
- **Worst Time Complexity:** `O(n²)`
- **Average Time Complexity:** `O(n²)`
- **Best Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`
