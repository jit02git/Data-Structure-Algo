// 1. Find the Maximum Number in an Array

function findMax(arr) {
    // Initialize max with the first element
    let max = arr[0];
  
    // Loop through array to find the max value
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i]; // Update max if current element is greater
      }
    }
  
    return max;
  }
  
  console.log(findMax([3, 1, 7, 5, 9, 2])); // Output: 9
  