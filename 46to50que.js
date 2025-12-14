// 46. Insert element at index manually.

// let arr = [10, 20, 30, 40, 50];
// let indexToInsert = 2;
// let elementToInsert = 25;

// // shift elements to the right
// for (let i = arr.length; i > indexToInsert; i--) {
//     arr[i] = arr[i - 1];
// }

// // insert new element
// arr[indexToInsert] = elementToInsert;

// console.log(arr);

// 47. Count strings with length > 5.

// let arr = ["apple", "banana", "grape", "watermelon", "kiwi"];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 5) {
//         count++;
//     }
// }

// console.log("Number of strings with length > 5:", count);

// 48. Convert mixed types to numbers only.

// let arr = [10, "20", "apple", "30", true, "40", false];
// let numberArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let num = Number(arr[i]); // convert to number
//     if (!isNaN(num)) { // check if conversion is successful
//         numberArr.push(num);
//     }
// }

// console.log(numberArr);


// 49. Find product of all numbers.

// let arr = [2, 3, 4, 5];
// let product = 1; // initialize to 1, not 0

// for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
// }

// console.log("Product of all numbers:", product);


// 50. Split array into even and odd arrays.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = [];
// let oddArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         evenArr.push(arr[i]);
//     } else {
//         oddArr.push(arr[i]);
//     }
// }

// console.log("Even numbers:", evenArr);
// console.log("Odd numbers:", oddArr);

