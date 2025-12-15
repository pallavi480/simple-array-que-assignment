// 16. First repeating element. Input: [1,5,3,4,3,5] → 5

// let arr = [1, 5, 3, 4, 3, 5];

// let freq = {};

// // step 1: count frequency
// for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
// }

// // step 2: find first repeating
// for (let num of arr) {
//     if (freq[num] > 1) {
//         console.log(num);
//         break;
//     }
// }


// 17. Longest increasing subarray. Input: [1,2,3,2,4,5] → [2,4,5]

// let arr = [1, 2, 3, 2, 4, 5];

// let maxLen = 1;
// let start = 0;

// let currLen = 1;
// let currStart = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//         currLen++;
//     } else {
//         currLen = 1;
//         currStart = i;
//     }

//     if (currLen > maxLen) {
//         maxLen = currLen;
//         start = currStart;
//     }
// }

// // Extract subarray
// let result = arr.slice(start, start + maxLen);
// console.log(result);


// 18. Count pairs with difference k. Input: [1,5,3,4,2], 2 → 3

// let arr = [1, 5, 3, 4, 2];
// let K = 2;
// let set = new Set(arr);
// let count = 0;

// for (let num of arr) {
//     if (set.has(num + K)) count++;
// }

// console.log(count);


// 19. Equilibrium index. Input: [1,3,5,2,2] → 2

// let arr = [1, 3, 5, 2, 2];

// let totalSum = arr.reduce((a, b) => a + b, 0);
// let leftSum = 0;
// let eqIndex = -1;

// for (let i = 0; i < arr.length; i++) {
//     let rightSum = totalSum - leftSum - arr[i];
//     if (leftSum === rightSum) {
//         eqIndex = i;
//         break;
//     }
//     leftSum += arr[i];
// }

// console.log(eqIndex);


// 20. Count subarrays with sum = k. Input: [1,1,1], 2 → 2

// let arr = [1, 1, 1];
// let K = 2;

// let prefixSum = 0;
// let map = new Map();
// map.set(0, 1); // empty subarray sum
// let count = 0;

// for (let num of arr) {
//     prefixSum += num;
//     if (map.has(prefixSum - K)) {
//         count += map.get(prefixSum - K);
//     }
//     map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
// }

// console.log(count);

