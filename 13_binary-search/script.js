// ==========================================
// Binary Search (Iterative)
// ==========================================

// Binary Search only works on a SORTED array.
const nums = [-5, 2, 4, 6, 10];

function binarySearch(arr, target) {
  // The search starts with the entire array.
  let left = 0;
  let right = arr.length - 1;

  // Continue searching while there is a valid range.
  while (left <= right) {
    // Find the middle index.
    const middle = Math.floor((left + right) / 2);

    // If the middle element is the target,
    // return its index.
    if (arr[middle] === target) {
      return middle;
    }

    // If the target is smaller than the middle element,
    // search the left half.
    if (target < arr[middle]) {
      right = middle - 1;
    }
    // Otherwise, search the right half.
    else {
      left = middle + 1;
    }
  }

  // The target was not found.
  return -1;
}

console.log(binarySearch(nums, 10)); // 4
console.log(binarySearch(nums, 6)); // 3
console.log(binarySearch(nums, 4)); // 2
console.log(binarySearch(nums, 7)); // -1

/*
==========================================
Understanding the Algorithm
==========================================

Suppose we search for:

Target = 10

Array:

[-5, 2, 4, 6, 10]

------------------------------------------

Iteration 1

Left  = 0
Right = 4

Middle = (0 + 4) / 2 = 2

arr[2] = 4

10 > 4

Ignore the left half.

New search range:

[6, 10]

Left = 3
Right = 4

------------------------------------------

Iteration 2

Middle = (3 + 4) / 2 = 3

arr[3] = 6

10 > 6

Ignore the left half again.

New search range:

[10]

Left = 4
Right = 4

------------------------------------------

Iteration 3

Middle = (4 + 4) / 2 = 4

arr[4] = 10

Target found!

Return:

4

==========================================

Example 2

Search for:

Target = 7

------------------------------------------

Iteration 1

Middle = 2

arr[2] = 4

7 > 4

Search right half.

------------------------------------------

Iteration 2

Middle = 3

arr[3] = 6

7 > 6

Search right half.

------------------------------------------

Iteration 3

Middle = 4

arr[4] = 10

7 < 10

Search left half.

Now:

Left = 4
Right = 3

Left > Right

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

Instead of checking every element,
the search space becomes:

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

Worst Case

Each iteration cuts the search
space in half.

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

The number of iterations grows
logarithmically.

Worst Time Complexity = O(log n)

==========================================
Space Complexity
==========================================

The algorithm only stores:

- left
- right
- middle

No additional arrays or data
structures are created.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Best Time Complexity  : O(1)

Worst Time Complexity : O(log n)

Space Complexity      : O(1)
*/
