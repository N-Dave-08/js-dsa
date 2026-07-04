// ==========================================
// Recursive Fibonacci Sequence
// ==========================================

function recursiveFibonacci(n) {
  // Base cases:
  // If n is 0 or 1, simply return n.
  if (n < 2) {
    return n;
  }

  // Recursive case:
  // The nth Fibonacci number is the sum of
  // the previous two Fibonacci numbers.
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(4)); // 3
console.log(recursiveFibonacci(5)); // 5
console.log(recursiveFibonacci(6)); // 8

/*
==========================================
Understanding the Algorithm
==========================================

Suppose we call:

recursiveFibonacci(4)

------------------------------------------

Step 1

F(4)

↓

F(3) + F(2)

------------------------------------------

Step 2

F(3)

↓

F(2) + F(1)

------------------------------------------

Step 3

F(2)

↓

F(1) + F(0)

------------------------------------------

Base Cases

F(1) = 1

F(0) = 0

------------------------------------------

Now solve from the bottom up.

F(2)

= F(1) + F(0)

= 1 + 0

= 1

------------------------------------------

F(3)

= F(2) + F(1)

= 1 + 1

= 2

------------------------------------------

F(4)

= F(3) + F(2)

= 2 + 1

= 3

------------------------------------------

Final Answer

recursiveFibonacci(4)

↓

3

==========================================
Recursion Tree
==========================================

recursiveFibonacci(4)

                F(4)
               /    \
            F(3)    F(2)
           /   \    /   \
        F(2) F(1) F(1) F(0)
       /   \
    F(1)  F(0)

Notice that:

F(2) is calculated twice.

F(1) is calculated three times.

This repeated work makes the recursive
solution inefficient.

==========================================
Time Complexity
==========================================

Each function call creates TWO more
recursive calls.

Example:

F(6)

↓

F(5) + F(4)

↓

Each of those creates two more calls.

↓

The number of calls grows exponentially.

Therefore:

Time Complexity = O(2^n)

==========================================
Space Complexity
==========================================

The recursive calls are stored in the
call stack.

For recursiveFibonacci(6), the deepest
chain is:

F(6)

↓

F(5)

↓

F(4)

↓

F(3)

↓

F(2)

↓

F(1)

The maximum depth is proportional to n.

Therefore:

Space Complexity = O(n)

==========================================
Final Answer
==========================================

Time Complexity  : O(2^n)

Space Complexity : O(n)
*/
