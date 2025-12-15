// 6. Find intersection of two arrays. Input: [1,2,3], [2,4,3] → [2,3]

// let arr1 = [1, 2, 3];
// let arr2 = [2, 4, 3];

// let set1 = new Set(arr1);
// let result = [];

// for (let num of arr2) {
//     if (set1.has(num)) {
//         result.push(num);
//     }
// }

// console.log(result);


// 7. Find union of two arrays. Input: [1,2], [2,3] → [1,2,3]

// let arr1 = [1, 2];
// let arr2 = [2, 3];

// let result = [...new Set([...arr1, ...arr2])];
// console.log(result);


// 8. Maximum subarray sum (Kadane). Input: [-2,1,-3,4,-1,2,1,-5] → 6

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5];

// let maxSum = arr[0];
// let currentSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];

//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//     }

//     if (currentSum < 0) {
//         currentSum = 0;
//     }
// }

// console.log(maxSum);


// 9. Count subarrays with sum < K. Input: [1,2,3], 5 → 4

// let arr = [1, 2, 3];
// let K = 5;

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum += arr[j];
//         if (sum < K) {
//             count++;
//         }
//     }
// }

// console.log(count);


// 10. Longest consecutive sequence. Input: [100,4,200,1,3,2] → 4

// let arr = [100, 4, 200, 1, 3, 2];

// let set = new Set(arr);
// let longest = 0;

// for (let num of set) {
//     // sequence ka start check
//     if (!set.has(num - 1)) {
//         let currentNum = num;
//         let count = 1;

//         while (set.has(currentNum + 1)) {
//             currentNum++;
//             count++;
//         }

//         longest = Math.max(longest, count);
//     }
// }

// console.log(longest);


