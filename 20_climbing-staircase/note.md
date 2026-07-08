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

Instead of finding all paths directly, ask:

> "How can I arrive at this step?"

For any step **n**:

- I can come from **n - 1**
- Or I can come from **n - 2**

So:

```text
Ways(n) = Ways(n - 1) + Ways(n - 2)
```

This is the same pattern as the Fibonacci sequence.

---

# 🌱 Base Cases

Before using the formula, we need starting values.

If there is only one step:

```text
n = 1

Ways = 1
```

If there are two steps:

```text
n = 2

Ways = 2
```

These base cases allow us to calculate every larger value.

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

Calculate:

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

1. If `n` is 1, return 1.
2. If `n` is 2, return 2.
3. Store the number of ways for the previous two steps.
4. Loop from step 3 to step `n`.
5. Calculate the current number of ways by adding the previous two values.
6. Update the previous values.
7. Return the final answer.

---

# 💻 JavaScript Solution

```js
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
one = 1
two = 2
```

---

### Step 3

```text
current = 1 + 2 = 3

one = 2
two = 3
```

---

### Step 4

```text
current = 2 + 3 = 5

one = 3
two = 5
```

---

### Step 5

```text
current = 3 + 5 = 8

one = 5
two = 8
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

Only a few variables are used regardless of the input size.

---

# 💡 Key Takeaways

- Each step can only be reached from the previous one or two steps.
- The recurrence is:

```text
Ways(n) = Ways(n - 1) + Ways(n - 2)
```

- This follows the Fibonacci pattern.
- An iterative solution avoids recursion and uses constant space.
- Worst Time Complexity: `O(n)`
- Best Time Complexity: `O(1)`
- Space Complexity: `O(1)`
