// ==========================================
// Cartesian Product
// ==========================================

const arr1 = [1, 2];
const arr2 = [3, 4];

function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

console.log(cartesianProduct(arr1, arr2));
// [
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4]
// ]

/*
==========================================
Understanding Cartesian Product
==========================================

The Cartesian Product creates every
possible pair between two arrays.

For each element in the first array,
it pairs that element with every element
in the second array.

This is why we use nested loops.

------------------------------------------

Initial arrays:

arr1 = [1, 2]
arr2 = [3, 4]

------------------------------------------

Outer Loop (i = 0)

Current element:

1

Inner Loop:

Pair 1 with 3

Result:
[
  [1, 3]
]

------------------------------------------

Pair 1 with 4

Result:
[
  [1, 3],
  [1, 4]
]

------------------------------------------

Outer Loop (i = 1)

Current element:

2

Inner Loop:

Pair 2 with 3

Result:
[
  [1, 3],
  [1, 4],
  [2, 3]
]

------------------------------------------

Pair 2 with 4

Result:
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]

------------------------------------------

Final Result

[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]

==========================================
Key Idea
==========================================

- Loop through every element in the first array.
- For each element, loop through every element in the second array.
- Create a pair containing both elements.
- Store the pair in the result array.
- Continue until every possible pair has been created.

==========================================
Time Complexity
==========================================

Worst Case:
O(m × n)

- Every element in the first array
  is paired with every element in
  the second array.

Average Case:
O(m × n)

- Every possible pair must still
  be generated.

Best Case:
O(m × n)

- There is no faster case because
  all pairs are always produced.

==========================================
Space Complexity
==========================================

O(m × n)

Because the result array stores
every possible pair.

==========================================
Final Answer
==========================================

Worst Time Complexity   : O(m × n)
Average Time Complexity : O(m × n)
Best Time Complexity    : O(m × n)
Space Complexity        : O(m × n)
*/
