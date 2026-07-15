// ==========================================
// Objects in JavaScript
// ==========================================

// ------------------------------------------
// Creating an Object
// ------------------------------------------

const person = {
  name: "Ian",
  age: 22,
  isStudent: true,
};

console.log(person);

/*
{
  name: 'Ian',
  age: 22,
  isStudent: true
}
*/

// ------------------------------------------
// Accessing Properties (Dot Notation)
// ------------------------------------------

console.log(person.name);
// Ian

console.log(person.age);
// 22

// ------------------------------------------
// Accessing Properties (Bracket Notation)
// ------------------------------------------

console.log(person["name"]);
// Ian

console.log(person["isStudent"]);
// true

// Bracket notation is useful when the
// property name is stored in a variable.

const key = "age";

console.log(person[key]);
// 22

// ------------------------------------------
// Objects Can Store Different Data Types
// ------------------------------------------

const user = {
  name: "Ian", // String
  age: 22, // Number
  isStudent: true, // Boolean
  hobbies: ["Coding", "Reading"], // Array
  address: {
    // Object
    city: "Malolos",
    province: "Bulacan",
  },
};

console.log(user);

// ------------------------------------------
// Adding a Property
// ------------------------------------------

person.country = "Philippines";

console.log(person);

/*
{
  name: 'Ian',
  age: 22,
  isStudent: true,
  country: 'Philippines'
}
*/

// ------------------------------------------
// Updating a Property
// ------------------------------------------

person.age = 23;

console.log(person.age);
// 23

// ------------------------------------------
// Deleting a Property
// ------------------------------------------

delete person.isStudent;

console.log(person);

/*
{
  name: 'Ian',
  age: 23,
  country: 'Philippines'
}
*/

// ------------------------------------------
// Checking if a Property Exists
// ------------------------------------------

console.log("name" in person);
// true

console.log("salary" in person);
// false

// ------------------------------------------
// Iterating with for...in
// ------------------------------------------

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

/*
name: Ian
age: 23
country: Philippines
*/

// ------------------------------------------
// Object.keys()
// Returns an array of all property names
// Time Complexity: O(n)
// ------------------------------------------

console.log(Object.keys(person));
// ["name", "age", "country"]

// ------------------------------------------
// Object.values()
// Returns an array of all property values
// Time Complexity: O(n)
// ------------------------------------------

console.log(Object.values(person));
// ["Ian", 23, "Philippines"]

// ------------------------------------------
// Object.entries()
// Returns an array of [key, value] pairs
// Time Complexity: O(n)
// ------------------------------------------

console.log(Object.entries(person));

/*
[
  ["name", "Ian"],
  ["age", 23],
  ["country", "Philippines"]
]
*/

/*
==========================================
Understanding Objects
==========================================

An object is a data structure that
stores data as key-value pairs.

Each value is associated with a key.

Instead of accessing data by an index,
objects use meaningful names.

Example

{
  name: "Ian",
  age: 22
}

"name" and "age" are keys.

"Ian" and 22 are values.

==========================================
Key Characteristics
==========================================

1. Objects store key-value pairs.

Example

{
  name: "Ian",
  age: 22
}

------------------------------------------

2. Keys must be strings or symbols.

Values can be any data type.

Examples

String
Number
Boolean
Array
Object
Function

------------------------------------------

3. Objects are mutable.

Properties can be added,
updated, or removed.

Examples

person.country = "Philippines"

person.age = 23

delete person.age

------------------------------------------

4. Access properties using:

- Dot notation

person.name

- Bracket notation

person["name"]

Bracket notation is useful when
the property name is stored in
a variable.

------------------------------------------

5. Objects are NOT iterable.

This does NOT work:

for (const item of person)

Instead, use:

for...in

or

Object.keys()
Object.values()
Object.entries()

==========================================
Common Operations
==========================================

Access

obj.name

obj["name"]

------------------------------------------

Insert

obj.city = "Malolos"

------------------------------------------

Update

obj.age = 23

------------------------------------------

Delete

delete obj.age

------------------------------------------

Check if a property exists

"name" in obj

------------------------------------------

Iterate

for...in

Object.keys()

Object.values()

Object.entries()

==========================================
Time Complexity
==========================================

Access Property
O(1)

------------------------------------------

Insert Property
O(1)

------------------------------------------

Update Property
O(1)

------------------------------------------

Delete Property
O(1)

------------------------------------------

Search by Key
O(1) Average

------------------------------------------

Object.keys()
O(n)

Visits every property and returns
an array of keys.

------------------------------------------

Object.values()
O(n)

Visits every property and returns
an array of values.

------------------------------------------

Object.entries()
O(n)

Visits every property and returns
an array of [key, value] pairs.

==========================================
Array vs Object
==========================================

Array

- Uses numeric indexes
- Ordered collection
- Best for lists
- Iterable with for...of

Object

- Uses named keys
- Key-value pairs
- Best for describing entities
- Not iterable with for...of

==========================================
Key Idea
==========================================

Use an object when you want to
describe something using named
properties.

Examples include:

- User
- Product
- Car
- Student
- Book

Objects make code more readable
because each value has a meaningful
name instead of an index.

==========================================
Final Answer
==========================================

Access Property         : O(1)
Insert Property         : O(1)
Update Property         : O(1)
Delete Property         : O(1)
Search by Key           : O(1) Average
Object.keys()           : O(n)
Object.values()         : O(n)
Object.entries()        : O(n)
*/
