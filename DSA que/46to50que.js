// 46. Digits only? Input: 12345 → true

// let str = "12345"

// str = str.toString()

// let isDigitsOnly = /^\d+$/.test(str)

// console.log(isDigitsOnly)


// 47. Capitalize words. Input: i am sachin → I Am Sachin

// let str = "i am sachin"

// let words = str.split(" ")
// let Capitalize = words.map(word =>word[0].toLocaleUpperCase()+word.slice(1).toLowerCase())
// let result = Capitalize.join (" ")

// console.log(result)


// 48. Compare strings manually. Input: abc, abc → true

// let str1 = "abc"
// let str2 = "abc"

// function CompareStrings(s1, s2){
//     if (s1.length !== s2.length) return false

//     for(let i = 0; i<s1.length; i++){
//         if (s1[i] !== s2[i]) return false
//     }
//     return true
// }

// console.log (CompareStrings(str1, str2))


// 49. Smallest window substring. Input: ADOBECODEBANC, ABC → BANC


// function minwindowsimple(str, pat){
//     let minlen = Infinity
//     let minsub = ""

//     for (let i = 0; i< str.length;i++){
//         for(let j = i + 1; j <= str.length;j++){
//         let sub = str.slice(i, j)

//         let valid = true
//         for(let ch of pat){
//             if (!sub.includes(ch)){
//                 valid = false
//                 break
//             }
//         }

//         if (valid && sub.length <minlen){
//             minlen = sub.length
//             minsub = sub
//         }
//         }
//     }

//     return minsub
// }

// let str = "ADOBECODEBANC"
// let pat = "ABC"

// console.log(minwindowsimple(str, pat))


// 50. Balanced brackets. Input: {[()]} → true

