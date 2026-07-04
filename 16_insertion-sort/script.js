// ==========================================
// Insertion Sort
// ==========================================

const arr = [-6, 20, 8, -2, 4];

function insertionSort(arr) {
  // Start from the second element since
  // the first element is already considered sorted.
  for (let i = 1; i < arr.length; i++) {
    // Store the current element that will
    // be inserted into the sorted portion.
    let numberToInsert = arr[i];

    // Start comparing with the last element
    // of the sorted portion.
    let j = i - 1;

    // Shift larger elements one position
    // to the right until the correct
    // position is found.
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the stored element into
    // its correct position.
    arr[j + 1] = numberToInsert;
  }
}

insertionSort(arr);

console.log(arr); // [-6, -2, 4, 8, 20]

/*
==========================================
Understanding Insertion Sort
==========================================

Insertion Sort virtually divides the array
into two parts:

1. Sorted
2. Unsorted

Initially, the first element is considered
already sorted.

The algorithm picks one element from the
unsorted portion and inserts it into its
correct position in the sorted portion.

Unlike Bubble Sort, Insertion Sort
does NOT repeatedly swap elements.

Instead, it shifts larger elements to
the right to create a gap.

Then it inserts the current element
into that gap.

==========================================

Initial Array

[-6, 20, 8, -2, 4]

Sorted   | Unsorted

[-6]     | [20, 8, -2, 4]

------------------------------------------

Pass 1

Current element:

20

Compare with:

-6

20 > -6

No shifting needed.

Sorted portion becomes:

[-6, 20]

------------------------------------------

Pass 2

Current element:

8

Temporarily remove 8.

[-6, 20, _, -2, 4]

Compare from right to left.

20 > 8

Shift 20 right.

[-6, _, 20, -2, 4]

Compare again.

-6 > 8 ?

No.

Insert 8.

[-6, 8, 20, -2, 4]

------------------------------------------

Pass 3

Current element:

-2

Temporarily remove it.

[-6, 8, 20, _, 4]

20 > -2

Shift.

[-6, 8, _, 20, 4]

8 > -2

Shift.

[-6, _, 8, 20, 4]

-6 > -2 ?

No.

Insert.

[-6, -2, 8, 20, 4]

------------------------------------------

Pass 4

Current element:

4

Temporarily remove it.

[-6, -2, 8, 20, _]

20 > 4

Shift.

[-6, -2, 8, _, 20]

8 > 4

Shift.

[-6, -2, _, 8, 20]

-2 > 4 ?

No.

Insert.

[-6, -2, 4, 8, 20]

Array is now sorted.

==========================================
Why Does This Work?
==========================================

Before each iteration:

Everything to the left of i
is already sorted.

The current element is taken
from the unsorted portion.

The algorithm walks backwards
through the sorted portion.

If an element is larger,
it shifts it one position right.

Once the correct position is found,
the current element is inserted.

The sorted portion grows by one
element after every iteration.

==========================================
Time Complexity
==========================================

Best Case

Array is already sorted.

Example:

[1, 2, 3, 4, 5]

No shifting occurs.

Best Time Complexity = O(n)

------------------------------------------

Average Case

Some shifting occurs.

Average Time Complexity = O(n²)

------------------------------------------

Worst Case

Array is reverse sorted.

Example:

[5, 4, 3, 2, 1]

Every new element must be shifted
to the beginning.

Worst Time Complexity = O(n²)

==========================================
Space Complexity
==========================================

Insertion Sort sorts the array
in-place.

Only a few extra variables are used.

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Best Time Complexity    : O(n)

Average Time Complexity : O(n²)

Worst Time Complexity   : O(n²)

Space Complexity        : O(1)
*/
