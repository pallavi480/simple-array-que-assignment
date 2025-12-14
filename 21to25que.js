//21. Remove duplicates without using Set.

// let arr = [10, 20, 10, 30, 20, 40];
// let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < uniqueArr.length; j++) {
//         if (arr[i] === uniqueArr[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (!isDuplicate) {
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr);

// 22. Print only unique elements.

// let arr = [10, 20, 10, 30, 20, 40, 50];

// for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }

//     if (count === 1) {
//         console.log(arr[i]);
//     }
// }

// 23. Merge two arrays using loop.
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];

// let mergedArr = [];

// // add first array
// for (let i = 0; i < arr1.length; i++) {
//     mergedArr.push(arr1[i]);
// }

// // add second array
// for (let i = 0; i < arr2.length; i++) {
//     mergedArr.push(arr2[i]);
// }

// console.log(mergedArr);

// 24. Move all zeros to the end.

// let arr = [0, 1, 0, 3, 12, 0, 5];
// let result = [];

// // add non-zero elements
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         result.push(arr[i]);
//     }
// }

// // count zeros and add them at end
// let zeroCount = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         zeroCount++;
//     }
// }

// for (let i = 0; i < zeroCount; i++) {
//     result.push(0);
// }

// console.log(result);

// 25.Count numbers between 10 and 50.

// let arr = [5, 12, 25, 50, 60, 45, 10, 30];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10 && arr[i] < 50) {
//         count++;
//     }
// }

// console.log(count);
