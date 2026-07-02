// ==========================================
// Big-O Time Complexity Example: Prime Number
// ==========================================

function isPrime(n) {
  // Prime numbers must be greater than 1.
  if (n < 2) {
    return false;
  }

  // Check if n is divisible by any number
  // from 2 up to n - 1.
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      // Found a divisor.
      // n is not prime.
      return false;
    }
  }

  // No divisors found.
  return true;
}

console.log(isPrime(5));
// Output: true

console.log(isPrime(9));
// Output: false

/*
==========================================
Understanding the Algorithm
==========================================

Example 1

Input:

n = 5

------------------------------------------

Check:

n < 2 ?

5 < 2 ❌ False

------------------------------------------

Loop

i = 2

5 % 2 = 1

Not divisible.

------------------------------------------

i = 3

5 % 3 = 2

Not divisible.

------------------------------------------

i = 4

5 % 4 = 1

Not divisible.

------------------------------------------

Loop ends because

i = 5

5 < 5 ❌ False

Return:

true

==========================================

Example 2

Input:

n = 9

------------------------------------------

Check:

n < 2 ?

9 < 2 ❌ False

------------------------------------------

Loop

i = 2

9 % 2 = 1

Not divisible.

------------------------------------------

i = 3

9 % 3 = 0 ✅

A divisor is found.

Return:

false

==========================================
Time Complexity
==========================================

Worst case:

The number is prime.

The loop checks:

2
3
4
...
n - 1

Approximately:

n - 2 iterations

Ignoring constants:

O(n)

==========================================
Space Complexity
==========================================

The algorithm only stores:

- n (parameter)
- i (loop counter)

No arrays or additional data
structures are created.

The amount of memory stays the
same regardless of the input size.

Example:

n = 5

Memory:

n
i

------------------------------------------

n = 1,000,000

Memory:

n
i

Same number of variables.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Time Complexity  : O(n)

Space Complexity : O(1)

==========================================
Optimization
==========================================

This is the brute-force solution.

A more efficient solution only checks
divisors up to √n.

That reduces the time complexity to:

O(√n)

However, this implementation correctly
demonstrates the basic algorithm and
its Big-O analysis.
*/
