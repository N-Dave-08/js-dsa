# 🔁 Recursion

## What is Recursion?

**Recursion** is a problem-solving technique where the solution depends on solving **smaller instances of the same problem**.

Simply put:

> **Recursion is when a function calls itself.**

---

# 🤔 Why Use Recursion?

Recursion is a great technique for **simplifying complex problems**.

It is especially useful when a problem can be broken down into **smaller versions of itself**.

---

# 🍰 Analogy

Imagine cutting a cake.

```text
Whole Cake
     │
     ▼
Half Cake
     │
     ▼
Quarter Cake
     │
     ▼
Smaller Piece
     │
     ▼
One Bite
```

Each step solves a **smaller version of the same problem**.

Recursion works the same way.

---

# 📦 Another Analogy: Russian Dolls

```text
┌───────────────┐
│   Big Doll    │
│  ┌─────────┐  │
│  │ Medium  │  │
│  │ ┌─────┐ │  │
│  │ │Small│ │  │
│  │ └─────┘ │  │
│  └─────────┘  │
└───────────────┘
```

To reach the smallest doll, you repeatedly open another doll.

Each doll contains a **smaller version of itself**.

---

# 🧠 How Recursion Works

A recursive function usually has two parts:

1. **Base Case** – stops the recursion.
2. **Recursive Case** – calls itself with a smaller problem.

```text
Problem
   │
   ▼
Smaller Problem
   │
   ▼
Even Smaller Problem
   │
   ▼
Base Case
```

Once the base case is reached, the recursion stops.

---

# ❗ Important Points

- Every recursive solution **must have a base case**.
- The base case prevents **infinite recursion**.
- Without a base case, the function will continue calling itself until the program crashes.

---

# ⚖️ Recursion vs Iteration

Recursion can make code **shorter** and **easier to understand**.

However, recursion is **not always faster** than using loops.

Sometimes:

- An **iterative solution** (using `for` or `while`) is faster.
- A **recursive solution** may use more memory because each function call is stored on the call stack.

---

# 📝 Key Takeaways

- Recursion is when a **function calls itself**.
- It solves a problem by solving **smaller versions of the same problem**.
- Every recursive function **needs a base case**.
- Recursion can simplify code, but it is **not always the most efficient solution**.
- It is normal to find recursion difficult at first—it becomes much clearer with practice.
