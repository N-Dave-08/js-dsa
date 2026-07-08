# 🧩 Algorithm Design Techniques

## What are Algorithm Design Techniques?

Algorithm Design Techniques are **general strategies** used to solve problems efficiently.

Instead of memorizing solutions to individual problems, you learn **patterns** that can be applied to many different problems.

Think of them as **toolboxes**.

When you encounter a problem, you choose the design technique that best fits it.

---

# 🎯 Why Learn Algorithm Design Techniques?

Many coding interview problems are not unique.

Instead, they are variations of common patterns.

By understanding these patterns, you can solve unfamiliar problems much more easily.

Benefits include:

- Writing more efficient algorithms.
- Recognizing common problem-solving patterns.
- Improving problem-solving skills.
- Preparing for technical interviews.

---

# 🛠️ Common Algorithm Design Techniques

## 1. Brute Force

The simplest approach.

Try **every possible solution** until the correct one is found.

### Example

Finding the largest number in an array by checking every element.

```text
[5, 8, 2, 10]
```

Check:

```text
5
8
2
10
```

Largest:

```text
10
```

### Advantages

- Easy to understand.
- Easy to implement.

### Disadvantages

- Usually inefficient.
- Often has high time complexity.

---

## 2. Divide and Conquer

Break a large problem into smaller subproblems.

Solve each subproblem independently.

Combine the solutions to solve the original problem.

Visualization:

```text
Large Problem

      ↓

Smaller Problems

      ↓

Solve Each One

      ↓

Combine Results
```

### Examples

- Merge Sort
- Quick Sort
- Binary Search

---

## 3. Greedy Algorithm

Make the **best choice available at the current step**.

The algorithm never changes previous decisions.

Visualization:

```text
Current Situation

↓

Choose the Best Immediate Option

↓

Repeat
```

### Examples

- Activity Selection
- Fractional Knapsack
- Prim's Algorithm
- Kruskal's Algorithm

---

## 4. Dynamic Programming

Solve problems by storing solutions to smaller subproblems.

Instead of solving the same problem repeatedly, reuse previously computed answers.

Visualization:

```text
Small Problems

↓

Store Answers

↓

Reuse Them

↓

Build Final Answer
```

### Examples

- Fibonacci Sequence
- Climbing Staircase
- Longest Common Subsequence
- Coin Change

---

## 5. Backtracking

Build a solution step by step.

If a choice leads to a dead end, undo it and try another path.

Visualization:

```text
Choose

↓

Continue

↓

Dead End?

↓

Yes

↓

Go Back

↓

Try Another Choice
```

### Examples

- N Queens
- Sudoku Solver
- Maze Solving
- Permutations

---

## 6. Recursion

A function solves a problem by calling itself on a smaller version of the same problem.

Every recursive solution must have:

- A base case
- A recursive case

Visualization:

```text
Problem

↓

Smaller Problem

↓

Even Smaller Problem

↓

Base Case

↓

Return Back
```

### Examples

- Factorial
- Fibonacci
- Tower of Hanoi
- Tree Traversals

---

# 🔍 Choosing the Right Technique

| Problem Type                                             | Technique           |
| -------------------------------------------------------- | ------------------- |
| Small input or simple solution                           | Brute Force         |
| Problem can be split into independent parts              | Divide and Conquer  |
| Local optimal choices lead to the global optimum         | Greedy              |
| Overlapping subproblems                                  | Dynamic Programming |
| Need to explore every possible solution                  | Backtracking        |
| Problem naturally breaks into smaller versions of itself | Recursion           |

---

# 📚 Examples from This Repository

| Problem            | Technique                       |
| ------------------ | ------------------------------- |
| Binary Search      | Divide and Conquer              |
| Merge Sort         | Divide and Conquer              |
| Quick Sort         | Divide and Conquer              |
| Fibonacci Sequence | Dynamic Programming / Recursion |
| Climbing Staircase | Dynamic Programming             |
| Tower of Hanoi     | Recursion                       |
| Bubble Sort        | Brute Force                     |
| Cartesian Product  | Brute Force (Nested Loops)      |

---

# ⚖️ Comparison

| Technique           | Main Idea                                  | Typical Complexity       |
| ------------------- | ------------------------------------------ | ------------------------ |
| Brute Force         | Try every possibility                      | Usually high             |
| Divide and Conquer  | Split, solve, combine                      | Often O(n log n)         |
| Greedy              | Choose the best immediate option           | Depends on the problem   |
| Dynamic Programming | Store and reuse solutions                  | Often polynomial         |
| Backtracking        | Try, undo, and try again                   | Often exponential        |
| Recursion           | Solve smaller versions of the same problem | Depends on the algorithm |

---

# 💡 Key Takeaways

- Algorithm Design Techniques are strategies for solving problems.
- Learning patterns is more valuable than memorizing solutions.
- Different problems require different techniques.
- The same problem can sometimes be solved using multiple techniques.
- Choosing the right technique often leads to simpler and more efficient algorithms.

---

# 🚀 What's Next?

Now that you've learned the basic algorithm design techniques, you'll start seeing these patterns in many problems.

As you continue learning algorithms, ask yourself:

- Can this problem be divided into smaller parts?
- Am I solving the same subproblem multiple times?
- Can I make the best decision at each step?
- Do I need to explore every possible solution?
- Does recursion naturally fit this problem?

Recognizing these patterns is one of the most important skills in algorithm design.
