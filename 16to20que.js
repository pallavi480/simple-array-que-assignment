//16. Return only positive numbers.

// let arr = [10, -5, 0, 20, -30, 15];
// let positiveArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positiveArr.push(arr[i]);
//     }
// }

// console.log(positiveArr);

// 17.  Return numbers divisible by 5.

// let arr = [10, 12, 25, 30, 7, 40, 18];
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         result.push(arr[i]);
//     }
// }

// console.log(result);

// 18. Count frequency of a given number

// let arr = [10, 20, 10, 30, 10, 40];
// let target = 10;

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         count++;
//     }
// }

// console.log(count);

// 19.  Find second largest number
// let arr = [10, 20, 5, 40, 30];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log(secondLargest);

//20. Find second smallest number.

//  let arr = [10, 5, 20, 3, 15];

// let smallest = Infinity;
// let secondSmallest = Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         secondSmallest = smallest;
//         smallest = arr[i];
//     } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//         secondSmallest = arr[i];
//     }
// }

// console.log(secondSmallest);
