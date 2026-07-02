// ==========================================
// Big-O Time Complexity Example: O(n²)
// ==========================================

function printPairs(n) {
  let count = 0;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`(i = ${i}, j = ${j})`);
      count++;
    }
  }

  console.log("Total pairs:", count);
}

printPairs(4);

/*
Output:

(0, 0)

(1, 0)
(1, 1)

(2, 0)
(2, 1)
(2, 2)

(3, 0)
(3, 1)
(3, 2)
(3, 3)

(4, 0)
(4, 1)
(4, 2)
(4, 3)
(4, 4)

Total pairs: 15

-----------------------------------------
Understanding the Loops
-----------------------------------------

Outer loop (i):

i = 0
i = 1
i = 2
...
i = n

Runs approximately (n + 1) times.

-----------------------------------------

Inner loop (j):

When i = 0
Runs 1 time

When i = 1
Runs 2 times

When i = 2
Runs 3 times

When i = 3
Runs 4 times

...

When i = n
Runs (n + 1) times

-----------------------------------------
Total Operations
-----------------------------------------

For n = 4

1 + 2 + 3 + 4 + 5

= 15

General Formula:

1 + 2 + 3 + ... + (n + 1)

= (n + 1)(n + 2) / 2

= (n² + 3n + 2) / 2

= 0.5n² + 1.5n + 1

Big-O ignores:
- constant coefficients
- lower-order terms

0.5n² + 1.5n + 1
        ↓

O(n²)

-----------------------------------------
Time Complexity
-----------------------------------------

O(n²)  // Quadratic Time

Rule of Thumb:

One loop           -> O(n)

Two nested loops   -> O(n²)

Three nested loops -> O(n³)
*/
