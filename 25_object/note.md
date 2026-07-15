# 🗃️ Object

## What is an Object?

An **object** is a data structure that stores data as **key-value pairs**.

Each piece of data is stored using a **key**, which is used to retrieve its corresponding **value**.

Unlike arrays, objects are designed to represent **real-world entities** with named properties.

---

# 📖 Key Characteristics

- Objects store data as **key-value pairs**.
- Keys must be either **strings** or **symbols**.
- Values can be **any data type**, including:
  - Strings
  - Numbers
  - Booleans
  - Arrays
  - Objects
  - Functions
- Objects are **unordered collections** of key-value pairs.
- Values can be accessed using **dot notation** or **bracket notation**.
- Objects are **mutable**, meaning properties can be added, updated, or removed after creation.
- Objects are **not iterable**, so they cannot be used directly with a `for...of` loop.

---

# 🧪 Creating an Object

```js
const person = {
  name: "Ian",
  age: 22,
  isStudent: true,
};
```

Visualization:

```text
+------------+-----------+
|    Key     |   Value   |
+------------+-----------+
| name       | Ian       |
| age        | 22        |
| isStudent  | true      |
+------------+-----------+
```

---

# 🔑 Accessing Properties

There are two ways to retrieve a property's value.

## Dot Notation

```js
console.log(person.name);
```

Output

```text
Ian
```

---

## Bracket Notation

```js
console.log(person["age"]);
```

Output

```text
22
```

Bracket notation is useful when:

- The property name is stored in a variable.
- The property name contains spaces or special characters.

Example:

```js
const key = "name";

console.log(person[key]);
```

Output

```text
Ian
```

---

# 🔀 Objects Can Store Different Data Types

JavaScript objects can hold values of different types.

```js
const user = {
  name: "Ian",
  age: 22,
  isStudent: true,
  hobbies: ["Coding", "Reading"],
  address: {
    city: "Malolos",
    province: "Bulacan",
  },
};
```

The object contains:

- String
- Number
- Boolean
- Array
- Nested Object

---

# ➕ Adding a Property

New properties can be added after the object is created.

```js
person.country = "Philippines";
```

Result

```js
{
  name: "Ian",
  age: 22,
  isStudent: true,
  country: "Philippines"
}
```

---

# ✏️ Updating a Property

Existing properties can be modified.

```js
person.age = 23;
```

---

# ❌ Removing a Property

Use the `delete` operator.

```js
delete person.isStudent;
```

---

# 🔍 Checking if a Property Exists

Using the `in` operator:

```js
console.log("name" in person);
```

Output

```text
true
```

---

# 🔁 Iterating Over an Object

Objects are **not iterable**, so this does **not** work:

```js
for (const item of person) {
  // ❌ Error
}
```

Instead, use a `for...in` loop.

```js
for (const key in person) {
  console.log(key, person[key]);
}
```

Output

```text
name Ian
age 23
country Philippines
```

---

# 🛠️ Useful Object Methods

## `Object.keys()`

Returns an array containing all the object's property names.

```js
console.log(Object.keys(person));
```

Output

```text
["name", "age", "country"]
```

Time Complexity

```text
O(n)
```

The method visits every property to create the array of keys.

---

## `Object.values()`

Returns an array containing all the object's property values.

```js
console.log(Object.values(person));
```

Output

```text
["Ian", 23, "Philippines"]
```

Time Complexity

```text
O(n)
```

The method visits every property to create the array of values.

---

## `Object.entries()`

Returns an array of key-value pairs.

```js
console.log(Object.entries(person));
```

Output

```text
[
  ["name", "Ian"],
  ["age", 23],
  ["country", "Philippines"]
]
```

Time Complexity

```text
O(n)
```

The method visits every property to create the array of key-value pairs.

---

# 🛠️ Common Object Operations

| Operation          | Example                | Time Complexity |
| ------------------ | ---------------------- | --------------- |
| Access Property    | `obj.name`             | `O(1)`          |
| Access Property    | `obj["name"]`          | `O(1)`          |
| Add Property       | `obj.city = "Malolos"` | `O(1)`          |
| Update Property    | `obj.age = 23`         | `O(1)`          |
| Delete Property    | `delete obj.age`       | `O(1)`          |
| Check Property     | `"name" in obj`        | `O(1)` Average  |
| `Object.keys()`    | `Object.keys(obj)`     | `O(n)`          |
| `Object.values()`  | `Object.values(obj)`   | `O(n)`          |
| `Object.entries()` | `Object.entries(obj)`  | `O(n)`          |

---

# ⚡ Time Complexity Summary

| Operation          | Time Complexity |
| ------------------ | --------------- |
| Access Property    | `O(1)`          |
| Insert Property    | `O(1)`          |
| Update Property    | `O(1)`          |
| Delete Property    | `O(1)`          |
| Search by Key      | `O(1)` Average  |
| `Object.keys()`    | `O(n)`          |
| `Object.values()`  | `O(n)`          |
| `Object.entries()` | `O(n)`          |

> **Note:** JavaScript objects are generally implemented using **hash tables**, which makes property access, insertion, update, and deletion **O(1)** on average. Methods like `Object.keys()`, `Object.values()`, and `Object.entries()` are **O(n)** because they must visit every property in the object.

---

# 📦 Array vs Object

| Array                    | Object                                  |
| ------------------------ | --------------------------------------- |
| Uses numeric indexes     | Uses named keys                         |
| Ordered collection       | Unordered collection of key-value pairs |
| Best for lists           | Best for describing entities            |
| Iterable with `for...of` | Not iterable with `for...of`            |

Array

```js
["Apple", "Banana", "Orange"];
```

Object

```js
{
  name: "Apple",
  color: "Red"
}
```

---

# 💡 Key Takeaways

- An object stores data as **key-value pairs**.
- Keys are strings or symbols, while values can be any data type.
- Objects are **unordered collections** of key-value pairs.
- Properties can be accessed using **dot notation** or **bracket notation**.
- Objects are mutable, so properties can be added, updated, or removed.
- Objects are **not iterable** with `for...of`, but they can be traversed using `for...in`.
- Property access, insertion, update, and deletion are **O(1)** on average.
- `Object.keys()`, `Object.values()`, and `Object.entries()` are **O(n)** because they iterate through every property.
