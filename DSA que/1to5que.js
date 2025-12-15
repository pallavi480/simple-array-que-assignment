// 1. Find all pairs whose sum equals target. Input: [2,7,11,15], 9 → Output: [2,7]

// let arr = [2, 7, 11, 15];
// let target = 9;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             console.log([arr[i], arr[j]]);
//         }
//     }
// }


// 2. Find triplets whose sum equals target. Input: [1,2,3,4,5], 9 → Output: [2,3,4]

// let arr = [1, 2, 3, 4, 5];
// let target = 9;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//             if (arr[i] + arr[j] + arr[k] === target) {
//                 console.log([arr[i], arr[j], arr[k]]);
//             }
//         }
//     }
// }


// 3. Move all negative numbers to beginning. Input: [3,-1,5,-2] → [-1,-2,3,5]

// let arr = [3, -1, 5, -2];

// let negative = [];
// let positive = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         negative.push(arr[i]);
//     } else {
//         positive.push(arr[i]);
//     }
// }

// let result = negative.concat(positive);
// console.log(result);


// 4. Find missing number from 1 to N. Input: [1,2,4,5], 5 → 3

// let arr = [1, 2, 4, 5];
// let N = 5;

// let totalSum = (N * (N + 1)) / 2; // 15
// let arrSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     arrSum += arr[i]; // 12
// }

// let missing = totalSum - arrSum;
// console.log(missing);


// 5. Find duplicate element. Input: [1,3,4,2,2] → 2

// let arr = [1, 3, 4, 2, 2];
// let set = new Set();

// for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//         console.log(arr[i]);
//         break;
//     }
//     set.add(arr[i]);
// }
