// ==========================================
// Climbing Staircase
// ==========================================

const n = 5;

function climbingStaircase(n) {
  if (n <= 2) {
    return n;
  }

  let one = 1;
  let two = 2;

  for (let i = 3; i <= n; i++) {
    let current = one + two;

    one = two;
    two = current;
  }

  return two;
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
we notice a pattern.

To reach any step, there are only
two possible previous positions:

- One step below
- Two steps below

So the formula becomes:

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

Start

one = 1
two = 2

------------------------------------------

Iteration 1 (Step 3)

current = one + two

current = 1 + 2 = 3

Update

one = 2
two = 3

------------------------------------------

Iteration 2 (Step 4)

current = 2 + 3 = 5

Update

one = 3
two = 5

------------------------------------------

Iteration 3 (Step 5)

current = 3 + 5 = 8

Update

one = 5
two = 8

------------------------------------------

Loop ends.

Return:

8

==========================================
Key Idea
==========================================

- Every step can be reached from
  either the previous step or the
  step before that.

- The number of ways to reach the
  current step equals the sum of
  the previous two steps.

- Keep track of only the previous
  two answers instead of storing
  every result.

==========================================
Time Complexity
==========================================

Worst Case:
O(n)

- The algorithm loops through the
  staircase one time.

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

- one
- two
- current

Their number does not increase as
the input grows.

==========================================
Final Answer
==========================================

Worst Time Complexity   : O(n)
Average Time Complexity : O(n)
Best Time Complexity    : O(1)
Space Complexity        : O(1)
*/
