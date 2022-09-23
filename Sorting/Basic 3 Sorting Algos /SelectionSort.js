//Selection Sort:
//Similar to a bubble sort but instead of moving large values to the end, you move small values to the beginning
//not very efficient or useful

const selectionSort = (arr) => {
    //loop through arr with i starting at the beginning of the arr
    for(let i = 0; i < arr.length; i++) {
        //nest a loop with j starting i + 1 or the index of 1
        for(let j = i+1; j < arr.length; j++) {
            //set arr[i] as a variable
            let idx1 = arr[i]
            //check if arr[i] is greater that the following one
            if(arr[i] > arr[j]){
                 //replace the bigger number with the smaller one
                 arr[i] = arr[j]
                 //replace the smaller number with the bigger one
                 arr[j] = idx1
            }
        }
    }
   return arr
}


console.log(selectionSort([400,65,90,3,2,5,1,10,16,12,21,53,125]))

//Big O
//Time 
//Best Case: O(n^2)
//Worst Case: O(n^2)
//Avg: O(n^2)
//Space Complexity - O(1)