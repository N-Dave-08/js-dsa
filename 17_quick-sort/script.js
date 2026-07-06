// ==========================================
// Quick Sort
// ==========================================

const arr = [-6, 20, 8, -2, 4];

// ==========================================
// Quick Sort (Last Element as Pivot)
// ==========================================

function quickSort(arr) {
  // Base case:
  // If the array has 0 or 1 element,
  // it is already sorted.
  if (arr.length < 2) {
    return arr;
  }

  // Choose the last element as the pivot.
  const pivot = arr[arr.length - 1];

  // Arrays used to partition the elements.
  const left = [];
  const right = [];

  // Compare every element except the pivot.
  for (let i = 0; i < arr.length - 1; i++) {
    // Smaller values go to the left.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      // Larger (or equal) values go to the right.
      right.push(arr[i]);
    }
  }

  // Recursively sort both partitions
  // and combine them with the pivot.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// ==========================================
// Quick Sort (Random Pivot)
// ==========================================

function quickSortRandomPivot(arr) {
  // Base case:
  // If the array has 0 or 1 element,
  // it is already sorted.
  if (arr.length < 2) {
    return arr;
  }

  // Randomly choose an index.
  const pivotIndex = Math.floor(Math.random() * arr.length);

  // Get the pivot value.
  const pivot = arr[pivotIndex];

  // Arrays used to partition the elements.
  const left = [];
  const right = [];

  // Compare every element except the pivot.
  for (let i = 0; i < arr.length; i++) {
    // Skip the pivot itself.
    if (i === pivotIndex) continue;

    // Smaller values go to the left.
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      // Larger (or equal) values go to the right.
      right.push(arr[i]);
    }
  }

  // Recursively sort both partitions
  // and combine them with the pivot.
  return [...quickSortRandomPivot(left), pivot, ...quickSortRandomPivot(right)];
}

// ==========================================
// Testing
// ==========================================

console.log("Last Element as Pivot");
console.log(quickSort([...arr]));
// [-6, -2, 4, 8, 20]

console.log();

console.log("Random Pivot");
console.log(quickSortRandomPivot([...arr]));
// [-6, -2, 4, 8, 20]

/*
==========================================
Understanding Quick Sort
==========================================

Quick Sort is a Divide and Conquer
sorting algorithm.

Instead of sorting the entire array
at once, it repeatedly breaks the
problem into smaller arrays.

Each recursive call performs the
same three steps:

1. Choose a pivot.
2. Partition the array.
3. Recursively sort both partitions.

Finally, the sorted left array,
the pivot, and the sorted right array
are combined.

==========================================
Choosing the Pivot
==========================================

Quick Sort can choose the pivot
in several different ways.

Common approaches include:

1. First element
2. Last element
3. Random element
4. Median element

This file demonstrates two
implementations.

------------------------------------------

1. Last Element as Pivot

The last element of the array
is always selected as the pivot.

Example

[-6, 20, 8, -2, 4]

Pivot

4

This approach is simple and is
commonly used when first learning
Quick Sort.

However, it may perform poorly
when the array is already sorted
or reverse sorted.

------------------------------------------

2. Random Pivot

A random index is selected.

Example

const pivotIndex =
Math.floor(Math.random() * arr.length);

The pivot is then

arr[pivotIndex]

Choosing a random pivot reduces
the chance of repeatedly creating
very unbalanced partitions.

Because of this, random pivot
selection usually performs better
on real-world data.

==========================================
How Partitioning Works
==========================================

Suppose the array is

[-6, 20, 8, -2, 4]

and the pivot is

4

Compare every element except
the pivot.

-6 < 4

Left

[-6]

--------------------------

20 > 4

Right

[20]

--------------------------

8 > 4

Right

[20, 8]

--------------------------

-2 < 4

Left

[-6, -2]

After partitioning

Left

[-6, -2]

Pivot

4

Right

[20, 8]

The pivot is now between
both partitions.

Quick Sort recursively sorts
the left and right arrays.

==========================================
Understanding Recursion
==========================================

After partitioning

[-6, -2]

4

[20, 8]

Quick Sort does NOT stop.

Instead, it recursively sorts

quickSort([-6, -2])

and

quickSort([20, 8])

The exact same process repeats.

Choose a pivot.

Partition.

Recursively sort.

Eventually every recursive call
receives an array with

[]

or

[one element]

Arrays with zero or one element
are already sorted.

As each recursive call finishes,
the sorted arrays are combined.

==========================================
Combining the Result
==========================================

Every recursive call returns

Sorted Left

+

Pivot

+

Sorted Right

Using the spread operator

return [
  ...quickSort(left),
  pivot,
  ...quickSort(right)
];

Example

Left

[-6, -2]

Pivot

4

Right

[8, 20]

Result

[-6, -2, 4, 8, 20]

The spread operator (...)

expands the elements of an array
instead of inserting the array
itself.

Without the spread operator

[
  [-6, -2],
  4,
  [8, 20]
]

With the spread operator

[
  -6,
  -2,
  4,
  8,
  20
]

==========================================
Time Complexity
==========================================

Best Case

The pivot divides the array into
two nearly equal partitions.

Best Time Complexity

O(n log n)

------------------------------------------

Average Case

Most partitions are reasonably
balanced.

Average Time Complexity

O(n log n)

------------------------------------------

Worst Case

The pivot repeatedly produces
one large partition and one
empty partition.

Example

[1, 2, 3, 4, 5]

using the last element as the pivot.

Worst Time Complexity

O(n²)

Random pivot selection greatly
reduces the likelihood of this
worst-case scenario.

==========================================
Space Complexity
==========================================

This implementation creates
new left and right arrays
during every recursive call.

Space Complexity

O(n)

==========================================
Final Answer
==========================================

Best Time Complexity    : O(n log n)

Average Time Complexity : O(n log n)

Worst Time Complexity   : O(n²)

Space Complexity        : O(n)
*/
