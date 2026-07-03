// ==========================================
// Big-O Time Complexity Example:
// Power of Two (Using a while Loop)
// ==========================================

function isPowerOfTwo(n) {
  // Powers of two must be positive.
  if (n < 1) {
    return false;
  }

  // Keep dividing by 2 until n becomes 1.
  while (n > 1) {
    // If n is not divisible by 2,
    // it cannot be a power of two.
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(8)); // true
console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(19)); // false

/*
==========================================
Understanding the Algorithm
==========================================

Example 1

Input:

n = 16

------------------------------------------

Step 1

Check:

n < 1 ?

16 < 1 ❌ False

------------------------------------------

Iteration 1

16 % 2 = 0 ✅

Divide by 2

n = 8

------------------------------------------

Iteration 2

8 % 2 = 0 ✅

Divide by 2

n = 4

------------------------------------------

Iteration 3

4 % 2 = 0 ✅

Divide by 2

n = 2

------------------------------------------

Iteration 4

2 % 2 = 0 ✅

Divide by 2

n = 1

------------------------------------------

Loop ends because

n > 1 ❌ False

Return:

true

==========================================

Example 2

Input:

n = 19

------------------------------------------

Step 1

Check:

19 < 1 ❌ False

------------------------------------------

Iteration 1

19 % 2 = 1 ❌

19 is not divisible by 2.

Return:

false

==========================================

Why Does This Work?
==========================================

Every power of two can be divided
by 2 repeatedly until it reaches 1.

Example:

16

↓

16 ÷ 2 = 8

↓

8 ÷ 2 = 4

↓

4 ÷ 2 = 2

↓

2 ÷ 2 = 1

Reached 1 ✅

------------------------------------------

A number that is NOT a power of two
will eventually become odd before
reaching 1.

Example:

12

↓

12 ÷ 2 = 6

↓

6 ÷ 2 = 3

↓

3 is odd

Cannot divide evenly by 2 anymore.

Return false

==========================================
Time Complexity
==========================================

Each iteration divides n by 2.

Example:

16

↓

8

↓

4

↓

2

↓

1

The input is cut in half every time.

Therefore:

Time Complexity = O(log n)

==========================================
Space Complexity
==========================================

The algorithm only stores:

- n

No arrays or additional data
structures are created.

Whether:

n = 16

or

n = 1,000,000

the amount of memory stays the same.

Therefore:

Space Complexity = O(1)

==========================================
Final Answer
==========================================

Time Complexity  : O(log n)

Space Complexity : O(1)
*/
