// ==========================================
// Tower of Hanoi
// ==========================================

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  // Base case
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  // Step 1:
  // Move the top (n - 1) disks
  // from the source rod to the auxiliary rod.
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);

  // Step 2:
  // Move the largest remaining disk
  // to the destination rod.
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  // Step 3:
  // Move the (n - 1) disks
  // from the auxiliary rod to the destination rod.
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");

/*
Output

Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
*/

/*
==========================================
Understanding Tower of Hanoi
==========================================

Tower of Hanoi is a recursive problem.

There are three rods:

- Source
- Auxiliary
- Destination

The goal is to move every disk from
the source rod to the destination rod.

Rules:

1. Move only one disk at a time.
2. Only the top disk can be moved.
3. A larger disk can never be placed
   on top of a smaller disk.

Instead of solving the whole problem
at once, we repeatedly solve a
smaller version of the same problem.

------------------------------------------

Example

3 Disks

Source (A)

1
2
3

Destination (C)

------------------------------------------

Step 1

Move the top 2 disks

A → B

This is another Tower of Hanoi problem,
just with fewer disks.

------------------------------------------

Step 2

Move the largest disk

Disk 3

A → C

------------------------------------------

Step 3

Move the 2 disks

B → C

Again, this is another Tower of Hanoi
problem with fewer disks.

------------------------------------------

Notice the pattern.

To move n disks:

1. Move n - 1 disks
2. Move the largest disk
3. Move n - 1 disks again

This is why recursion works so well.

==========================================
Dry Run
==========================================

towerOfHanoi(2, "A", "C", "B")

------------------------------------------

First Recursive Call

Move 1 disk

A → B

Output

Move disk 1 from A to B

------------------------------------------

Move Largest Disk

Disk 2

A → C

Output

Move disk 2 from A to C

------------------------------------------

Second Recursive Call

Move 1 disk

B → C

Output

Move disk 1 from B to C

------------------------------------------

Final Sequence

Move disk 1 from A to B
Move disk 2 from A to C
Move disk 1 from B to C

==========================================
Key Idea
==========================================

To move n disks:

1. Move the top (n - 1) disks
   to the auxiliary rod.

2. Move the largest disk
   to the destination rod.

3. Move the (n - 1) disks
   from the auxiliary rod
   to the destination rod.

Keep repeating these same three
steps until only one disk remains.

The base case is:

n === 1

At that point, simply move the disk.

==========================================
Time Complexity
==========================================

Worst Case:
O(2^n)

- Every recursive call creates
  two smaller recursive calls.

- The minimum number of moves is:

  2^n - 1

Average Case:
O(2^n)

- Every valid solution requires
  the same number of moves.

Best Case:
O(2^n)

- There is no faster case because
  every disk must still be moved.

==========================================
Space Complexity
==========================================

O(n)

The recursive call stack grows to
at most n levels deep.

==========================================
Final Answer
==========================================

Worst Time Complexity   : O(2^n)
Average Time Complexity : O(2^n)
Best Time Complexity    : O(2^n)
Space Complexity        : O(n)
*/
