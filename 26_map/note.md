# 🗺️ Map

## What is a Map?

A **Map** is a built-in data structure that stores data as **key-value pairs**.

Unlike an Object, a Map allows **keys of any data type**, including:

- Strings
- Numbers
- Booleans
- Objects
- Arrays
- Functions

Maps are useful when you need flexible keys and efficient insertion, deletion, and lookup operations.

---

# 📖 Key Characteristics

- Stores data as **key-value pairs**.
- Keys can be **any data type**.
- Values can be **any data type**.
- Keys are **unique**.
- Maintains the **insertion order** of entries.
- Maps are **iterable**, so they work with `for...of`.
- Provides built-in methods for managing entries.

---

# 🧪 Creating a Map

Create an empty Map:

```js
const map = new Map();
```

Create a Map with initial values:

```js
const person = new Map([
  ["name", "Ian"],
  ["age", 22],
  ["country", "Philippines"],
]);
```

Visualization:

```text
+----------+----------------+
|   Key    |     Value      |
+----------+----------------+
| "name"   | "Ian"          |
| "age"    | 22             |
| "country"| "Philippines"  |
+----------+----------------+
```

---

# ➕ Adding Entries

Use the `set()` method.

```js
const person = new Map();

person.set("name", "Ian");
person.set("age", 22);
person.set("country", "Philippines");
```

---

# 🔍 Retrieving Values

Use the `get()` method.

```js
console.log(person.get("name"));
```

Output

```text
Ian
```

If the key does not exist:

```js
console.log(person.get("salary"));
```

Output

```text
undefined
```

---

# ✏️ Updating a Value

Calling `set()` with an existing key updates its value.

```js
person.set("age", 23);
```

---

# ❌ Removing an Entry

Use the `delete()` method.

```js
person.delete("country");
```

---

# 🔎 Checking if a Key Exists

Use the `has()` method.

```js
console.log(person.has("name"));
```

Output

```text
true
```

---

# 📏 Finding the Size

Use the `size` property.

```js
console.log(person.size);
```

Output

```text
2
```

---

# 🧹 Removing All Entries

Use the `clear()` method.

```js
person.clear();
```

Result

```text
Map(0) {}
```

---

# 🔁 Iterating Over a Map

Maps are iterable.

```js
const person = new Map([
  ["name", "Ian"],
  ["age", 22],
  ["country", "Philippines"],
]);

for (const [key, value] of person) {
  console.log(key, value);
}
```

Output

```text
name Ian
age 22
country Philippines
```

---

# 🛠️ Useful Map Methods

## `keys()`

Returns an iterator containing all keys.

```js
for (const key of person.keys()) {
  console.log(key);
}
```

Output

```text
name
age
country
```

Time Complexity

```text
O(n)
```

---

## `values()`

Returns an iterator containing all values.

```js
for (const value of person.values()) {
  console.log(value);
}
```

Output

```text
Ian
22
Philippines
```

Time Complexity

```text
O(n)
```

---

## `entries()`

Returns an iterator of key-value pairs.

```js
for (const [key, value] of person.entries()) {
  console.log(key, value);
}
```

Output

```text
name Ian
age 22
country Philippines
```

Time Complexity

```text
O(n)
```

---

# 🛠️ Common Map Operations

| Operation       | Example               | Time Complexity |
| --------------- | --------------------- | --------------- |
| Add / Update    | `map.set(key, value)` | `O(1)` Average  |
| Retrieve        | `map.get(key)`        | `O(1)` Average  |
| Delete          | `map.delete(key)`     | `O(1)` Average  |
| Check Existence | `map.has(key)`        | `O(1)` Average  |
| Get Size        | `map.size`            | `O(1)`          |
| Clear           | `map.clear()`         | `O(n)`          |
| Iterate         | `for...of`            | `O(n)`          |

---

# ⚡ Time Complexity Summary

| Operation | Time Complexity |
| --------- | --------------- |
| Set       | `O(1)` Average  |
| Get       | `O(1)` Average  |
| Delete    | `O(1)` Average  |
| Has       | `O(1)` Average  |
| Size      | `O(1)`          |
| Clear     | `O(n)`          |
| Iteration | `O(n)`          |

> **Note:** JavaScript Maps are generally implemented using **hash tables**, making insertion, retrieval, deletion, and lookup **O(1)** on average.

---

# 📦 Object vs Map

| Object                              | Map                                |
| ----------------------------------- | ---------------------------------- |
| Keys are strings or symbols         | Keys can be any data type          |
| Not directly iterable               | Directly iterable                  |
| Access with `obj.key` or `obj[key]` | Access with `map.get(key)`         |
| No built-in `size` property         | Has a `size` property              |
| Best for describing entities        | Best for dynamic key-value storage |

---

### Object Example

```js
const person = {
  name: "Ian",
  age: 22,
};

console.log(person.name);
```

Output

```text
Ian
```

---

### Map Example

```js
const person = new Map();

person.set("name", "Ian");
person.set("age", 22);

console.log(person.get("name"));
```

Output

```text
Ian
```

---

### Object Keys vs Map Keys

Object

```js
const user = {
  name: "Ian",
};
```

The key is always a string.

---

Map

```js
const key = { id: 1 };

const map = new Map();

map.set(key, "Developer");
```

Objects can even be used as keys.

---

# 💡 When Should You Use a Map?

Use a Map when:

- Keys are not just strings.
- You need frequent insertion and deletion.
- You need to preserve insertion order.
- You want to iterate over key-value pairs easily.

Examples include:

- Caching data
- Counting occurrences
- Storing object-to-object relationships
- Lookup tables

---

# 💡 Key Takeaways

- A Map stores **key-value pairs**.
- Keys and values can be of **any data type**.
- Maps maintain insertion order.
- Maps are iterable with `for...of`.
- `set()`, `get()`, `delete()`, and `has()` are **O(1)** on average.
- Maps are more flexible than Objects when working with dynamic keys.
