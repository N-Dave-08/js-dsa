# 🪜 Problem: Climbing Staircase

## Problem Statement

You are climbing a staircase with **n** steps.

Each time, you can climb either:

- **1 step**
- **2 steps**

Return the **number of distinct ways** you can reach the top.

---

# 📖 What is the Climbing Staircase Problem?

The Climbing Staircase problem asks:

> "How many different ways can I reach the top if I can only climb 1 or 2 steps at a time?"

For example, if there are **3 steps**, you can reach the top in these ways:

```text
1 + 1 + 1
1 + 2
2 + 1
```

So the answer is:

```text
3
```

---

# 🔄 How It Works

Suppose:

```text
n = 4
```

To reach step 4, there are only two possibilities:

- Come from step 3 by taking 1 step.
- Come from step 2 by taking 2 steps.

Visualization:

```text
Step 2 ──► Step 4

Step 3 ──► Step 4
```

Therefore,

```text
Ways(4) = Ways(3) + Ways(2)
```

This same idea works for every step.

---

# 🧪 Examples

```text
climbingStaircase(2)
```

Output

```text
2
```

Ways:

```text
1 + 1
2
```

---

```text
climbingStaircase(3)
```

Output

```text
3
```

Ways:

```text
1 + 1 + 1
1 + 2
2 + 1
```

---

```text
climbingStaircase(4)
```

Output

```text
5
```

Ways:

```text
1 + 1 + 1 + 1
1 + 1 + 2
1 + 2 + 1
2 + 1 + 1
2 + 2
```

---

# 🧠 Thinking About the Problem

Instead of finding every possible path directly, ask:

> "How many ways can I get to this step?"

For any step **n**, there are only two possibilities:

- Reach it from **step n - 1** by taking 1 step.
- Reach it from **step n - 2** by taking 2 steps.

So the recurrence becomes:

```text
Ways(n) = Ways(n - 1) + Ways(n - 2)
```

This follows the same pattern as the Fibonacci sequence.

---

# 🌱 Base Cases

Before we can calculate larger values, we need two starting answers.

If there is only one step:

```text
Ways(1) = 1
```

If there are two steps:

```text
Ways(2) = 2
```

These base cases allow us to compute every remaining step.

---

# 🔁 Building the Answer

Suppose:

```text
n = 5
```

Start with:

```text
Ways(1) = 1
Ways(2) = 2
```

Calculate each new step using the previous two:

```text
Ways(3) = 2 + 1 = 3

Ways(4) = 3 + 2 = 5

Ways(5) = 5 + 3 = 8
```

Answer:

```text
8
```

---

# 📝 Algorithm

1. If `n` is less than or equal to 2, return `n`.
2. Store the number of ways to reach the previous step.
3. Store the number of ways to reach the current step.
4. Loop from step 3 to step `n`.
5. Calculate the number of ways for the next step.
6. Move the previous and current values forward.
7. Return the number of ways for the current step.

---

# 💻 JavaScript Solution

```js
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

console.log(climbingStaircase(5));
```

Output

```text
8
```

---

# 🔍 Dry Run

Suppose:

```text
n = 5
```

Initial values:

```text
prev = 1
curr = 2
```

---

### Step 3

```text
next = prev + curr

next = 1 + 2 = 3

prev = 2
curr = 3
```

---

### Step 4

```text
next = 2 + 3 = 5

prev = 3
curr = 5
```

---

### Step 5

```text
next = 3 + 5 = 8

prev = 5
curr = 8
```

Loop ends.

Return:

```text
8
```

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(n)
```

The algorithm loops through the staircase once.

---

### Best Case

```text
O(1)
```

If `n` is 1 or 2, the answer is returned immediately.

---

## Space Complexity

```text
O(1)
```

Only three variables (`prev`, `curr`, and `next`) are used, regardless of the input size.

---

# 💡 Key Takeaways

- Each step can only be reached from the previous one or two steps.
- The recurrence relation is:

```text
Ways(n) = Ways(n - 1) + Ways(n - 2)
```

- The problem follows the Fibonacci pattern.
- Instead of storing every previous answer, we only keep track of the previous and current number of ways.
- This optimization reduces the space complexity from `O(n)` to `O(1)`.
- Worst Time Complexity: `O(n)`
- Best Time Complexity: `O(1)`
- Space Complexity: `O(1)`
