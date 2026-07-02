// ==========================================
// Big-O Time Complexity Example: Factorial
// ==========================================

function factorial(n) {
  // Start with 1 because multiplying by 1
  // does not change the result.
  let result = 1;

  // Multiply result by every number
  // from 2 up to n.
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(4));
// Output: 24

/*
==========================================
Understanding the Algorithm
==========================================

Input:

n = 4

Initial value:

result = 1

------------------------------------------

Iteration 1

i = 2

result = 1 × 2

result = 2

------------------------------------------

Iteration 2

i = 3

result = 2 × 3

result = 6

------------------------------------------

Iteration 3

i = 4

result = 6 × 4

result = 24

------------------------------------------

Loop ends because

i = 5

5 <= 4 ❌ False

Return:

24

==========================================
Time Complexity
==========================================

The loop runs from:

i = 2

to

i = n

Number of iterations:

n - 1

Ignoring constants:

O(n)

As the input size increases,
the number of multiplications
also increases linearly.

==========================================
Space Complexity
==========================================

The algorithm only stores:

- n (parameter)
- result
- i (loop counter)

No arrays or additional data
structures are created.

The amount of memory stays the
same regardless of the input size.

Example:

n = 4

Memory:
result = 24
i = 5

------------------------------------------

n = 1000

Memory:
result = (very large number)
i = 1001

The values change,
but the number of variables
does not.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Time Complexity  : O(n)

Space Complexity : O(1)
*/
