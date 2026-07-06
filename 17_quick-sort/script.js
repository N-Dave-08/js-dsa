// ==========================================
// Quick Sort
// ==========================================

const arr = [-6, 20, 8, -2, 4];

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

console.log(quickSort(arr));
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
Initial Array
==========================================

[-6, 20, 8, -2, 4]

Choose the last element as the pivot.

Pivot

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

Quick Sort now recursively sorts
both partitions.

==========================================
Recursive Call 1
==========================================

quickSort([-6, -2])

Choose the pivot.

Pivot

-2

Compare

-6 < -2

Left

[-6]

Right

[]

Now recursively sort both sides.

quickSort([-6])

↓

[-6]

quickSort([])

↓

[]

Combine

[-6]

+

[-2]

+

[]

↓

[-6, -2]

==========================================
Recursive Call 2
==========================================

quickSort([20, 8])

Choose the pivot.

Pivot

8

Compare

20 > 8

Left

[]

Right

[20]

Sort recursively.

quickSort([])

↓

[]

quickSort([20])

↓

[20]

Combine

[]

+

[8]

+

[20]

↓

[8, 20]

==========================================
Final Combination
==========================================

Sorted Left

[-6, -2]

+

Pivot

4

+

Sorted Right

[8, 20]

↓

[-6, -2, 4, 8, 20]

Array is now sorted.

==========================================
Why Does This Work?
==========================================

Each pivot ends up in its final
sorted position.

The remaining work is to sort the
left and right partitions.

Instead of writing separate logic,
Quick Sort simply calls itself
on each partition.

This process repeats until every
array contains zero or one element.

Arrays of length 0 or 1 are already
sorted, so recursion stops.

As each recursive call finishes,
the sorted arrays are combined
back together.

==========================================
Time Complexity
==========================================

Best Case

The pivot divides the array into
nearly equal halves each time.

Example

[8]

↓

[3, 5, 6]

[12, 15, 20]

Best Time Complexity = O(n log n)

------------------------------------------

Average Case

Most partitions are reasonably
balanced.

Average Time Complexity = O(n log n)

------------------------------------------

Worst Case

The pivot always produces one
very large partition and one
empty partition.

Example

[1, 2, 3, 4, 5]

Using the last element as the pivot.

Worst Time Complexity = O(n²)

==========================================
Space Complexity
==========================================

This implementation creates
new left and right arrays during
every recursive call.

Space Complexity = O(n)

==========================================
Final Answer
==========================================

Best Time Complexity    : O(n log n)

Average Time Complexity : O(n log n)

Worst Time Complexity   : O(n²)

Space Complexity        : O(n)
*/
