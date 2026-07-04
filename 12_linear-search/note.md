# 🔍 Problem: Linear Search

## Problem Statement

Given an array of **`n`** elements and a target element **`t`**, find the **index** of `t` in the array.

If the target element is **not found**, return **`-1`**.

---

# 📖 What is Linear Search?

**Linear Search** is the simplest searching algorithm.

It works by checking **each element one by one** until:

- the target is found, or
- the end of the array is reached.

---

# Example

Array:

```text
[-5, 2, 10, 4, 6]
```

Target:

```text
10
```

Output:

```text
2
```

Because:

```text
Index:   0   1   2   3   4
Array: [-5,  2, 10,  4,  6]
                ↑
             Target
```

---

Another example:

Array:

```text
[-5, 2, 10, 4, 6]
```

Target:

```text
7
```

Output:

```text
-1
```

Because `7` does not exist in the array.

---

# 🧠 How It Works

Start from the beginning of the array.

Compare each element with the target.

If they are equal:

```text
Return the current index.
```

Otherwise:

```text
Move to the next element.
```

If the end of the array is reached without finding the target:

```text
Return -1.
```

---

# 🔍 Visualization

Search for:

```text
Target = 10
```

```text
[-5, 2, 10, 4, 6]

-5 ❌

↓

2 ❌

↓

10 ✅

Return index 2
```

---

Search for:

```text
Target = 7
```

```text
[-5, 2, 10, 4, 6]

-5 ❌

↓

2 ❌

↓

10 ❌

↓

4 ❌

↓

6 ❌

Reached the end.

Return -1
```

---

# 📝 Algorithm

1. Start from the first element.
2. Compare the current element with the target.
3. If they are equal, return the current index.
4. Otherwise, continue to the next element.
5. If the entire array has been searched, return `-1`.

---

# 💻 JavaScript Solution

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

const arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 10)); // 2
console.log(linearSearch(arr, 6)); // 4
console.log(linearSearch(arr, 7)); // -1
```

---

# 🔍 Dry Run

Find:

```text
linearSearch([-5, 2, 10, 4, 6], 10)
```

Iteration 1

```text
i = 0

arr[0] = -5

-5 === 10 ❌
```

---

Iteration 2

```text
i = 1

arr[1] = 2

2 === 10 ❌
```

---

Iteration 3

```text
i = 2

arr[2] = 10

10 === 10 ✅

Return 2
```

The loop stops immediately after finding the target.

---

# ⚡ Complexity Analysis

## Best Time Complexity

```text
O(1)
```

If the target is the **first element**, only one comparison is needed.

Example:

```text
[-5, 2, 10, 4, 6]
 ↑

Target = -5
```

---

## Worst Time Complexity

```text
O(n)
```

If the target is the **last element** or **does not exist**, every element must be checked.

Example:

```text
[-5, 2, 10, 4, 6]
                ↑

Target = 6
```

or

```text
[-5, 2, 10, 4, 6]

Target = 100
```

---

## Space Complexity

```text
O(1)
```

The algorithm only uses a few variables (`i` and `target`) regardless of the array size.

---

# 📊 Complexity Summary

| Complexity | Value |
| ---------- | ----- |
| Best Time  | O(1)  |
| Worst Time | O(n)  |
| Space      | O(1)  |

---

# ✅ Key Takeaways

- Linear Search checks elements **one by one**.
- It works on **both sorted and unsorted arrays**.
- It is easy to implement.
- It becomes slower as the array grows larger.
- **Best Time Complexity:** `O(1)`
- **Worst Time Complexity:** `O(n)`
- **Space Complexity:** `O(1)`

```

```
