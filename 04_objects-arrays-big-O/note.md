# 📦 Objects - Big-O

## What is an Object?

An **object** is a collection of **key-value pairs**.

### Example

```js
const person = {
  name: "Dave",
  age: 22,
  isStudent: true,
};
```

---

# ⏱️ Time Complexity

| Operation | Big-O    | Explanation                                |
| --------- | -------- | ------------------------------------------ |
| Insert    | **O(1)** | Add a new key-value pair.                  |
| Remove    | **O(1)** | Delete a key-value pair.                   |
| Access    | **O(1)** | Access a value using its key.              |
| Search    | **O(n)** | Search for a value by scanning the object. |

---

## Insert — O(1)

```js
const person = {};

person.name = "Dave";
```

Only one key is added.

```text
O(1)
```

---

## Remove — O(1)

```js
delete person.name;
```

Only one key is removed.

```text
O(1)
```

---

## Access — O(1)

```js
console.log(person.name);
```

JavaScript directly looks up the key.

```text
O(1)
```

---

## Search — O(n)

Suppose we want to find a value without knowing its key.

```js
const person = {
  name: "Dave",
  age: 22,
  city: "Malolos",
};
```

Searching for `"Malolos"` may require checking:

```text
name
↓

age
↓

city
```

In the worst case, every property is checked.

```text
O(n)
```

---

# 📚 Built-in Object Methods

## Object.keys()

Returns an array of all keys.

```js
Object.keys(person);
```

```text
["name", "age", "city"]
```

Time Complexity:

```text
O(n)
```

---

## Object.values()

Returns an array of all values.

```js
Object.values(person);
```

```text
["Dave", 22, "Malolos"]
```

Time Complexity:

```text
O(n)
```

---

## Object.entries()

Returns an array of key-value pairs.

```js
Object.entries(person);
```

```text
[
  ["name", "Dave"],
  ["age", 22],
  ["city", "Malolos"]
]
```

Time Complexity:

```text
O(n)
```

---

# 📝 Summary

| Operation        | Time Complexity |
| ---------------- | --------------- |
| Insert           | **O(1)**        |
| Remove           | **O(1)**        |
| Access           | **O(1)**        |
| Search           | **O(n)**        |
| Object.keys()    | **O(n)**        |
| Object.values()  | **O(n)**        |
| Object.entries() | **O(n)**        |

---

# 📚 Arrays - Big-O

## What is an Array?

An **array** is an **ordered collection of values**.

### Example

```js
const numbers = [10, 20, 30, 40];
```

---

# ⏱️ Time Complexity

| Operation                | Big-O    | Explanation                               |
| ------------------------ | -------- | ----------------------------------------- |
| Insert / Remove at End   | **O(1)** | Add or remove the last element.           |
| Insert / Remove at Start | **O(n)** | All elements must be shifted.             |
| Access                   | **O(1)** | Access an element by its index.           |
| Search                   | **O(n)** | Search for a value by scanning the array. |

---

## Insert at End — O(1)

```js
const numbers = [10, 20, 30];

numbers.push(40);
```

Result:

```text
[10, 20, 30, 40]
```

Only one element is added.

```text
O(1)
```

---

## Remove at End — O(1)

```js
numbers.pop();
```

Result:

```text
[10, 20, 30]
```

Only one element is removed.

```text
O(1)
```

---

## Insert at Beginning — O(n)

```js
numbers.unshift(5);
```

Before:

```text
[10, 20, 30]
```

After:

```text
[5, 10, 20, 30]
```

Every element must shift one position to the right.

```text
O(n)
```

---

## Remove at Beginning — O(n)

```js
numbers.shift();
```

Before:

```text
[10, 20, 30]
```

After:

```text
[20, 30]
```

Every remaining element shifts one position to the left.

```text
O(n)
```

---

## Access — O(1)

```js
console.log(numbers[2]);
```

JavaScript directly accesses the element using its index.

```text
O(1)
```

---

## Search — O(n)

```js
const numbers = [10, 20, 30, 40];

numbers.includes(30);
```

JavaScript checks each element until it finds the value.

Worst case:

```text
10
↓
20
↓
30
↓
40
```

```text
O(n)
```

---

# 📚 Built-in Array Methods

## push()

Adds an element to the end.

```js
numbers.push(50);
```

```text
O(1)
```

---

## pop()

Removes the last element.

```js
numbers.pop();
```

```text
O(1)
```

---

## shift()

Removes the first element.

```js
numbers.shift();
```

```text
O(n)
```

---

## unshift()

Adds an element to the beginning.

```js
numbers.unshift(5);
```

```text
O(n)
```

---

## concat()

Combines two arrays.

```js
const arr3 = arr1.concat(arr2);
```

```text
O(n)
```

---

## slice()

Returns a portion of an array.

```js
numbers.slice(1, 3);
```

```text
O(n)
```

---

## splice()

Adds or removes elements.

```js
numbers.splice(1, 2);
```

```text
O(n)
```

---

## forEach()

Executes a function for every element.

```js
numbers.forEach((num) => console.log(num));
```

```text
O(n)
```

---

## map()

Creates a new array.

```js
const doubled = numbers.map((num) => num * 2);
```

```text
O(n)
```

---

## filter()

Creates a new array containing matching elements.

```js
const even = numbers.filter((num) => num % 2 === 0);
```

```text
O(n)
```

---

## reduce()

Reduces the array to a single value.

```js
const sum = numbers.reduce((total, num) => total + num, 0);
```

```text
O(n)
```

---

# 📝 Summary

| Operation           | Time Complexity |
| ------------------- | --------------- |
| Insert at End       | **O(1)**        |
| Remove at End       | **O(1)**        |
| Insert at Beginning | **O(n)**        |
| Remove at Beginning | **O(n)**        |
| Access              | **O(1)**        |
| Search              | **O(n)**        |
| push()              | **O(1)**        |
| pop()               | **O(1)**        |
| shift()             | **O(n)**        |
| unshift()           | **O(n)**        |
| concat()            | **O(n)**        |
| slice()             | **O(n)**        |
| splice()            | **O(n)**        |
| forEach()           | **O(n)**        |
| map()               | **O(n)**        |
| filter()            | **O(n)**        |
| reduce()            | **O(n)**        |
