// ==========================================
// Big-O Time Complexity Example: O(log n)
// ==========================================

function halveNumber(n) {
  let steps = 0;

  while (n > 1) {
    console.log(n);

    n = Math.floor(n / 2);
    steps++;
  }

  console.log("Final value:", n);
  console.log("Total steps:", steps);
}

halveNumber(16);

/*
Output:

16
8
4
2

Final value: 1
Total steps: 4

-----------------------------------------
How It Works
-----------------------------------------

16
↓
8
↓
4
↓
2
↓
1

Each iteration cuts the input in half.

-----------------------------------------
If n = 8

8
↓
4
↓
2
↓
1

Steps = 3

-----------------------------------------
If n = 32

32
↓
16
↓
8
↓
4
↓
2
↓
1

Steps = 5

-----------------------------------------
If n = 1024

1024
↓
512
↓
256
↓
128
↓
64
↓
32
↓
16
↓
8
↓
4
↓
2
↓
1

Steps = 10

-----------------------------------------
Time Complexity
-----------------------------------------

O(log n)

The input is reduced by half
every iteration.
*/
