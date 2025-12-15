// 26. Reverse words. Input: "I love coding" → "coding love I"

// let str = "I love coding";

// // Step 1: Split
// let words = str.split(" ");

// // Step 2: Reverse
// words.reverse();

// // Step 3: Join
// let result = words.join(" ");

// console.log(result);


// 27. Check anagram. Input: listen, silent → true

// let str1 = "listen";
// let str2 = "silent";

// function isAnagram(s1, s2) {
//     if (s1.length !== s2.length) return false;

//     let sorted1 = s1.split("").sort().join("");
//     let sorted2 = s2.split("").sort().join("");

//     return sorted1 === sorted2;
// }

// console.log(isAnagram(str1, str2));

// 28. Remove repeated characters. Input: "aabbccdde" → "abcde"

// let str = "aabbccdde";
// let seen = new Set();
// let result = "";

// for (let char of str) {
//     if (!seen.has(char)) {
//         seen.add(char);
//         result += char;
//     }
// }

// console.log(result);


// 29. Longest word. Input: "I love programming" → programming

// let str = "I love programming";

// // Step 1: Split words
// let words = str.split(" ");

// // Step 2: Find longest word
// let longest = "";
// for (let word of words) {
//     if (word.length > longest.length) {
//         longest = word;
//     }
// }

// console.log(longest);


// 30. Palindrome ignoring spaces. Input: "A man a plan a canal Panama" → true

// let str = "A man a plan a canal Panama";

// // Step 1: Remove spaces and convert to lowercase
// let cleaned = str.replace(/\s+/g, '').toLowerCase();

// // Step 2: Reverse string
// let reversed = cleaned.split('').reverse().join('');

// // Step 3: Compare
// let isPalindrome = cleaned === reversed;

// console.log(isPalindrome);
