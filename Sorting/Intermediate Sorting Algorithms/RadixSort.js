//Radix Sort:
//Special sorting algorithm that sorts a list of integers.
//does not use comparisons to sort data
//sorts data by exploiting the fact that the size of the integer is encoded in the number of digits it posseses 

//get digit helper method that takes in a num and a place value and finds out what digit is at that place in num
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
//console.log(getDigit(1234, 1))

//count digit helper takes in a number and returns the number of digits
const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
//console.log(digitCount(113))

//Most digits helper method takes in an arr and returns the number of digits that the longest number has(fnds the number with the most digits and returns the number of digits in that number)
const mostDigits = (arr) => {
    let maxDigits = 0
    for(let i = 0; i < arr.length; i++) {
       maxDigits = Math.max(maxDigits, digitCount(arr[i])) 
    }
    return maxDigits
}
//console.log(mostDigits([1,10,1234567,1234,12345]))

//Radix Sort 
const radixSort = (arr) => {
    let digitCount = mostDigits(arr)
    for(let k = 0; k < digitCount; k++){
        let buckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++){
           let digit = getDigit(arr[i],k);
           buckets[digit].push(arr[i])
        }
        arr = [].concat(...buckets);
    }
    return arr
}
//console.log(radixSort([1,3,6,10,9,150,11,45,67,1522,350,400,577]))

//Big O
//Time 
//Best Case: O(nk)
//Worst Case: O(nk)
//Avg: O(nk)
//Space Complexity - O(n + k)