//Linear search
//Check every element in an unsorted or sorted dataset and check if thats the one you are looking for 
//Built in JavaScript linear search functions: indexOf, includes, find, findIndex

const linearSearch = (arr, num) => {
 for(let i = 0; i < arr.length; i++){
     if(num === arr[i]) return i;
 }
 return -1;
}
//console.log(linearSearch([1,2,3,4,5], 5))

//Linear Search Big O
//Best Case: O(1)
//Worst Case: O(n)
//avg Case: O(n)

//Binary Search
//Binary search only works on sorted datasets
//rather than eliminating one element at a time you can eliminate half of the remaining elements at a time

const binarySearch = (arr, num) => {
    let left = 0
    let right = arr.length -1

    while(left < right){
        let mid = Math.floor((right + left) / 2)
        if(arr[mid] === num){
            return mid
        }else if(arr[mid] < num){
            left = mid + 1
        }else if(arr[mid] > num){
            right = mid - 1
        }
    }
    return -1
}
//console.log(binarySearch([1,2,3,4,5,6,10,11,15,35], 11))

// Refactored Version
function binarySearch2(arr, num) {
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while(arr[middle] !== num && left <= right) {
        if(num < arr[middle]) right = middle - 1;
        else left = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === num ? middle : -1;
}

//binarySearch2([2,5,6,9,13,15,28,30], 103)

//Linear Search Big O
//Best Case: O(1)
//Worst Case: O(log n)
//avg Case: O(log n)

//Naive String Search 
const stringSearch = (longStr, shortStr) => {
    let count = 0;
    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            if(shortStr[j] !== longStr[i + j]) break;
            if(j === shortStr.length - 1) count++;
        }
    }
    return count;
}

console.log(stringSearch('omgomgomgimgggomg', 'img'))