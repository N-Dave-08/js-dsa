// ==========================================
// Climbing Staircase (Space Optimized DP)
// ==========================================

const n = 5;

function climbingStaircase(n) {
  if (n <= 2) {
    return n;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 3; i <= n; i++) {
    const next = prev + curr;

    prev = curr;
    curr = next;
  }

  return curr;
}

console.log(climbingStaircase(n)); // 8

/*
==========================================
Understanding Climbing Staircase
==========================================

The goal is to find the number of
different ways to reach the top of
a staircase.

At each move, you can climb either:

- 1 step
- 2 steps

Instead of listing every possible path,
we notice a repeating pattern.

To reach any step, there are only
two possible previous positions:

- The previous step (n - 1)
- Two steps before (n - 2)

Therefore,

Ways(n) = Ways(n - 1) + Ways(n - 2)

This is the same pattern as the
Fibonacci sequence.

------------------------------------------

Example

n = 5

------------------------------------------

Base Cases

Step 1

Ways = 1

------------------------------------------

Step 2

Ways = 2

------------------------------------------

Initial Values

prev = 1
curr = 2

prev represents the number of ways
to reach the previous step.

curr represents the number of ways
to reach the current step.

------------------------------------------

Iteration 1 (Step 3)

next = prev + curr

next = 1 + 2 = 3

Update

prev = 2
curr = 3

------------------------------------------

Iteration 2 (Step 4)

next = 2 + 3 = 5

Update

prev = 3
curr = 5

------------------------------------------

Iteration 3 (Step 5)

next = 3 + 5 = 8

Update

prev = 5
curr = 8

------------------------------------------

Loop ends.

Return:

8

==========================================
Key Idea
==========================================

- Every step can be reached from
  either the previous step or
  two steps before.

- The number of ways to reach the
  current step equals the sum of
  the previous two steps.

- Instead of storing the answer for
  every step, only the previous and
  current values are needed.

- This reduces the space complexity
  from O(n) to O(1).

==========================================
Time Complexity
==========================================

Worst Case:
O(n)

- The algorithm loops through the
  staircase once.

Average Case:
O(n)

- The same loop is performed for
  most values of n.

Best Case:
O(1)

- If n is 1 or 2, the answer is
  returned immediately.

==========================================
Space Complexity
==========================================

O(1)

Only three variables are used:

- prev
- curr
- next

Their number does not increase as
the input size grows.

==========================================
Final Answer
==========================================

Worst Time Complexity   : O(n)
Average Time Complexity : O(n)
Best Time Complexity    : O(1)
Space Complexity        : O(1)
*/
