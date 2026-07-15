# 📦 Array

## What is an Array?

An **array** is a data structure that stores a collection of values in a single variable.

Instead of creating multiple variables, an array lets you group related values together.

---

# 📖 Key Characteristics

- An array can hold **multiple values**.
- Arrays can contain a **mix of different data types**.
- Arrays are **resizable**. You don't need to specify their size when creating them.
- JavaScript arrays are **zero-indexed**, meaning the first element is at index `0`.
- The **insertion order is maintained**, so elements stay in the order they were added.
- Arrays are **iterable**, so they can be traversed using loops like `for...of`.

---

# 🧪 Creating an Array

```js
const numbers = [10, 20, 30, 40];
```

Visualization:

```text
+-----+-----+-----+-----+
| 10  | 20  | 30  | 40  |
+-----+-----+-----+-----+
   0     1     2     3
```

---

# 🔀 Arrays Can Store Different Data Types

Unlike some programming languages, JavaScript arrays can store values of different types.

```js
const values = ["Ian", 22, true, null, { city: "Malolos" }, [1, 2, 3]];
```

The array contains:

- String
- Number
- Boolean
- Null
- Object
- Another Array

---

# 📏 Arrays are Resizable

You can add new elements whenever you want.

```js
const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

Output

```text
["Apple", "Banana", "Orange"]
```

You don't need to define the array size beforehand.

---

# 🔢 Zero-Indexed

Array indexing starts at **0**.

```js
const colors = ["Red", "Green", "Blue"];
```

Visualization:

```text
Index:    0        1         2

         Red    Green     Blue
```

Accessing an element:

```js
console.log(colors[1]);
```

Output

```text
Green
```

---

# 📥 Insertion Order is Maintained

Elements remain in the order they were added.

```js
const letters = [];

letters.push("A");
letters.push("B");
letters.push("C");

console.log(letters);
```

Output

```text
["A", "B", "C"]
```

---

# 🔁 Arrays are Iterable

Since arrays are iterable, they can be used with a `for...of` loop.

```js
const numbers = [10, 20, 30];

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

# 🛠️ Common Array Operations

| Operation             | Example                 |
| --------------------- | ----------------------- |
| Access                | `arr[0]`                |
| Add to end            | `arr.push(value)`       |
| Remove from end       | `arr.pop()`             |
| Add to beginning      | `arr.unshift(value)`    |
| Remove from beginning | `arr.shift()`           |
| Find index            | `arr.indexOf(value)`    |
| Check if value exists | `arr.includes(value)`   |
| Iterate               | `for...of`, `forEach()` |

---

# ⚡ Time Complexity

| Operation                       | Time Complexity |
| ------------------------------- | --------------- |
| Access by index                 | `O(1)`          |
| Search                          | `O(n)`          |
| Insert at end (`push`)          | `O(1)`          |
| Remove at end (`pop`)           | `O(1)`          |
| Insert at beginning (`unshift`) | `O(n)`          |
| Remove at beginning (`shift`)   | `O(n)`          |

---

# 💡 Key Takeaways

- An array stores multiple values in a single variable.
- JavaScript arrays can hold different data types.
- Arrays are dynamic and can grow or shrink.
- They are zero-indexed.
- The insertion order is preserved.
- Arrays are iterable, making them easy to loop through.
- Accessing an element by index is very fast (`O(1)`), while searching for a value takes linear time (`O(n)`).
