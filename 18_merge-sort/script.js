// ==========================================
// Merge Sort
// ==========================================

const arr = [-6, 20, 8, -2, 4];

function mergeSort(arr) {
  // Arrays with zero or one element
  // are already sorted.
  if (arr.length < 2) {
    return arr;
  }

  // Find the middle of the array.
  const mid = Math.floor(arr.length / 2);

  // Split the array into two halves.
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Recursively sort both halves,
  // then merge them together.
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  // Store the merged result.
  const sortedArr = [];

  // Compare the first element of each array
  // and move the smaller one into sortedArr.
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  // One array may still contain elements.
  // Append all remaining elements.
  return [...sortedArr, ...leftArr, ...rightArr];
}

const sortedArr = mergeSort(arr);

console.log(sortedArr); // [-6, -2, 4, 8, 20]

/*
==========================================
Understanding Merge Sort
==========================================

Merge Sort is a Divide and Conquer algorithm.

Instead of sorting the entire array at once,
it repeatedly divides the array into
smaller pieces.

Eventually, every piece contains only
one element.

Since a single element is already sorted,
Merge Sort starts combining (merging)
those small sorted arrays back together.

During each merge, the smaller element
is chosen first.

Eventually, every small sorted array
is merged into one completely sorted array.

==========================================

Initial Array

[-6, 20, 8, -2, 4]

------------------------------------------

Step 1

Split the array.

[-6, 20]

[8, -2, 4]

------------------------------------------

Step 2

Split again.

[-6]

[20]

[8]

[-2, 4]

------------------------------------------

Step 3

Split again.

[-2]

[4]

Now every subarray contains
only one element.

==========================================
Merging Begins
==========================================

Merge

[-2]

+

[4]

Compare

-2 < 4

Take -2.

Then append 4.

Result

[-2, 4]

------------------------------------------

Merge

[8]

+

[-2, 4]

Compare

8 vs -2

Take -2.

Result

[-2]

Compare

8 vs 4

Take 4.

Result

[-2, 4]

Right array is empty.

Append remaining element.

8

Merged result

[-2, 4, 8]

------------------------------------------

Merge

[-6]

+

[20]

Compare

-6 < 20

Take -6.

Append remaining element.

20

Merged result

[-6, 20]

==========================================
Final Merge
==========================================

Left

[-6, 20]

Right

[-2, 4, 8]

Compare

-6 vs -2

Take -6.

Merged

[-6]

------------------------------------------

Compare

20 vs -2

Take -2.

Merged

[-6, -2]

------------------------------------------

Compare

20 vs 4

Take 4.

Merged

[-6, -2, 4]

------------------------------------------

Compare

20 vs 8

Take 8.

Merged

[-6, -2, 4, 8]

------------------------------------------

Right array is empty.

Append remaining element.

20

Final result

[-6, -2, 4, 8, 20]

==========================================
Why Does This Work?
==========================================

Merge Sort keeps dividing the array
until every subarray contains only
one element.

A single element is already sorted.

Then it starts merging two sorted
arrays together.

Since both arrays are already sorted,
we only need to compare their first
elements.

Whichever element is smaller is added
to the merged array.

This process continues until one array
becomes empty.

Finally, the remaining elements from
the other array are appended.

Every merge produces another sorted array.

Eventually, the entire array becomes sorted.

==========================================
Time Complexity
==========================================

Best Case

Even if the array is already sorted,
Merge Sort still divides and merges
every level.

Best Time Complexity = O(n log n)

------------------------------------------

Average Case

The array is always divided into halves,
and every merge visits each element once.

Average Time Complexity = O(n log n)

------------------------------------------

Worst Case

The same divide-and-merge process
occurs regardless of the input order.

Worst Time Complexity = O(n log n)

==========================================
Space Complexity
==========================================

Merge Sort creates new arrays while
splitting and merging.

Because of these extra arrays,
it is not an in-place sorting algorithm.

Space Complexity = O(n)

==========================================
Final Answer
==========================================

Best Time Complexity    : O(n log n)

Average Time Complexity : O(n log n)

Worst Time Complexity   : O(n log n)

Space Complexity        : O(n)
*/
