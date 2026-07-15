// ==========================================
// Maps in JavaScript
// ==========================================

// ------------------------------------------
// Creating a Map
// ------------------------------------------

const map = new Map();

console.log(map);
// Map(0) {}

// ------------------------------------------
// Creating a Map with Initial Values
// ------------------------------------------

const person = new Map([
  ["name", "Ian"],
  ["age", 22],
  ["country", "Philippines"],
]);

console.log(person);

/*
Map(3) {
  'name' => 'Ian',
  'age' => 22,
  'country' => 'Philippines'
}
*/

// ------------------------------------------
// Adding Entries
// ------------------------------------------

const student = new Map();

student.set("name", "Ian");
student.set("age", 22);
student.set("course", "BSIS");

console.log(student);

/*
Map(3) {
  'name' => 'Ian',
  'age' => 22,
  'course' => 'BSIS'
}
*/

// ------------------------------------------
// Retrieving Values
// ------------------------------------------

console.log(student.get("name"));
// Ian

console.log(student.get("age"));
// 22

console.log(student.get("salary"));
// undefined

// ------------------------------------------
// Updating a Value
// ------------------------------------------

student.set("age", 23);

console.log(student.get("age"));
// 23

// ------------------------------------------
// Removing an Entry
// ------------------------------------------

student.delete("course");

console.log(student);

/*
Map(2) {
  'name' => 'Ian',
  'age' => 23
}
*/

// ------------------------------------------
// Checking if a Key Exists
// ------------------------------------------

console.log(student.has("name"));
// true

console.log(student.has("course"));
// false

// ------------------------------------------
// Finding the Size
// ------------------------------------------

console.log(student.size);
// 2

// ------------------------------------------
// Iterating Over a Map
// ------------------------------------------

for (const [key, value] of student) {
  console.log(`${key}: ${value}`);
}

/*
name: Ian
age: 23
*/

// ------------------------------------------
// Map.keys()
// Returns an iterator of all keys
// Time Complexity: O(n)
// ------------------------------------------

for (const key of student.keys()) {
  console.log(key);
}

/*
name
age
*/

// ------------------------------------------
// Map.values()
// Returns an iterator of all values
// Time Complexity: O(n)
// ------------------------------------------

for (const value of student.values()) {
  console.log(value);
}

/*
Ian
23
*/

// ------------------------------------------
// Map.entries()
// Returns an iterator of [key, value] pairs
// Time Complexity: O(n)
// ------------------------------------------

for (const [key, value] of student.entries()) {
  console.log(key, value);
}

/*
name Ian
age 23
*/

// ------------------------------------------
// Clearing a Map
// ------------------------------------------

const colors = new Map([
  ["primary", "Blue"],
  ["secondary", "Green"],
]);

console.log(colors);
// Map(2) { 'primary' => 'Blue', 'secondary' => 'Green' }

colors.clear();

console.log(colors);
// Map(0) {}

// ------------------------------------------
// Maps Can Use Any Data Type as Keys
// ------------------------------------------

const objectKey = { id: 1 };
const arrayKey = [1, 2, 3];
const functionKey = function () {};

const exampleMap = new Map();

exampleMap.set(objectKey, "Object Key");
exampleMap.set(arrayKey, "Array Key");
exampleMap.set(functionKey, "Function Key");

console.log(exampleMap.get(objectKey));
// Object Key

console.log(exampleMap.get(arrayKey));
// Array Key

console.log(exampleMap.get(functionKey));
// Function Key

/*
==========================================
Understanding Maps
==========================================

A Map is a built-in data structure
that stores data as key-value pairs.

Unlike an Object, a Map allows
keys of any data type.

Examples of keys:

- String
- Number
- Boolean
- Object
- Array
- Function

==========================================
Key Characteristics
==========================================

1. Stores key-value pairs.

Example

"name" -> "Ian"

------------------------------------------

2. Keys can be any data type.

Examples

String
Number
Object
Array
Function

------------------------------------------

3. Keys are unique.

Setting the same key again updates
its value.

------------------------------------------

4. Maps maintain insertion order.

Entries are iterated in the order
they were added.

------------------------------------------

5. Maps are iterable.

They work with:

for...of

==========================================
Common Operations
==========================================

Add or Update

map.set(key, value)

------------------------------------------

Retrieve

map.get(key)

------------------------------------------

Delete

map.delete(key)

------------------------------------------

Check if a key exists

map.has(key)

------------------------------------------

Get the size

map.size

------------------------------------------

Remove everything

map.clear()

------------------------------------------

Iterate

for...of

map.keys()

map.values()

map.entries()

==========================================
Time Complexity
==========================================

Set
O(1) Average

------------------------------------------

Get
O(1) Average

------------------------------------------

Delete
O(1) Average

------------------------------------------

Has
O(1) Average

------------------------------------------

Size
O(1)

------------------------------------------

Clear
O(n)

Every key-value pair must be removed.

------------------------------------------

keys()
O(n)

Visits every key.

------------------------------------------

values()
O(n)

Visits every value.

------------------------------------------

entries()
O(n)

Visits every key-value pair.

------------------------------------------

Iteration
O(n)

Every entry is visited once.

==========================================
Object vs Map
==========================================

Object

- Keys are strings or symbols
- Access using dot or bracket notation
- Best for describing entities

Map

- Keys can be any data type
- Access using get()
- Better for dynamic key-value storage
- Directly iterable

==========================================
When Should You Use a Map?
==========================================

Use a Map when:

- Keys are not just strings.
- Frequent insertion and deletion.
- Fast lookups are needed.
- You want to preserve insertion order.

Examples

- Cache
- Lookup tables
- Counting occurrences
- Object-to-object relationships

==========================================
Final Answer
==========================================

Set                 : O(1) Average
Get                 : O(1) Average
Delete              : O(1) Average
Has                 : O(1) Average
Size                : O(1)
Clear               : O(n)
keys()              : O(n)
values()            : O(n)
entries()           : O(n)
Iteration           : O(n)
*/
