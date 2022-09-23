//Insertion Sort:
//Builds up the srt by creating a larger half which is always sorted

const insertionSort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
          nums[j + 1] = nums[j]
          j--
        }
        nums[j+1] = temp
      }
      return nums
};

console.log(insertionSort([400,65,90,3,2,5,1,10,16,12,21,53,125]))

//Big O
//Time 
//Best Case: O(n)
//Worst Case: O(n^2)
//Avg: O(n^2)
//Space Complexity - O(1)

//instertion sort is good if your data is almost sorted 
//works well when data is coming in live and need to go in sorted