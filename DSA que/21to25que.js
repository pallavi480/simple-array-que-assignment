// 21. Separate even and odd. Input: [1,2,3,4,5] → [2,4,1,3,5]

// let arr = [1, 2, 3, 4, 5];

// let even = [];
// let odd = [];

// for (let num of arr) {
//     if (num % 2 === 0) even.push(num);
//     else odd.push(num);
// }

// let result = even.concat(odd);
// console.log(result);


// 22. Second highest & second lowest. Input: [4,7,2,9] → 7,4

// let arr = [4, 7, 2, 9];

// // Step 1: Sort array
// arr.sort((a, b) => a - b);

// // Step 2: Pick second lowest and second highest
// let secondLowest = arr[1];
// let secondHighest = arr[arr.length - 2];

// console.log("Second Highest:", secondHighest, ", Second Lowest:", secondLowest);


// 23. Remove duplicates but keep order. Input: [1,3,1,3,5] → [1,3,5]

// let arr = [1, 3, 1, 3, 5];
// let seen = new Set();
// let result = [];

// for (let num of arr) {
//     if (!seen.has(num)) {
//         seen.add(num);
//         result.push(num);
//     }
// }

// console.log(result);


// 24. Count elements greater than all left. Input: [3,4,5,2,7,8] → 5

// let arr = [3, 4, 5, 2, 7, 8];

// let count = 0;
// let maxSoFar = -Infinity;

// for (let num of arr) {
//     if (num > maxSoFar) {
//         count++;
//         maxSoFar = num;
//     }
// }

// console.log(count);


// 25. Smallest subarray sum > K. Input: [2,3,1,2,4,3], 7 → length=2

// let arr = [2, 3, 1, 2, 4, 3];
// let K = 7;

// let left = 0, sum = 0, minLen = Infinity;

// for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];

//     while (sum > K) {
//         minLen = Math.min(minLen, right - left + 1);
//         sum -= arr[left];
//         left++;
//     }
// }

// console.log(minLen);
