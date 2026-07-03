// ==========================================
// Big-O Time Complexity Example:
// Power of Two
// ==========================================

// ------------------------------------------
// Solution 1: Using Repeated Division
// ------------------------------------------

function isPowerOfTwoDivision(n) {
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

console.log("=== Division Method ===");
console.log(isPowerOfTwoDivision(1)); // true
console.log(isPowerOfTwoDivision(2)); // true
console.log(isPowerOfTwoDivision(4)); // true
console.log(isPowerOfTwoDivision(8)); // true
console.log(isPowerOfTwoDivision(16)); // true
console.log(isPowerOfTwoDivision(19)); // false

/*
==========================================
Understanding the Division Algorithm
==========================================

Example 1

Input:

n = 16

------------------------------------------

Iteration 1

16 % 2 = 0 ✅

16 / 2 = 8

------------------------------------------

Iteration 2

8 % 2 = 0 ✅

8 / 2 = 4

------------------------------------------

Iteration 3

4 % 2 = 0 ✅

4 / 2 = 2

------------------------------------------

Iteration 4

2 % 2 = 0 ✅

2 / 2 = 1

------------------------------------------

n is now 1

Return true

==========================================

Example 2

Input:

n = 19

------------------------------------------

19 % 2 = 1 ❌

Cannot divide evenly by 2.

Return false

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

Return false

==========================================
Time Complexity
==========================================

Each iteration divides n by 2.

16

↓

8

↓

4

↓

2

↓

1

The input size is reduced by half
every iteration.

Time Complexity = O(log n)

==========================================
Space Complexity
==========================================

Only one variable (n) is used.

Space Complexity = O(1)
*/

// ==========================================
// Solution 2: Using Bitwise Operator
// ==========================================

function isPowerOfTwoBitwise(n) {
  // Powers of two must be positive.
  if (n < 1) {
    return false;
  }

  // A power of two has exactly one bit set to 1.
  return (n & (n - 1)) === 0;
}

console.log("\n=== Bitwise Method ===");
console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(4)); // true
console.log(isPowerOfTwoBitwise(8)); // true
console.log(isPowerOfTwoBitwise(16)); // true
console.log(isPowerOfTwoBitwise(19)); // false

/*
==========================================
Understanding the Bitwise Algorithm
==========================================

Key Observation

Every power of two has exactly
one bit set to 1.

Examples:

1  = 0001

2  = 0010

4  = 0100

8  = 1000

16 = 10000

------------------------------------------

Subtract 1

Example:

8

1000

↓

7

0111

------------------------------------------

Perform Bitwise AND

1000
0111
----
0000

Result is 0

Return true

==========================================

Example: 16

16 = 10000

15 = 01111

10000
01111
-----
00000

Result = 0

Return true

==========================================

Example: 10

10 = 1010

9 = 1001

1010
1001
----
1000

Result ≠ 0

Return false

==========================================
Why Does This Work?
==========================================

Only powers of two have exactly
one bit equal to 1.

Subtracting 1 flips that bit
and every bit after it.

Therefore,

n & (n - 1)

equals 0 only for powers of two.

==========================================
Time Complexity
==========================================

Only one bitwise operation
is performed.

Time Complexity = O(1)

==========================================
Space Complexity
==========================================

No additional memory is used.

Space Complexity = O(1)

==========================================
Comparison
==========================================

Division Method

Time  : O(log n)

Space : O(1)

------------------------------------------

Bitwise Method

Time  : O(1)

Space : O(1)

The bitwise solution is the most
efficient and is commonly asked
in coding interviews.
*/
