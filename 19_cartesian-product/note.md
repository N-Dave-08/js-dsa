# 🫧 Cartesian Product

## Problem Statement

Given two sets (or arrays), return **every possible ordered pair** where:

- The first element comes from the first array.
- The second element comes from the second array.

This operation is called the **Cartesian Product**.

---

# 📖 What is a Cartesian Product?

The **Cartesian Product** combines **every element** of the first array with **every element** of the second array.

Suppose we have:

```text
A = [1, 2]
B = [3, 4]
```

The Cartesian Product is:

```text
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

Think of it as:

```text
Take one element from A
Pair it with EVERY element in B
Repeat for every element in A
```

---

# 🔄 How Cartesian Product Works

Suppose we have:

```text
A = [1, 2]
B = [3, 4]
```

Start with the first element of A:

```text
1
```

Pair it with every element of B:

```text
[1, 3]
[1, 4]
```

---

Move to the next element of A:

```text
2
```

Pair it with every element of B:

```text
[2, 3]
[2, 4]
```

---

Final result:

```text
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

---

# 🧪 Examples

```text
cartesianProduct([1, 2], [3, 4])
```

Output

```text
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

---

```text
cartesianProduct(["A", "B"], [1, 2, 3])
```

Output

```text
[
  ["A", 1],
  ["A", 2],
  ["A", 3],
  ["B", 1],
  ["B", 2],
  ["B", 3]
]
```

---

```text
cartesianProduct([1], [5, 6])
```

Output

```text
[
  [1, 5],
  [1, 6]
]
```

---

# 🧠 Cartesian Product Thinking

The algorithm asks:

> "For this element in the first array, what happens if I pair it with every element in the second array?"

For every element in the first array:

```text
Loop through the entire second array
```

Create a pair:

```text
[firstArrayElement, secondArrayElement]
```

Store the pair in the result.

Repeat until all elements have been processed.

---

# 🔁 Why Nested Loops?

Since every element in the first array must be paired with every element in the second array, one loop isn't enough.

The outer loop selects an element from the first array.

The inner loop pairs it with every element in the second array.

Visualization:

```text
A = [1, 2]
B = [3, 4]
```

Outer Loop

```text
1
    3
    4

2
    3
    4
```

Pairs produced:

```text
[1, 3]
[1, 4]
[2, 3]
[2, 4]
```

---

# 📝 Algorithm

1. Create an empty array called `result`.
2. Loop through each element in the first array.
3. For each element, loop through every element in the second array.
4. Create a pair containing both elements.
5. Add the pair to `result`.
6. Return `result`.

---

# 💻 JavaScript Solution

```js
function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log(cartesianProduct(arr1, arr2));
```

Output

```text
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

---

# 🔍 Dry Run

Initial arrays:

```text
arr1 = [1, 2]
arr2 = [3, 4]
```

---

### Outer Loop (i = 0)

Current element:

```text
1
```

Inner Loop:

```text
Pair 1 with 3

Result:
[
  [1, 3]
]
```

---

```text
Pair 1 with 4

Result:
[
  [1, 3],
  [1, 4]
]
```

---

### Outer Loop (i = 1)

Current element:

```text
2
```

Inner Loop:

```text
Pair 2 with 3

Result:
[
  [1, 3],
  [1, 4],
  [2, 3]
]
```

---

```text
Pair 2 with 4

Result:
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

Final result:

```text
[
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4]
]
```

---

# ⚡ Complexity Analysis

## Time Complexity

### Worst Case

```text
O(m × n)
```

Where:

- `m` is the length of the first array.
- `n` is the length of the second array.

Every element in the first array is paired with every element in the second array.

Example:

```text
arr1 = [1, 2, 3]
arr2 = [4, 5]
```

Number of pairs:

```text
3 × 2 = 6
```

---

### Best Case

```text
O(m × n)
```

There is no faster case because every possible pair must still be generated.

---

## Space Complexity

```text
O(m × n)
```

The result array stores every possible pair.

---

# 💡 Key Takeaways

- Cartesian Product creates every possible pair between two arrays.
- It requires two nested loops.
- The outer loop selects an element from the first array.
- The inner loop pairs it with every element in the second array.
- The number of pairs equals:

```text
length of first array × length of second array
```

- Time Complexity: `O(m × n)`
- Space Complexity: `O(m × n)`
