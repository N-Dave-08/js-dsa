// ==========================================
// Big-O Time Complexity Example:
// Optimized Prime Number (Square Root Method)
// ==========================================

function isPrime(n) {
  // Prime numbers must be greater than 1.
  if (n < 2) {
    return false;
  }

  // Only check divisors up to √n.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      // A divisor is found.
      // n is not prime.
      return false;
    }
  }

  // No divisors were found.
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(9)); // false
console.log(isPrime(17)); // true
console.log(isPrime(49)); // false

/*
==========================================
Understanding the Algorithm
==========================================

Example 1

Input:

n = 17

------------------------------------------

Step 1

Check:

n < 2 ?

17 < 2 ❌ False

------------------------------------------

Step 2

Find the square root.

√17 ≈ 4.12

So the loop only checks:

2
3
4

------------------------------------------

Iteration 1

i = 2

17 % 2 = 1

Not divisible.

------------------------------------------

Iteration 2

i = 3

17 % 3 = 2

Not divisible.

------------------------------------------

Iteration 3

i = 4

17 % 4 = 1

Not divisible.

------------------------------------------

Loop ends because

i = 5

5 <= 4.12 ❌ False

Return:

true

==========================================

Example 2

Input:

n = 49

------------------------------------------

Step 1

Check:

n < 2 ?

49 < 2 ❌ False

------------------------------------------

Step 2

Find the square root.

√49 = 7

So the loop only checks:

2
3
4
5
6
7

------------------------------------------

Iteration 1

49 % 2 = 1

------------------------------------------

Iteration 2

49 % 3 = 1

------------------------------------------

Iteration 3

49 % 4 = 1

------------------------------------------

Iteration 4

49 % 5 = 4

------------------------------------------

Iteration 5

49 % 6 = 1

------------------------------------------

Iteration 6

49 % 7 = 0 ✅

A divisor is found.

Return:

false

==========================================
Why Only Check Up to √n?
==========================================

Suppose:

n = 36

Factor pairs are:

1 × 36
2 × 18
3 × 12
4 × 9
6 × 6

After reaching √36 = 6,
the remaining factors repeat:

9 × 4
12 × 3
18 × 2
36 × 1

If a factor exists that is larger
than √n, there must already be
a matching factor smaller than √n.

Therefore, checking beyond √n
is unnecessary.

==========================================
Time Complexity
==========================================

The loop runs from:

2

to

√n

Approximately:

√n - 1 iterations

Ignoring constants:

O(√n)

This is called:

Square Root Time

------------------------------------------

Comparison

n = 1,000,000

Brute Force:

Checks about

999,998 numbers

Time Complexity:

O(n)

------------------------------------------

Optimized

Checks about

1,000 numbers

Time Complexity:

O(√n)

Much faster for large inputs.

==========================================
Space Complexity
==========================================

The algorithm only stores:

- n (parameter)
- i (loop counter)

No arrays or additional data
structures are created.

Example:

n = 17

Memory:

n
i

------------------------------------------

n = 1,000,000

Memory:

n
i

The number of variables stays
the same.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Time Complexity  : O(√n)

Space Complexity : O(1)
*/
