//more difficult recursive problems 

// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

//I: string
//O: input string reversed
//C:Use recursion...
//step one deterine a base case
//step two...
const reverse = (str) => {
    //base case
    if(str.length <= 1) return str;
    //remove first char of the string and add it to the end recursively
    return reverse(str.slice(1)) + str[0];
  }

//isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
//I: string
//O: boolean true if the input is a palindrom false if not a isPalindrome
//C: use recursive function

const isPalindrome = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
console.log(isPalindrome('awesome'))