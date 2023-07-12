'use strict'
const num = 5;
console.log(num);

// 1.Write a JavaScript function to check if a given number is even or odd.

// const myNumber = prompt("");
// if(!isNaN(Number(myNumber))){
//   if(myNumber % 2 == 0 ){
//   console.log("the number is even" )
//   }else{
//     console.log("the number is odd")
//   }
// }
// else{
//   console.log(`not a string`);
// }


// 2.Write a JavaScript program to calculate the factorial of a number.

// let i;
// let fact = 1;
// let myNum = 7;

// for(i=1; i<=myNum; i++){

//   fact = fact*i;
//   console.log(fact)
// }

// console.log("factorial :"+fact);



// 3.Write a JavaScript program to find the sum of all numbers in each array, excluding
// any numbers that are less than 0.

// var arr = [1, 2, 3, 4];
// var total = 0;
// for (var i in arr) {
//   total += arr[i];
// }


// Creating array
let arr = [3, 6, 9, 12, 15]

// Creating variable to store the sum
let myNum = 0;

// Running the for loop
for (let i = 0; i < arr.length; i++) {
    myNum += arr[i];
}

console.log("Num is " + myNum);



// 5.Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.
// Note : As the letter &#39;y&#39; can be regarded as both a vowel and a consonant, we do not
// count &#39;y&#39; as vowel here.
// Example string: &#39;The quick brown fox&#39;
// Expected Output: 5


function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vol_count = 0;
  
  for(var i = 0; i < str1.length ; i++)
  {
    if (vowel_list.indexOf(str1[i]) !== -1)
    {
      vol_count += 1;
    }
  
  }
  return vol_count;
}
console.log(vowel_count("Three are Best Friends here Abi, Bala , Gowtham "));
