// ==========================================
// Recursive Factorial of a Number
// ==========================================

function recursiveFactorial(n) {
  // Base case:
  // The factorial of 0 and 1 is 1.
  if (n < 2) {
    return 1;
  }

  // Recursive case:
  // n! = n × (n - 1)!
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120

/*
==========================================
Understanding the Algorithm
==========================================

Suppose we call:

recursiveFactorial(4)

------------------------------------------

Step 1

4!

↓

4 × recursiveFactorial(3)

------------------------------------------

Step 2

3!

↓

3 × recursiveFactorial(2)

------------------------------------------

Step 3

2!

↓

2 × recursiveFactorial(1)

------------------------------------------

Base Case

1! = 1

Return:

1

------------------------------------------

Now solve from the bottom up.

recursiveFactorial(2)

= 2 × 1

= 2

------------------------------------------

recursiveFactorial(3)

= 3 × 2

= 6

------------------------------------------

recursiveFactorial(4)

= 4 × 6

= 24

==========================================
Call Stack
==========================================

recursiveFactorial(4)

↓

recursiveFactorial(3)

↓

recursiveFactorial(2)

↓

recursiveFactorial(1)

↓

Return 1

↓

Return 2

↓

Return 6

↓

Return 24

Notice that each function makes
only ONE recursive call.

Unlike recursive Fibonacci, there are
no repeated calculations.

==========================================
Why Does This Work?
==========================================

The mathematical definition of factorial is:

n!

=

n × (n - 1)!

Every recursive call reduces the
problem by one.

Eventually, n becomes 1.

At that point, recursion stops and the
remaining multiplications are completed.

==========================================
Time Complexity
==========================================

Each recursive call reduces n by 1.

Example:

4

↓

3

↓

2

↓

1

There are four function calls.

If n = 100,

there are approximately 100 calls.

Therefore:

Time Complexity = O(n)

(Linear Time)

==========================================
Space Complexity
==========================================

Each recursive call is stored in the
call stack until the base case is reached.

Example:

recursiveFactorial(4)

↓

recursiveFactorial(3)

↓

recursiveFactorial(2)

↓

recursiveFactorial(1)

The maximum call stack depth grows
proportionally with n.

Therefore:

Space Complexity = O(n)

==========================================
Final Answer
==========================================

Time Complexity  : O(n)

Space Complexity : O(n)
*/
