// ==========================================
// Quick Sort
// ==========================================

// Quick Sort uses the Divide and Conquer strategy.
//
// Steps:
// 1. Choose a pivot (we use the last element).
// 2. Put smaller elements into the left array.
// 3. Put larger elements into the right array.
// 4. Recursively sort the left and right arrays.
// 5. Combine:
//    sorted left + pivot + sorted right

const arr = [-6, 20, 8, -2, 4];

function quickSort(arr) {
  // Base case:
  // Arrays with 0 or 1 element are already sorted.
  if (arr.length < 2) {
    return arr;
  }

  // Choose the last element as the pivot.
  const pivot = arr[arr.length - 1];

  // Arrays for partitioning.
  const left = [];
  const right = [];

  // Compare every element except the pivot.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      // Smaller values go to the left.
      left.push(arr[i]);
    } else {
      // Larger (or equal) values go to the right.
      right.push(arr[i]);
    }
  }

  // Recursively sort both partitions,
  // then combine them with the pivot.
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));
// Output:
// [-6, -2, 4, 8, 20]
