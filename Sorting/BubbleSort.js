//Bubble Sort:
//A sorting algorithm where the largest values "bubble" to the top 
//https://visualgo.net/en/sorting

const bubbleSort = (arr) => {
    //initialize 'swaps' as true this is a variable to determine wether weve swapped ny numbers in the array
    let noSwaps ;
   //Loop starting at the end of the arr
    for(let i = arr.length - 1; i > 0; i--) {
        //nest a loop starting at the beggining and ending at i-1
        //set no swaps to true as soon as you enter the first loop
        noSwaps = true;
        for(let j = 0; j <= i-1; j++) {
            //store arr[j] in a variable incase it changes
            let idxj = arr[j];
            //if arr[j] is bigger than the following number swap them
            if(arr[j] > arr[j+1]){
                //replace the smaller number with the bigger one
                arr[j] = arr[j+1]
                //replace the bigger number with the smaller one
                arr[j+1] = idxj
                //once weve performed the swap set noSwaps to false
                noSwaps = false
            }
        }
        //if we didnt swap in the last loop break out of the loop because its done sorting
        if(noSwaps) break;
    }
    return arr
}

console.log(bubbleSort([400,65,90,3,2,5,1,10,16,12,21,53,125]))

//Big O
//O(n^2)