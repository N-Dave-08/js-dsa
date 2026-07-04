// ==========================================
// Linear Search
// ==========================================

function linearSearch(arr, target) {
  // Iterate through each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target,
    // return its index.
    if (arr[i] === target) {
      return i;
    }
  }

  // If the target was not found,
  // return -1.
  return -1;
}

const arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 7)); // -1

/*
==========================================
Understanding the Algorithm
==========================================

Suppose we search for:

Target = 10

Array:

[-5, 2, 10, 4, 6]

------------------------------------------

Iteration 1

i = 0

Current element:

-5

-5 === 10 ❌

Move to the next element.

------------------------------------------

Iteration 2

i = 1

Current element:

2

2 === 10 ❌

Move to the next element.

------------------------------------------

Iteration 3

i = 2

Current element:

10

10 === 10 ✅

Return:

2

The search stops immediately because
the target has been found.

==========================================

Example 2

Target = 7

Array:

[-5, 2, 10, 4, 6]

------------------------------------------

Iteration 1

-5 ❌

------------------------------------------

Iteration 2

2 ❌

------------------------------------------

Iteration 3

10 ❌

------------------------------------------

Iteration 4

4 ❌

------------------------------------------

Iteration 5

6 ❌

Reached the end of the array.

Return:

-1

==========================================
Why Does This Work?
==========================================

Linear Search examines each element
from left to right.

If an element matches the target,
its index is returned immediately.

If the loop finishes without finding
the target, -1 is returned.

==========================================
Time Complexity
==========================================

Best Case

The target is the first element.

Example:

[-5, 2, 10, 4, 6]

Target = -5

Only one comparison is needed.

Best Time Complexity = O(1)

------------------------------------------

Worst Case

The target is the last element
or does not exist.

Example 1:

[-5, 2, 10, 4, 6]

Target = 6

Comparisons:

-5 ❌
2  ❌
10 ❌
4  ❌
6  ✅

Total comparisons: 5

------------------------------------------

Example 2:

[-5, 2, 10, 4, 6]

Target = 100

Comparisons:

-5 ❌
2  ❌
10 ❌
4  ❌
6  ❌

Total comparisons: 5

Every element must be checked.

Worst Time Complexity = O(n)

==========================================
Space Complexity
==========================================

The algorithm only stores:

- arr (input)
- target (input)
- i (loop variable)

No additional arrays or data
structures are created.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Best Time Complexity  : O(1)

Worst Time Complexity : O(n)

Space Complexity      : O(1)
*/
