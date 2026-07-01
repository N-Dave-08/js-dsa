// ==========================================
// Big-O Time Complexity Example: Summation
// ==========================================

function summation(n) {
  // Executes 1 time
  let sum = 0;

  // Loop executes n times
  for (let i = 1; i <= n; i++) {
    // Executes n times
    sum += i;
  }

  // Executes 1 time
  return sum;
}

console.log(summation(4)); // 10

/*
Example:

summation(4)

1 + 2 + 3 + 4 = 10

-----------------------------------------
Operation Count
-----------------------------------------

let sum = 0        -> 1

for loop:
    i = 1          -> 1
    i <= n         -> n + 1
    i++            -> n
    sum += i       -> n

return sum         -> 1

Total:

1 + 1 + (n + 1) + n + n + 1

= 3n + 4

-----------------------------------------
Big-O Analysis
-----------------------------------------

3n + 4

Ignore:
- constants (3)
- lower-order terms (+4)

Result:

O(n)

-----------------------------------------
Rule of Thumb
-----------------------------------------

No loop           -> O(1)
One loop          -> O(n)
Nested loops      -> O(n²)

Big-O measures how the number of operations
grows as the input size (n) increases.
*/
