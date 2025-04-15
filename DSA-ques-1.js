// Remove Duplicates from an array without using pre-defined functions.

function removeDuplicateValue(arr) {

    const arrLength = arr.length; // Store the original array length
    const uniqueArr = [];         // This will hold the unique values
    let isDuplicateValue = false; // Flag to check if a value is duplicate

    // Loop through each element of the input array
    for (let i = 0; i < arrLength; i++) {

        isDuplicateValue = false; // Reset the flag for each new element

        // Check if the current element already exists in the uniqueArr
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicateValue = true; // Found a duplicate
                break;                   // No need to check further
            }
        }

        // If it's not a duplicate, add it to the uniqueArr
        if (!isDuplicateValue) {
            uniqueArr[uniqueArr.length] = arr[i]; // Append element to the end
        }
    }

    // Output the array with duplicates removed
    console.log("New Array:", uniqueArr);
}

// Test the function
removeDuplicateValue([1, 2, 3, 2, 4, 1, 5, 3]);
