//41.  Make array of odd-index elements.

// let arr = [10, 20, 30, 40, 50, 60];
// let oddIndexArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) { // odd index
//         oddIndexArr.push(arr[i]);
//     }
// }

// console.log(oddIndexArr);

// 42. Make array of even-index elements.

// let arr = [10, 20, 30, 40, 50, 60];
// let evenIndexArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) { // even index
//         evenIndexArr.push(arr[i]);
//     }
// }

// console.log(evenIndexArr);

// 43. Swap max and min elements

// let arr = [10, 50, 20, 5, 40];

// let maxIndex = 0;
// let minIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) maxIndex = i;
//     if (arr[i] < arr[minIndex]) minIndex = i;
// }

// // Swap using destructuring
// [arr[maxIndex], arr[minIndex]] = [arr[minIndex], arr[maxIndex]];

// console.log(arr);

// 44. Count perfect squares.


// let arr = [1, 2, 4, 5, 9, 12, 16, 20];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sqrt = Math.sqrt(arr[i]);
//     if (Number.isInteger(sqrt)) { // check if square root is integer
//         count++;
//     }
// }

// console.log("Number of perfect squares:", count);

// 45. Remove element at index manually.

// let arr = [10, 20, 30, 40, 50];
// let indexToRemove = 2; // remove element at index 2 (30)
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (i !== indexToRemove) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);
