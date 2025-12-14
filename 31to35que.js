//31. Rotate array right by 1

// let arr = [10, 20, 30, 40, 50];

// // remove last element
// let last = arr.pop();

// // add  to the start
// arr.unshift(last);

// console.log(arr);

// 32.  Rotate array left by 1.

// let arr = [10, 20, 30, 40, 50];

// // remove first element
// let first = arr.shift();

// // add the end
// arr.push(first);

// console.log(arr);

// 33. Check if array is sorted.

// let arr = [10, 20, 30, 40, 50];
// let isSorted = true;

// for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         isSorted = false;
//         break;
//     }
// }

// console.log(isSorted);

// 34. Count prime numbers.

// Helper function to check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false; // 0 and 1 are not prime
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // Example array
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Count prime numbers
// let primeCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//         primeCount++;
//     }
// }

// console.log("Number of prime numbers:", primeCount);


// 35.  Print all primes

// Helper function to check if a number is prime
// function isPrime(n) {
//     if (n <= 1) return false; // 0 and 1 are not prime
//     for (let i = 2; i * i <= n; i++) {
//         if (n % i === 0) return false;
//     }
//     return true;
// }

// // Example array
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Print all prime numbers
// for (let i = 0; i < arr.length; i++) {
//     if (isPrime(arr[i])) {
//         console.log(arr[i]);
//     }
// }
