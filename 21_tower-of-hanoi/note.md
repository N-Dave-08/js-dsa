# 🗼 Problem: Tower of Hanoi

## Problem Statement

You are given **three rods**:

- Source
- Auxiliary
- Destination

There are **n disks** stacked on the source rod in order of decreasing size (largest at the bottom, smallest at the top).

Your goal is to move all the disks from the **source rod** to the **destination rod** while following these rules:

1. Only one disk can be moved at a time.
2. Only the top disk of a rod can be moved.
3. A larger disk can never be placed on top of a smaller disk.

---

# 📖 What is the Tower of Hanoi?

The Tower of Hanoi is a classic **recursive problem**.

Instead of thinking about moving all the disks at once, we solve a smaller version of the same problem repeatedly.

The basic idea is:

1. Move the top `n - 1` disks to the auxiliary rod.
2. Move the largest disk to the destination rod.
3. Move the `n - 1` disks from the auxiliary rod to the destination rod.

---

# 🔄 How It Works

Suppose we have:

```text
3 disks

Source      Auxiliary      Destination

   1
   2
   3
```

The goal is to move all three disks to the destination rod.

To do that:

```text
Step 1

Move the top 2 disks
from Source
to Auxiliary
```

---

```text
Step 2

Move Disk 3

Source → Destination
```

---

```text
Step 3

Move the 2 disks

Auxiliary → Destination
```

Notice that the problem of moving **3 disks** becomes two smaller problems of moving **2 disks**.

---

# 🧪 Example

```text
towerOfHanoi(2, "A", "C", "B")
```

Output

```text
Move disk 1 from A to B
Move disk 2 from A to C
Move disk 1 from B to C
```

---

```text
towerOfHanoi(3, "A", "C", "B")
```

Output

```text
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

---

# 🧠 Recursive Thinking

Suppose there are **4 disks**.

Instead of asking:

> "How do I move all 4 disks?"

Ask:

> "How do I move the top 3 disks?"

Once those are moved:

```text
Move Disk 4
```

Then solve the same problem again:

```text
Move the 3 disks
onto Disk 4
```

The problem keeps breaking itself into smaller versions until only one disk remains.

---

# 🌱 Base Case

The smallest possible problem is:

```text
1 disk
```

There is nothing left to divide.

Simply move it:

```text
Source → Destination
```

This stops the recursion.

---

# 🔁 Recursive Formula

To move **n disks**:

```text
Move (n - 1) disks
Source → Auxiliary

Move largest disk
Source → Destination

Move (n - 1) disks
Auxiliary → Destination
```

The same steps repeat until only one disk remains.

---

# 📝 Algorithm

1. If there is only one disk:
   - Move it from the source rod to the destination rod.
   - Return.
2. Move the top `n - 1` disks from the source rod to the auxiliary rod.
3. Move the largest disk from the source rod to the destination rod.
4. Move the `n - 1` disks from the auxiliary rod to the destination rod.
5. Repeat until all disks have been moved.

---

# 💻 JavaScript Solution

```js
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);

  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);

  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
```

Output

```text
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

---

# 🔍 Dry Run

Suppose:

```text
towerOfHanoi(2, "A", "C", "B")
```

---

### First Call

```text
Move 1 disk

A → B
```

Output

```text
Move disk 1 from A to B
```

---

### Move Largest Disk

```text
Move disk 2

A → C
```

Output

```text
Move disk 2 from A to C
```

---

### Final Recursive Call

```text
Move 1 disk

B → C
```

Output

```text
Move disk 1 from B to C
```

Final sequence:

```text
Move disk 1 from A to B
Move disk 2 from A to C
Move disk 1 from B to C
```

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(2ⁿ)
```

Each recursive call creates two smaller recursive calls until the base case is reached.

The minimum number of moves required is:

```text
2ⁿ - 1
```

---

### Best Case

```text
O(2ⁿ)
```

Every valid solution requires the same number of moves.

There is no faster case.

---

## Space Complexity

```text
O(n)
```

The maximum depth of the recursive call stack is equal to the number of disks.

---

# 💡 Key Takeaways

- Tower of Hanoi is a classic recursion problem.
- Solve the problem by breaking it into smaller versions of the same problem.
- The base case is when only one disk remains.
- Every recursive call moves `n - 1` disks before and after moving the largest disk.
- Minimum number of moves:

```text
2ⁿ - 1
```

- Worst Time Complexity: `O(2ⁿ)`
- Best Time Complexity: `O(2ⁿ)`
- Space Complexity: `O(n)`
