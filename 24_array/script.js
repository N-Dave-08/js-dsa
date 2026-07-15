// ==========================================
// Arrays in JavaScript
// ==========================================

// ------------------------------------------
// Creating an Array
// ------------------------------------------

const numbers = [10, 20, 30, 40];

console.log(numbers);
// [10, 20, 30, 40]

// ------------------------------------------
// Accessing Elements
// ------------------------------------------

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30

// Arrays are zero-indexed,
// so the first element is at index 0.

// ------------------------------------------
// Updating an Element
// ------------------------------------------

numbers[1] = 25;

console.log(numbers);
// [10, 25, 30, 40]

// ------------------------------------------
// Arrays Can Store Different Data Types
// ------------------------------------------

const values = [
  "Ian", // String
  22, // Number
  true, // Boolean
  null, // Null
  { city: "Malolos" }, // Object
  [1, 2, 3], // Array
];

console.log(values);

// ------------------------------------------
// Arrays are Resizable
// ------------------------------------------

const fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
// ["Apple", "Banana", "Orange"]

// ------------------------------------------
// Removing the Last Element
// ------------------------------------------

fruits.pop();

console.log(fruits);
// ["Apple", "Banana"]

// ------------------------------------------
// Adding to the Beginning
// ------------------------------------------

fruits.unshift("Mango");

console.log(fruits);
// ["Mango", "Apple", "Banana"]

// ------------------------------------------
// Removing from the Beginning
// ------------------------------------------

fruits.shift();

console.log(fruits);
// ["Apple", "Banana"]

// ------------------------------------------
// Finding the Index of an Element
// ------------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.indexOf("Green"));
// 1

// ------------------------------------------
// Checking if an Element Exists
// ------------------------------------------

console.log(colors.includes("Blue"));
// true

console.log(colors.includes("Yellow"));
// false

// ------------------------------------------
// Iterating Using for...of
// ------------------------------------------

const scores = [90, 85, 100];

for (const score of scores) {
  console.log(score);
}

/*
90
85
100
*/

// ------------------------------------------
// Iterating Using a Traditional for Loop
// ------------------------------------------

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

/*
90
85
100
*/

/*
==========================================
Understanding Arrays
==========================================

An array is a data structure used
to store multiple values in a single
variable.

Instead of creating many variables:

score1
score2
score3

We can write:

scores = [90, 85, 100]

==========================================
Key Characteristics
==========================================

1. Arrays can hold multiple values.

Example:

[10, 20, 30, 40]

------------------------------------------

2. Arrays can store different data types.

Example:

[
  "Ian",
  22,
  true,
  null,
  { city: "Malolos" },
  [1, 2, 3]
]

------------------------------------------

3. Arrays are resizable.

Elements can be added or removed
at any time.

Examples:

push()
pop()
unshift()
shift()

------------------------------------------

4. Arrays are zero-indexed.

Index:

0   1   2

A   B   C

The first element is always
at index 0.

------------------------------------------

5. Arrays maintain insertion order.

If you insert:

A
B
C

The array becomes:

[A, B, C]

------------------------------------------

6. Arrays are iterable.

You can loop through them using:

- for
- for...of
- forEach()

==========================================
Common Operations
==========================================

Access an element

arr[index]

Example

numbers[0]

------------------------------------------

Add to the end

push()

------------------------------------------

Remove from the end

pop()

------------------------------------------

Add to the beginning

unshift()

------------------------------------------

Remove from the beginning

shift()

------------------------------------------

Search

indexOf()
includes()

==========================================
Time Complexity
==========================================

Access by index
O(1)

------------------------------------------

Search
O(n)

------------------------------------------

Insert at end (push)
O(1)

------------------------------------------

Remove at end (pop)
O(1)

------------------------------------------

Insert at beginning (unshift)
O(n)

------------------------------------------

Remove at beginning (shift)
O(n)

==========================================
Key Idea
==========================================

Arrays are one of the most commonly
used data structures.

They are ideal when:

- Data has a specific order.
- Fast access by index is needed.
- Elements need to be iterated.

Arrays provide a simple and efficient
way to organize related values.

==========================================
Final Answer
==========================================

Access by Index          : O(1)
Search                   : O(n)
Insert at End (push)     : O(1)
Remove at End (pop)      : O(1)
Insert at Beginning      : O(n)
Remove at Beginning      : O(n)
*/
