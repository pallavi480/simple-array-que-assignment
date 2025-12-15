// 31. Count vowels & consonants. Input: Sachin → 2 vowels, 4 consonants

// let str = "sachin" .toLowerCase()
// let vowels = 0
// let consonants = 0

// for(let ch of str){
//     if ("aeiou" .includes(ch)){
//         vowels++
//     }else{
//         consonants++
//     }
// }

// console.log("Vowels:",vowels)
// console.log("Consonants",consonants)


// 32. First non-repeating character. Input: swiss → w

// let str = "swiss"

// let count = {}

// for (let ch of str){
//     count[ch] = (count[ch] || 0) + 1;

// }

// for (let ch of str){
//     if (count[ch] === 1){
//         console.log(ch);
//         break
//     }
// }


// 33. Character frequency. Input: banana → {b:1, a:3, n:2}

// let str = "banana"

// let freq = str.split("").reduce((obj, ch) => {
//     obj[ch] = (obj[ch] || 0) + 1
//     return obj;
// },{})

// console.log(freq);


// 34. Remove vowels. Input: education → dctn

// let str = "education"
// let result = ""

// for (let ch of str){
//     if(!"aeiou" .includes(ch)){
//         result += ch
//     }
// }

// console.log(result)


// 35. Rotations check. Input: abcde, deabc → true

// let str1 = "abcde"
// let str2 = "deabc"

// if (str1.length === str2.length && (str1 + str2).includes(str2)){
//     console.log(true)
// } else{
//     console.log(false)
// }