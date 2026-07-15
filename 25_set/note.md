# 🧩 Set

## What is a Set?

A **Set** is a built-in data structure that stores a collection of **unique values**.

Unlike an array, a Set **does not allow duplicate values**. If you try to add the same value multiple times, it will only be stored once.

---

# 📖 Key Characteristics

- Stores **unique values** only.
- Duplicate values are automatically ignored.
- Values can be be of **any data type**.
- A Set maintains the **insertion order** of its elements.
- Sets are **iterable**, so they can be used with a `for...of` loop.
- Sets are dynamically sized—you can add or remove values at any time.

---

# 🧪 Creating a Set

Create an empty Set:

```js
const set = new Set();
```

Create a Set from an array:

```js
const numbers = new Set([1, 2, 3, 4]);
```

Visualization:

```text
+-----+-----+-----+-----+
|  1  |  2  |  3  |  4  |
+-----+-----+-----+-----+
```

---

# 🚫 Duplicate Values

Duplicate values are ignored automatically.

```js
const numbers = new Set([1, 2, 2, 3, 3, 3]);

console.log(numbers);
```

Output

```text
Set(3) {1, 2, 3}
```

Although six values were provided, only the unique values remain.

---

# ➕ Adding Values

Use the `add()` method.

```js
const fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

console.log(fruits);
```

Output

```text
Set(3) {"Apple", "Banana", "Orange"}
```

Adding a duplicate:

```js
fruits.add("Apple");
```

Nothing changes because `"Apple"` already exists.

---

# ❌ Removing Values

Use the `delete()` method.

```js
fruits.delete("Banana");
```

Result

```text
Set(2) {"Apple", "Orange"}
```

---

# 🔍 Checking if a Value Exists

Use the `has()` method.

```js
console.log(fruits.has("Apple"));
```

Output

```text
true
```

---

# 📏 Finding the Size

Use the `size` property.

```js
console.log(fruits.size);
```

Output

```text
2
```

---

# 🧹 Removing All Values

Use the `clear()` method.

```js
fruits.clear();
```

Result

```text
Set(0) {}
```

---

# 🔁 Iterating Over a Set

Since Sets are iterable, they work with `for...of`.

```js
const numbers = new Set([10, 20, 30]);

for (const number of numbers) {
  console.log(number);
}
```

Output

```text
10
20
30
```

---

# 💡 Removing Duplicate Values from an Array

One of the most common uses of a Set is removing duplicate values from an array.

```js
const numbers = [1, 2, 2, 3, 3, 4];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

Output

```text
[1, 2, 3, 4]
```

---

# 🛠️ Common Set Operations

| Operation       | Example             | Time Complexity |
| --------------- | ------------------- | --------------- |
| Add             | `set.add(value)`    | `O(1)` Average  |
| Delete          | `set.delete(value)` | `O(1)` Average  |
| Check Existence | `set.has(value)`    | `O(1)` Average  |
| Get Size        | `set.size`          | `O(1)`          |
| Clear           | `set.clear()`       | `O(n)`          |
| Iterate         | `for...of`          | `O(n)`          |

---

# ⚡ Time Complexity Summary

| Operation      | Time Complexity |
| -------------- | --------------- |
| Add            | `O(1)` Average  |
| Delete         | `O(1)` Average  |
| Search (`has`) | `O(1)` Average  |
| Size           | `O(1)`          |
| Clear          | `O(n)`          |
| Iteration      | `O(n)`          |

> **Note:** JavaScript Sets are generally implemented using **hash tables**, making insertion, deletion, and lookup **O(1)** on average.

---

# 📦 Set vs Array

| Array                                   | Set                                    |
| --------------------------------------- | -------------------------------------- |
| Stores duplicate values                 | Stores only unique values              |
| Elements are accessed using indexes     | Elements are accessed by value         |
| Indexed (starts at index 0)             | Not indexed                            |
| Allows duplicate elements               | Duplicate elements are ignored         |
| Search using `includes()` is `O(n)`     | Search using `has()` is `O(1)` Average |
| Can access elements by index (`arr[0]`) | Cannot access elements by index        |
| Best for ordered lists                  | Best for storing unique values         |

---

### Array Example

```js
const numbers = [1, 2, 2, 3, 3];

console.log(numbers);
```

Output

```text
[1, 2, 2, 3, 3]
```

Arrays preserve every element, including duplicates.

---

### Set Example

```js
const numbers = new Set([1, 2, 2, 3, 3]);

console.log(numbers);
```

Output

```text
Set(3) {1, 2, 3}
```

The duplicate values are automatically removed.

---

### Accessing Values

Array

```js
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[1]);
```

Output

```text
Banana
```

---

Set

```js
const fruits = new Set(["Apple", "Banana", "Orange"]);
```

A Set has **no indexes**, so this does **not** work:

```js
fruits[1];
```

Instead, use:

```js
fruits.has("Banana");
```

Output

```text
true
```

---

### When Should You Use Each?

Use an **Array** when:

- Order matters.
- Duplicate values are allowed.
- You need to access elements by index.
- You frequently iterate through items.

Use a **Set** when:

- Values must be unique.
- You need fast lookups.
- You want to remove duplicates from an array.
- You need to track visited or processed items.

---

# 💡 Key Takeaways

- A Set stores **unique values**.
- Duplicate values are automatically ignored.
- Sets maintain insertion order.
- Sets are iterable with `for...of`.
- `add()`, `delete()`, and `has()` are **O(1)** on average.
- Sets are commonly used to remove duplicates and perform fast membership checks.
- Arrays are better for ordered collections and indexed access, while Sets are better for ensuring uniqueness and fast existence checks.
