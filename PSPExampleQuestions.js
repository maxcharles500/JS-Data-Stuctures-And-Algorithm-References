//Frequency Counter
//Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//Your solution MUST have the following complexities:
//Time: O(N)

const sameFrequency = (num1, num2) => {
    //convert nums to String
    const string1 = num1.toString();
    const string2 = num2.toString();
    //check if both strings are the same length
    if(string1.length !== string2.length){
        return false;
    }
    //set two empty objects to hold frequencies
    let counterObj1 = {}
    let counterObj2 = {}
    //loop over first string and record the frequencies
    for(let i = 0; i < string1.length; i++){
        counterObj1[string1[i]] ? counterObj1[string1[i]] += 1 : counterObj1[string1[i]] = 1
      }
    //loop over second string and record the frequencies
    for(let i = 0; i < string2.length; i++){
        counterObj2[string2[i]] ? counterObj2[string2[i]] += 1 : counterObj2[string2[i]] = 1
    }
    //loop over frequencyobj1 and compare to obj2
    for (const key in counterObj1) {
      if(counterObj1[key] !== counterObj2[key]){
          return false;
          }
      }
      return true;
  }

//   console.log(sameFrequency(123, 123))
//   console.log(sameFrequency(124, 123))


//Multiple Pointers 
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//I: array of integers, and a target average(integer)
//O: boolean true if a pair of numbers frm arr equals the target average and false if no such pairs exist
//C: there may be more than one pair that matches the target avg, O(N)time O(1) space

const averagePair = (arr, avg) => {
    //set two pointers, one at the beginning one at the end of the arr
    let left = 0;
    let right = arr.length - 1;
    //Loop through the arr
    while(left < right){
        if(arr[left] + arr[right] / 2 === avg){
            return true;
        }else if(arr[left] + arr[right] / 2 > avg){
            right--;
        }else{
            left++;
        }
    }
    return false;
    
  }
//   console.log(averagePair([1,2,3],2.5))
//   console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
//   console.log(averagePair([-1,0,3,4,5,6], 4.1))

//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//I: two strings
//O: boolean true if the chars in the first string appear in the second string without their order changing false if not
//C:Time Complexity - O(N + M), Space Complexity - O(1)

const isSubSequence = (str1, str2) => {
     //set up pointers initialized at 0
  let i = 0;
  let j = 0;
  //if no str1 return rue
  if (!str1) return true;
  //loop over strings and compare values
  while (j < str2.length) {
    //if str1 at i is the same as str2 at i increment i
    if (str2[j] === str1[i]) i++;
    //if i is the same length as str1.length weve rached the nd of str1 without returning false so we return true
    if (i === str1.length) return true;
    //if we havent returned true increment J so we can loop again and compare the next char
    j++;
  }
  //if all other code executes without returning true default return false
  return false;
}

//Sliding Window
//Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//I: array of integers and a number 
//O: the sum of a subarray with the sepcified number of elements aka a number
//C:Time Complexity - O(N) Space Complexity - O(1)

const maxSubArraySum = (arr, num) => {
//create variable to hold the max sum and our current max sum
let maxSum = 0;
let tempSum = 0;
//if the num is begger than the number of elements in the array return null
if (arr.length < num) return null;
//loop over the arr num times to capture the sum of the first num elements set that to the current max sum
for (let i = 0; i < num; i++) {
    maxSum += arr[i];
                    }
//set temp sum to the current max sum
    tempSum = maxSum;
//loop over arr staring at index num 
for (let i = num; i < arr.length; i++) {
//calculate the new temp sum with the new window subtract the first element and add te next
    tempSum = tempSum - arr[i - num] + arr[i];
//if temp sum bigger than max sum set max sum to temp sum
     maxSum = Math.max(maxSum, tempSum);
    }
return maxSum;

}

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//I: array of positive integers and 1 positive integer 
//O: num reperesenting the length of the shortest subarray which is equal to or greater than the integer passed in
//C:if there is no subarray return 0, Time Complexity - O(n), Space Complexity - O(1)

const minSubArrayLen = (arr, num) => {
    let left = 0;
    let minLen = Infinity;
    let tempLen = 0;
    
    
    
}

//[1,2,3,4,5,6], 10 => 2