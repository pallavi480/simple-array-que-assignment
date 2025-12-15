// 1. find the largest number in an array

let numbers = [5,12,-3,7,0,25,8,15,-10,20];

let largest = numbers[0]

for(let i =1;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest = numbers[i];
        }
    }
console.log(largest)

// 2. find the smallest number in an array

// const arr = [2,4,5.7,9];
// let smallest = arr[0];
// for(let i = 1;i<arr.length;i++){
//     if(arr[i]<smallest){
//         smallest = arr[i];
//     }
// }

// console.log(smallest)

// 3. count how many even numbers are in an  array

// const arr = [1,2,3,4,5,6,7,8];
// let count = 0;
// for(let i =0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         count++
//     }
// }
// console.log(count)

// 4. count how many odd numbers are in array

// const arr = [1,2,3,4,5,6,7,8];
// let count = 0;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//         count++;
//     }
// }

// console.log(count)

// 5. find the index of a given number

// const arr = [10,20,30,40,50]
// const target = 30;
// let index = -1
// for(let i = 0; i<arr.length;i++){
//   if(arr[i]===target){
//     index=i
//     break
//   }

// }

// console.log(index)

