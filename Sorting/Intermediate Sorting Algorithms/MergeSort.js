//Merge Sort:
//Combination of splitting, sorting, and merging 
//exploits the fact that arrays of 0 or 1 elememt are always sorted
//works by decomposing an array to sub arrays of 1 or 0, then building up a newly sorted array

//First create a helper function called merge to merge two sorted arrays 
const merge = (arr1, arr2) => {
    let newArr = [];
    let j = 0;
    let i = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]){
            newArr.push(arr1[i]);
            i++;
        }else{
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length) {
       newArr.push(arr1[i])
       i++;
    }
    while(j < arr2.length) {
        newArr.push(arr2[j])
        j++;
     }
    return newArr;
}
console.log('MERGE: [1,3,5,6,8,10], [2,4,7,9,11,12]:', merge([1,3,5,6,8,10], [2,4,7,9,11,12]))

//Create a function called mergeSort to recursively split a unsorted array into smaller sorted arrays that each have a length of 1, use the above merge function to merge the 1 element long sorted arrays and return the newly sorted array 

const mergeSort = (arr) => {
    //base case
    if(arr.length <= 1) return arr;
    //find mid point of arr and assign to a variable 
    let mid = Math.floor(arr.length / 2);
    //rcursivley assign left side of arr to a vriable
    let left = mergeSort(arr.slice(0, mid));
    //recursively assign the right side of arr to a vriable
    let right = mergeSort(arr.slice(mid));
    //return left and right merged together in order
    return merge(left, right);
}
console.log('Merge Sort:', mergeSort([10,4,5,3,2,6,1,8,9,7]))

//Big O
//Time 
//Best Case: O(n log n)
//Worst Case: O(n log n)
//Avg: O(n log n)
//Space Complexity - O(n)