// 41. Valid shuffle. Input: ab, cd, acbd → true

// function isValidShuffle(str1, str2, shuffle){
//     if (str1.length + str2.length !== shuffle.length)return false

//     let i = 0, j = 0

//     for (let ch of shuffle){
//         if(i < str1.length && ch === str1[i]) i++
//         else if (j <str2.length && ch === str2[j]) j++
//         else return false
//     }
//     return true
// }

// console.log (isValidShuffle("ab","cd","acbd"))


// 42. Max occurring character. Input: test → t

// let str = "test"
// let freq = {}
// let maxChar =''
// let maxCount = 0

// for(let ch of str){
//     freq[ch] = (freq[ch] || 0) + 1
// }

// for (let ch in freq){
//     if(freq[ch]>maxCount){
//         maxCount = freq[ch]
//         maxChar = ch
//     }
// }

// console.log(maxChar)


// 43. String to integer. Input: "1234" → 1234

// let str = "1234"

// let num1 = Number(str)
// console.log(num1)

// let num2 = parseInt(str)
// console.log(num2)


// 44. Common characters. Input: hello, world → lo

// let str1 = "hello"
// let str2 = "world"

// let set2 = new Set(str2)
// let result = ""

// for (let ch of str1){
//     if (set2.has(ch) && !result.includes(ch)){
//         result += ch;
//     }
// }

// console.log(result)


// 45. Print all substrings. Input: abc → a,b,c,ab,bc,abc

// let str = "abc";
// let substrings = [];


// for (let len = 1; len <= str.length; len++) {
//     for (let i = 0; i <= str.length - len; i++) {
//         substrings.push(str.slice(i, i + len));
//     }
// }

// console.log(substrings.join(","));
