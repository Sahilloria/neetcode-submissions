class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length-1;
        let min
        while(left<=right){
            if(nums[right] < nums[left]){
                min=nums[right]
                left++
            }else{
                min= nums[left]
                right--
            }
        };
        return min
    }
}
