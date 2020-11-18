// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

// WIll have a function with a single argument or multiple, but returns a "string"
// If/else statement to find out if each number is divisible by 3
//  It seems to only output the string without the new variable...
// I need to add the 

const divide = (num)=>{
    if (num % 3 === 0) {
        return `${num} is divisible by three`
    } else{
        return `${num} is not divisible by three`
    }
    
}

console.log(divide(num1));
console.log(divide(num2));
console.log(divide(num3));

// I had almost had it, had the idea correct and got direction from a pier, I was making it much harder adding 2 else ifs...


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Datasbase"]

// need a const that returns each word captitalized
// .toUpperCase will be used
// 
const capitalize =(array)=>{
    let array1 = array.map(value =>{
        return value[0].toUpperCase() + value.substring(1)
    }) 
    return array1
}
// I was getting the output in a string because I was using a .join(), I was over thinking it and just needed to return the array1 as an array not a "string"
// still need to put back the "", around each variable

console.log(capitalize(randomNouns));


// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

//
const numsOnly = (array) => {
    // the filter changes the array and the typeof value === "number" in the .filter() hones in on the numbers only
    let filterArray = array.filter(value =>{
        return typeof value === "number"
    })
    return filterArray.sort(function(a, b){return a-b})
} 
// now I need to compare each number and put them in order maybe a for loop??
// for(let i =0; i < array.length; i++){
//     if ([i] <= )
// }
// this may work??
// points.sort(function(a, b){return a-b});
// mixedDataArray.sort(numsOnly(a, b){return a-b});
// so I barely understand why the .sort works, Iall I know is I did it with some help...


console.log(numsOnly(mixedDataArray));


// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// I need a function that logs the first vowel
// I want to hone in on the "l" and the "r"??? 
// need to somehow grab the vowel maybe I can use an map or maybe .filter to find the index of the first vowel .map( value, index) => { "e" === "a" || "e" || "i" || "o" || "u"
var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3 
var vowelArr = ["a", "e", "i", "o", "u"]
// vowelTester1.split("") => ["l", "e", "a"...]

const firstVowel = (str)=>{
  let arr = str.split("")
  // arr = [t, h, r, o, w]

  for (let i=0; i < arr.length; i++){
    // i = 0, 1, 2, 3
    // arr[i] = t, h, r, o
     if (vowelArr.includes(arr[i])) {
      // vowelArr.includes(arr[i])) = false, false, false, true
      return i
     }
  } 
}
// If the index of the split "str" === one of the vowels, return index
// If the index of the split "str" is in the array of vowels, return index

    

// // the .log will take an accessor .indexOf()
console.log(firstVowel(vowelTester1))
console.log(firstVowel(vowelTester2))


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

// function takes three arguments such as (num1, num2, (+, -, *, /))
// if/else to preform the given calculation?
// let may help more in this situation to return the operation
// How do you transfer those numbers into a "string" .concat?


const calculator = (num1, operation, num2) =>{
    // this needs to preform its action in its return, how? and also for each else?
    // let answer = num1 + operation + num2
    //     return answer.concat()
    if (operation === "+"){
        // if the operation === "+" i want it to return the total
    return (num1 + num2)
    } else if (operation === "-") {
        return (num1 - num2)
    } else if (operation === "*") {
        return (num1 * num2)
    } else if (operation === "/" && num1 || num2 === 0){
        return "Can't divide by 0!"
    } else { (operation === "/")
        return (num1 / num2)
    }
    
}

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// // Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
