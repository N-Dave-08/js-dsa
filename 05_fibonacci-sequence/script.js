// ==========================================
// Big-O Time Complexity Example: Fibonacci
// ==========================================

function fibonacci(n) {
  // Create an array with the first two Fibonacci numbers.
  const fib = [0, 1];

  // Generate the remaining Fibonacci numbers.
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(4));
// Output: [0, 1, 1, 2]

/*
==========================================
Understanding the Algorithm
==========================================

Input:

n = 4

Initial array:

[0, 1]

------------------------------------------

Iteration 1

i = 2

fib[2] = fib[1] + fib[0]
       = 1 + 0
       = 1

Array:

[0, 1, 1]

------------------------------------------

Iteration 2

i = 3

fib[3] = fib[2] + fib[1]
       = 1 + 1
       = 2

Array:

[0, 1, 1, 2]

------------------------------------------

Loop ends because

i = 4

4 < 4 ❌ False

Return:

[0, 1, 1, 2]

==========================================
Time Complexity
==========================================

The loop runs from:

i = 2

to

i = n - 1

Number of iterations:

n - 2

Ignoring constants:

O(n)

The running time grows linearly
with the input size.

==========================================
Space Complexity
==========================================

The array stores every Fibonacci number.

If:

n = 4

Memory:

[0, 1, 1, 2]

------------------------------------------

If:

n = 10

Memory:

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

------------------------------------------

If:

n = 1000

The array contains 1000 numbers.

As n grows, the array grows.

Therefore:

Space Complexity = O(n)

==========================================
Final Answer
==========================================

Time Complexity  : O(n)

Space Complexity : O(n)
*/
