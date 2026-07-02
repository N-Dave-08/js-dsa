// ==========================================
// Big-O Time Complexity Example: O(1)
// ==========================================

function summation(n) {
  return (n * (n + 1)) / 2;
}

console.log(summation(4)); // 10

/*
-----------------------------------------
How Many Operations?
-----------------------------------------

return (n * (n + 1)) / 2;

Operations:

1. n + 1
2. n * (n + 1)
3. Divide by 2
4. Return the result

Total operations:

4

Notice that the number of operations
does NOT depend on n.

-----------------------------------------

n = 10         -> 4 operations
n = 100        -> 4 operations
n = 1,000      -> 4 operations
n = 1,000,000  -> 4 operations

The work stays the same regardless
of the input size.

-----------------------------------------
Convert to Big-O
-----------------------------------------

4
↓

O(1)

Big-O ignores constants.

-----------------------------------------
Time Complexity
-----------------------------------------

O(1)  // Constant Time

Rule of Thumb:

No loops or recursion
usually means O(1).

The running time remains constant,
regardless of the input size.
*/
