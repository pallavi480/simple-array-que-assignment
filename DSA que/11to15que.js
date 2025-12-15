// 11. Rotate array by K. Input: [1,2,3,4,5], 2 → [4,5,1,2,3]

// let arr = [1, 2, 3, 4, 5];
// let k = 2;

// k = k % arr.length; 

// let result = arr.slice(-k).concat(arr.slice(0, arr.length - k));
// console.log(result);


// 12. Find majority element. Input: [3,3,4] → 3

// let arr = [3, 3, 4];
// let freq = {};

// for (let num of arr) {
//     freq[num] = (freq[num] || 0) + 1;
// }

// let majority = null;
// for (let key in freq) {
//     if (freq[key] > arr.length / 2) {
//         majority = key;
//     }
// }

// console.log(majority);


// 13. Find leaders in array. Input: [16,17,4,3,5,2] → [17,5,2]

// let arr = [16, 17, 4, 3, 5, 2];

// let leaders = [];
// let maxFromRight = arr[arr.length - 1];

// leaders.push(maxFromRight);

// for (let i = arr.length - 2; i >= 0; i--) {
//     if (arr[i] > maxFromRight) {
//         maxFromRight = arr[i];
//         leaders.push(arr[i]);
//     }
// }

// // original order ke liye reverse
// leaders.reverse();

// console.log(leaders);


// 14. Product of array except itself. Input: [1,2,3,4] → [24,12,8,6]

// let arr = [1, 2, 3, 4];
// let total = arr.reduce((a, b) => a * b, 1);

// let result = arr.map(num => total / num);
// console.log(result);


// 15. Sort array of 0s,1s,2s. Input: [0,2,1,2,0] → [0,0,1,2,2]

// let arr = [0, 2, 1, 2, 0];
// let count0 = 0, count1 = 0, count2 = 0;

// for (let num of arr) {
//     if (num === 0) count0++;
//     else if (num === 1) count1++;
//     else count2++;
// }

// let index = 0;
// while (count0--) arr[index++] = 0;
// while (count1--) arr[index++] = 1;
// while (count2--) arr[index++] = 2;

// console.log(arr);

