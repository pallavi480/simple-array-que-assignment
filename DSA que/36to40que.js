// 36. URLify. Input: hello world → hello%20world

// let str = "hello world"

// let result = str.replace(/ /g,"%20")

// console.log(result)


// 37. Longest substring (no repeat). Input: abcabcbb → abc

// let str = "abcabcbb"
// let window = ""
// let longest = ""

// for (let ch of str){
//     while (window.includes(ch)){
//         window = window.slice(1)
    
//     }
//     window += ch

//     if (window.length > longest.length){
//         longest = window
//     }
// }

// console.log(longest)


// 38. Count words. Input: "I am a full stack developer" → 6

// let str = "I am a full stack developer"

// let words = str.split(" ")

// let count = words.length

// console.log(count)


// 39. Zigzag string. Input: abcdef, rows=3 → aebdfc

// let str = "abcdef"
// let rows = 3

// let arr = Array(rows).fill("")
// let index = 0
// let down = true

// for (let ch of str){
//     arr[index] += ch

//     if (index === 0) down = true
//     if (index === rows - 1) down = false


//     index += down? 1 : -1
// }

// let result = arr.join("")
// console.log(result)


// 40. Remove adjacent duplicates. Input: abbaca → ca

// let str = "abbaca"

// let stack = []

// for (let ch of str){
//     if(stack.length && stack[stack.length -1] === ch){
//         stack.pop()
//     }else{
//         stack.push(ch)
//     }
// }

// let result = stack.join("")
// console.log(result)