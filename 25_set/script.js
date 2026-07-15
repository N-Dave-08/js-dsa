// ==========================================
// Sets in JavaScript
// ==========================================

// ------------------------------------------
// Creating a Set
// ------------------------------------------

const set = new Set();

console.log(set);
// Set(0) {}

// ------------------------------------------
// Creating a Set from an Array
// ------------------------------------------

const numbers = new Set([1, 2, 3, 4]);

console.log(numbers);
// Set(4) {1, 2, 3, 4}

// ------------------------------------------
// Duplicate Values are Ignored
// ------------------------------------------

const duplicateNumbers = new Set([1, 2, 2, 3, 3, 3]);

console.log(duplicateNumbers);
// Set(3) {1, 2, 3}

// ------------------------------------------
// Adding Values
// ------------------------------------------

const fruits = new Set();

fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

console.log(fruits);
// Set(3) {"Apple", "Banana", "Orange"}

// Adding a duplicate has no effect.

fruits.add("Apple");

console.log(fruits);
// Set(3) {"Apple", "Banana", "Orange"}

// ------------------------------------------
// Removing Values
// ------------------------------------------

fruits.delete("Banana");

console.log(fruits);
// Set(2) {"Apple", "Orange"}

// ------------------------------------------
// Checking if a Value Exists
// ------------------------------------------

console.log(fruits.has("Apple"));
// true

console.log(fruits.has("Banana"));
// false

// ------------------------------------------
// Finding the Size
// ------------------------------------------

console.log(fruits.size);
// 2

// ------------------------------------------
// Iterating Over a Set
// ------------------------------------------

const colors = new Set(["Red", "Green", "Blue"]);

for (const color of colors) {
  console.log(color);
}

/*
Red
Green
Blue
*/

// ------------------------------------------
// Removing Duplicate Values from an Array
// ------------------------------------------

const values = [1, 2, 2, 3, 3, 4, 5, 5];

const uniqueValues = [...new Set(values)];

console.log(uniqueValues);
// [1, 2, 3, 4, 5]

// ------------------------------------------
// Clearing a Set
// ------------------------------------------

const animals = new Set(["Cat", "Dog", "Bird"]);

console.log(animals);
// Set(3) {"Cat", "Dog", "Bird"}

animals.clear();

console.log(animals);
// Set(0) {}

/*
==========================================
Understanding Sets
==========================================

A Set is a built-in data structure
that stores unique values.

Unlike an array, duplicate values
are not allowed.

If the same value is added multiple
times, it is stored only once.

==========================================
Key Characteristics
==========================================

1. Stores unique values only.

Example

Set(3) {1, 2, 3}

------------------------------------------

2. Duplicate values are ignored.

Example

new Set([1, 2, 2, 3, 3])

Result

Set(3) {1, 2, 3}

------------------------------------------

3. Values can be of any data type.

Examples

String
Number
Boolean
Array
Object

------------------------------------------

4. Sets maintain insertion order.

If you add:

Apple
Banana
Orange

The Set becomes:

Apple
Banana
Orange

------------------------------------------

5. Sets are iterable.

They work with:

for...of

==========================================
Common Operations
==========================================

Add

set.add(value)

------------------------------------------

Delete

set.delete(value)

------------------------------------------

Check if a value exists

set.has(value)

------------------------------------------

Get the size

set.size

------------------------------------------

Remove everything

set.clear()

------------------------------------------

Iterate

for...of

==========================================
Time Complexity
==========================================

Add
O(1) Average

------------------------------------------

Delete
O(1) Average

------------------------------------------

Search (has)
O(1) Average

------------------------------------------

Size
O(1)

------------------------------------------

Clear
O(n)

Every element must be removed.

------------------------------------------

Iteration
O(n)

Every element is visited once.

==========================================
Array vs Set
==========================================

Array

- Allows duplicate values
- Uses indexes
- Search with includes() is O(n)
- Best for ordered collections

Set

- Stores only unique values
- No indexes
- Search with has() is O(1) Average
- Best for unique collections

==========================================
When Should You Use a Set?
==========================================

Use a Set when:

- Values must be unique.
- Fast lookups are needed.
- Removing duplicates from an array.
- Tracking visited items.

Examples

- Unique usernames
- Unique tags
- Graph traversal
- Removing duplicate IDs

==========================================
Final Answer
==========================================

Add                 : O(1) Average
Delete              : O(1) Average
Search (has)        : O(1) Average
Size                : O(1)
Clear               : O(n)
Iteration           : O(n)
*/
