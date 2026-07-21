// ==========================================
// Linked List Overview
// ==========================================

// ------------------------------------------
// Node Class
// ------------------------------------------
// Each node stores:
// 1. A value (data)
// 2. A reference to the next node
// ------------------------------------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// ------------------------------------------
// Linked List Class
// ------------------------------------------

class LinkedList {
  constructor() {
    // The head points to the first node.
    // Initially, the list is empty.
    this.head = null;

    // Keep track of the number of nodes.
    this.size = 0;
  }

  // ------------------------------------------
  // Check if the list is empty
  // Time Complexity: O(1)
  // ------------------------------------------
  isEmpty() {
    return this.size === 0;
  }

  // ------------------------------------------
  // Return the number of nodes
  // Time Complexity: O(1)
  // ------------------------------------------
  getSize() {
    return this.size;
  }

  // ------------------------------------------
  // Insert a node at the beginning
  // Time Complexity: O(1)
  // ------------------------------------------
  prepend(value) {
    const node = new Node(value);

    node.next = this.head;
    this.head = node;

    this.size++;
  }

  // ------------------------------------------
  // Insert a node at the end
  // Time Complexity: O(n)
  // ------------------------------------------
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;

      while (previous.next) {
        previous = previous.next;
      }

      previous.next = node;
    }

    this.size++;
  }

  // ------------------------------------------
  // Print the Linked List
  // Time Complexity: O(n)
  // ------------------------------------------
  print() {
    if (this.isEmpty()) {
      console.log("Linked List is empty");
      return;
    }

    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    result += "null";

    console.log(result);
  }
}

// ==========================================
// Example Usage
// ==========================================

const list = new LinkedList();

console.log("Is Empty:", list.isEmpty()); // true
console.log("Size:", list.getSize()); // 0

console.log("\nPrepend Operations");
list.prepend(30);
list.prepend(20);
list.prepend(10);

list.print();
// 10 -> 20 -> 30 -> null

console.log("\nAppend Operations");
list.append(40);
list.append(50);

list.print();
// 10 -> 20 -> 30 -> 40 -> 50 -> null

console.log("\nFinal Size:", list.getSize());

// ==========================================
// Visualization
// ==========================================

/*

Initially

head

null

------------------------------------------

After prepend(30)

head
 │
 ▼

+------+------+
| 30   | null |
+------+------+

------------------------------------------

After prepend(20)

head
 │
 ▼

+------+------+
| 20   |  •───┼────►
+------+------+

            +------+------+
            | 30   | null |
            +------+------+

------------------------------------------

After prepend(10)

head
 │
 ▼

+------+------+
| 10   |  •───┼────►
+------+------+

            +------+------+
            | 20   |  •───┼────►
            +------+------+

                        +------+------+
                        | 30   | null |
                        +------+------+

------------------------------------------

After append(40)

10 → 20 → 30 → 40 → null

------------------------------------------

After append(50)

10 → 20 → 30 → 40 → 50 → null

==========================================
Time Complexity
==========================================

isEmpty()
O(1)

getSize()
O(1)

prepend()
O(1)

append()
O(n)

print()
O(n)

==========================================
Key Takeaways
==========================================

- A Linked List is made up of nodes.
- Each node stores:
    • value
    • next pointer
- head points to the first node.
- prepend() inserts at the beginning.
- append() inserts at the end.
- Traversal is done using the next pointer.
- The last node always points to null.

*/
