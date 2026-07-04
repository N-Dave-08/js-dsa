# 🔁 Problem: Recursive Factorial

## Problem Statement

Given a non-negative integer **`n`**, find the **factorial** of that integer using **recursion**.

---

# 📖 What is a Factorial?

The **factorial** of a non-negative integer **`n`**, denoted as **`n!`**, is the product of all positive integers less than or equal to `n`.

Mathematically:

```text
n! = n × (n - 1) × (n - 2) × ... × 2 × 1
```

---

# Special Case

The factorial of zero is:

```text
0! = 1
```

This is also one of the **base cases** for recursion.

---

# Examples

```text
recursiveFactorial(0)
```

Output

```text
1
```

---

```text
recursiveFactorial(1)
```

Output

```text
1
```

---

```text
recursiveFactorial(2)
```

Output

```text
2
```

Calculation:

```text
2 × 1 = 2
```

---

```text
recursiveFactorial(4)
```

Output

```text
24
```

Calculation:

```text
4 × 3 × 2 × 1

= 24
```

---

```text
recursiveFactorial(5)
```

Output

```text
120
```

Calculation:

```text
5 × 4 × 3 × 2 × 1

= 120
```

---

# 🧠 Recursive Thinking

Instead of solving:

```text
5!
```

all at once,

break it into a **smaller version of the same problem**.

```text
5!

↓

5 × 4!
```

Now solve:

```text
4!

↓

4 × 3!
```

Then:

```text
3!

↓

3 × 2!
```

Eventually we reach:

```text
1!

↓

1
```

---

# 🌳 Recursion Tree

```text
recursiveFactorial(5)

↓

5 × recursiveFactorial(4)

↓

5 × (4 × recursiveFactorial(3))

↓

5 × (4 × (3 × recursiveFactorial(2)))

↓

5 × (4 × (3 × (2 × recursiveFactorial(1))))

↓

5 × 4 × 3 × 2 × 1

↓

120
```

Unlike recursive Fibonacci, **only one recursive call** is made at each step.

---

# 🔑 Base Case

Every recursive solution needs a base case.

For factorial:

```text
0! = 1

1! = 1
```

In JavaScript:

```js
if (n < 2) {
  return 1;
}
```

When recursion reaches `0` or `1`, it stops.

---

# 📝 Recursive Formula

The recursive definition of factorial is:

```text
n! = n × (n - 1)!
```

This tells us:

- Multiply `n`
- by the factorial of the previous number.

---

# 📝 Algorithm

1. If `n` is less than `2`, return `1`.
2. Otherwise, return:
   - `n × recursiveFactorial(n - 1)`.

---

# 💻 JavaScript Solution

```js
function recursiveFactorial(n) {
  if (n < 2) {
    return 1;
  }

  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(2)); // 2
console.log(recursiveFactorial(4)); // 24
console.log(recursiveFactorial(5)); // 120
```

---

# 🔍 Dry Run

Find:

```text
recursiveFactorial(4)
```

Step 1

```text
4!

↓

4 × 3!
```

Step 2

```text
3!

↓

3 × 2!
```

Step 3

```text
2!

↓

2 × 1!
```

Base case:

```text
1! = 1
```

Now solve from the bottom up.

```text
2!

= 2 × 1

= 2
```

```text
3!

= 3 × 2

= 6
```

```text
4!

= 4 × 6

= 24
```

Final answer:

```text
recursiveFactorial(4) = 24
```

---

# ⚡ Complexity Analysis

## Time Complexity

```text
O(n)
```

Reason:

The function makes **one recursive call** for each value from `n` down to `1`.

Example:

```text
5

↓

4

↓

3

↓

2

↓

1
```

There are `n` function calls.

---

## Space Complexity

```text
O(n)
```

Reason:

Each recursive call is stored in the **call stack** until the base case is reached.

For example:

```text
recursiveFactorial(5)

↓

recursiveFactorial(4)

↓

recursiveFactorial(3)

↓

recursiveFactorial(2)

↓

recursiveFactorial(1)
```

The maximum call stack depth is proportional to `n`.

---

# 💡 Tips for Recursive Solutions

- Break the problem into **smaller versions of the same problem**.
- Identify the **base case** that stops the recursion.
- Make sure each recursive call gets closer to the base case.

---

# 📝 Key Takeaways

- Factorial is the product of all positive integers up to `n`.
- The recursive formula is:

```text
n! = n × (n - 1)!
```

- Base cases:
  - `0! = 1`
  - `1! = 1`
- Recursive factorial makes **one recursive call** at each step.
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`
