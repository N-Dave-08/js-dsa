// ==========================================
// Recursive Binary Search
// ==========================================

// Binary Search only works on a SORTED array.
const nums = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(arr, target) {
  // Start searching the entire array.
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  // Base case:
  // If the search range becomes invalid,
  // the target does not exist.
  if (left > right) {
    return -1;
  }

  // Find the middle index of the current search range.
  const middle = left + Math.floor((right - left) / 2);

  // If the middle element is the target,
  // return its index.
  if (arr[middle] === target) {
    return middle;
  }

  // If the target is smaller than the middle element,
  // recursively search the left half.
  if (target < arr[middle]) {
    return search(arr, target, left, middle - 1);
  }

  // Otherwise, recursively search the right half.
  return search(arr, target, middle + 1, right);
}

console.log(recursiveBinarySearch(nums, 10)); // 4
console.log(recursiveBinarySearch(nums, 6)); // 3
console.log(recursiveBinarySearch(nums, 4)); // 2
console.log(recursiveBinarySearch(nums, 7)); // -1

/*
==========================================
Understanding the Algorithm
==========================================

Suppose we search for:

Target = 10

Array:

[-5, 2, 4, 6, 10]

------------------------------------------

Call 1

Left  = 0
Right = 4

Middle = 0 + (4 - 0) / 2 = 2

arr[2] = 4

10 > 4

Discard the left half, including
the middle element.

Recursively search the right half.

search(arr, 10, 3, 4)

------------------------------------------

Call 2

Left  = 3
Right = 4

Middle = 3 + (4 - 3) / 2 = 3

arr[3] = 6

10 > 6

Discard the left half, including
the middle element.

Recursively search the right half.

search(arr, 10, 4, 4)

------------------------------------------

Call 3

Left  = 4
Right = 4

Middle = 4 + (4 - 4) / 2 = 4

arr[4] = 10

Target found!

Return:

4

==========================================

Example 2

Search for:

Target = 7

------------------------------------------

Call 1

Left  = 0
Right = 4

Middle = 2

arr[2] = 4

7 > 4

Discard the left half.

Recursively search the right half.

------------------------------------------

Call 2

Left  = 3
Right = 4

Middle = 3

arr[3] = 6

7 > 6

Discard the left half.

Recursively search the right half.

------------------------------------------

Call 3

Left  = 4
Right = 4

Middle = 4

arr[4] = 10

7 < 10

Discard the right half,
including the middle element.

Recursively search the left half.

search(arr, 7, 4, 3)

------------------------------------------

Base Case

Left  = 4
Right = 3

Left > Right

The search range is invalid.

Stop searching.

Return:

-1

==========================================
Why Does This Work?
==========================================

The array is sorted.

After comparing the target with the
middle element, we can immediately
eliminate half of the remaining elements.

Instead of using a loop, the function
calls itself to search the remaining half.

The search space becomes:

n

↓

n / 2

↓

n / 4

↓

n / 8

↓

...

Until the target is found or
no elements remain.

==========================================
Time Complexity
==========================================

Best Case

The target is already the middle element.

Only one comparison is needed.

Best Time Complexity = O(1)

------------------------------------------

Average Case

Each recursive call cuts the
remaining search space in half.

Average Time Complexity = O(log n)

------------------------------------------

Worst Case

Each recursive call cuts the
search space in half.

Example:

16 elements

↓

8 elements

↓

4 elements

↓

2 elements

↓

1 element

The number of recursive calls grows
logarithmically.

Worst Time Complexity = O(log n)

==========================================
Space Complexity
==========================================

Unlike the iterative version,
each recursive call is stored
on the call stack.

Example:

search()

↓

search()

↓

search()

↓

search()

↓

Base Case

The maximum number of recursive
calls is approximately log₂(n).

Therefore:

Space Complexity = O(log n)

==========================================
Final Answer
==========================================

Best Time Complexity    : O(1)

Average Time Complexity : O(log n)

Worst Time Complexity   : O(log n)

Space Complexity        : O(log n)
*/
