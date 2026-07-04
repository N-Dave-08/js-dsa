// ==========================================
// Linear Search
// ==========================================

const arr = [-5, 2, 10, 4, 6];

function linearSearch(target) {
  // Check each element in the array.
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target,
    // return its index.
    if (arr[i] === target) {
      return i;
    }
  }

  // The target was not found.
  return -1;
}

console.log(linearSearch(10)); // 2
console.log(linearSearch(6)); // 4
console.log(linearSearch(7)); // -1

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

The search stops immediately after
finding the target.

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

Linear Search checks every element
starting from the beginning of the array.

If an element matches the target,
its index is returned.

If the loop finishes without finding
the target, the function returns -1.

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

Examples:

[-5, 2, 10, 4, 6]

Target = 6

or

Target = 100

Every element must be checked.

Worst Time Complexity = O(n)

==========================================
Space Complexity
==========================================

The algorithm only uses:

- target
- i

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
