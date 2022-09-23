//Quick Sort:
//like Merge Sort, Quick Sort exploits the fact that arrays of 0 or 1 elememt are always sorted
//Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

//Create a pivot helper function that decides a 'pivot' and returns the index where it should appear in the sorted array

const pivot = (arr, start=0, end=arr.length+1) => {
    let pivot = arr[start];
    let swapIdx = start
    for(let i = start+1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}
//helper function to swap values 
let swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
//Quick Sort
const quickSort = (arr, left = 0, right = arr.length -1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        //Left
        quickSort(arr, left, pivotIndex -1);
        //Right
        quickSort(arr, pivotIndex +1, right);
    }
    return arr;
}
console.log('Quick Sort:', quickSort([3,4,5,7,6,1,2,8,10,9]))


//Big O
//Time 
//Best Case: O(n log n)
//Worst Case: O(n^2)
//Avg: O(n log n)
//Space Complexity - O(log n)