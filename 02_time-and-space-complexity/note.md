# 📊 Algorithm Analysis

## Why Analyze Algorithms?

A single problem can have multiple solutions.

**Example:**

- There are many algorithms to sort a list of numbers.

The goal is to determine **which algorithm is the most efficient**.

---

## Why Not Use Running Time?

The actual running time of an algorithm depends on many factors, such as:

- Programming language
- Computer hardware
- Other programs running
- Operating system

Because of this, running time alone is **not a reliable way** to compare algorithms.

---

# 📏 Measuring Performance

Instead of measuring actual running time, we measure performance based on the **input size**.

### ⏱️ Time Complexity

The amount of time an algorithm takes to run as the input size grows.

### 💾 Space Complexity

The amount of memory an algorithm uses as the input size grows.

---

# ⚖️ Trade-offs

There is **no single best algorithm** for every situation.

Choose an algorithm based on your constraints.

### If speed is important

- ✅ Choose a faster algorithm.
- ❌ Even if it uses more memory.

### If memory is limited

- ✅ Choose an algorithm that uses less memory.
- ❌ Even if it runs slower.

---

# 📐 Asymptotic Notations

Mathematical tools used to describe time and space complexity.

| Notation      | Meaning                 |
| ------------- | ----------------------- |
| **Big-O (O)** | Worst-case complexity   |
| **Omega (Ω)** | Best-case complexity    |
| **Theta (Θ)** | Average-case complexity |
