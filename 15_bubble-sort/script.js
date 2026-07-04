// ==========================================
// Bubble Sort (Using Temp Variable)
// ==========================================

const arr = [-6, 20, 8, -2, 4];

function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap using temporary variable
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

console.log(bubbleSort(arr)); // [-6, -2, 4, 8, 20]

/*
==========================================
Understanding Bubble Sort
==========================================

Bubble Sort works by repeatedly comparing
adjacent elements and swapping them if
they are in the wrong order.

Each pass through the array moves the
largest unsorted element to the end.

------------------------------------------

Initial array:

[-6, 20, 8, -2, 4]

------------------------------------------

Pass 1

Compare -6 and 20 → no swap
Compare 20 and 8  → swap
Compare 20 and -2 → swap
Compare 20 and 4  → swap

Result after pass 1:

[-6, 8, -2, 4, 20]

Largest element (20) is now in place.

------------------------------------------

Pass 2

Compare -6 and 8  → no swap
Compare 8 and -2  → swap
Compare 8 and 4   → swap

Result after pass 2:

[-6, -2, 4, 8, 20]

------------------------------------------

Pass 3

Compare -6 and -2 → no swap
Compare -2 and 4  → no swap
Compare 4 and 8   → no swap

No swaps occurred → array is sorted.

Algorithm stops.

------------------------------------------

Final sorted array:

[-6, -2, 4, 8, 20]

==========================================
Key Idea
==========================================

- Compare adjacent elements
- Swap if left > right
- After each pass, largest value "bubbles" to the end
- Stop when a full pass has no swaps

==========================================
Time Complexity
==========================================

Worst Case:
O(n²)
- Reverse sorted array
- Many comparisons + swaps

Average Case:
O(n²)
- Random order array

Best Case:
O(n)
- Already sorted array (only one pass needed)

==========================================
Space Complexity
==========================================

O(1)

Because sorting is done in-place,
and only one extra variable (temp) is used.

==========================================
Final Answer
==========================================

Worst Time Complexity   : O(n²)
Average Time Complexity : O(n²)
Best Time Complexity    : O(n)
Space Complexity        : O(1)
*/
