//36. Find the longest string.

// let arr = ["apple", "banana", "grape", "watermelon", "kiwi"];

// let longest = arr[0]; // assume first string is the longest

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//         longest = arr[i];
//     }
// }

// console.log("Longest string:", longest);

// 37. Combine two arrays alternatively.
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let combined = [];

// let n = Math.max(arr1.length, arr2.length);

// for (let i = 0; i < n; i++) {
//     if (i < arr1.length) combined.push(arr1[i]);
//     if (i < arr2.length) combined.push(arr2[i]);
// }

// console.log(combined);

// 38.  Remove vowels from array of characters.

// let arr = ['a', 'b', 'c', 'e', 'i', 'o', 'u', 'x', 'y'];
// let result = [];
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// for (let i = 0; i < arr.length; i++) {
//     if (!vowels.includes(arr[i].toLowerCase())) { // ignore vowels
//         result.push(arr[i]);
//     }
// }

// console.log(result);

// 39. Remove negative numbers.

// let arr = [10, -5, 20, -30, 0, 15];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) { // keep only non-negative numbers
//         result.push(arr[i]);
//     }
// }

// console.log(result);

//40. Convert strings to uppercase

// let arr = ["apple", "banana", "grape", "orange"];
// let upperArr = [];

// for (let i = 0; i < arr.length; i++) {
//     upperArr.push(arr[i].toUpperCase());
// }

// console.log(upperArr);

