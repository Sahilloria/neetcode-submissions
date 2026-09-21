class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length===0){
            return 0
        }
        if(nums.length===1){
            return 1
        }
        if(nums.every((val)=>val===0)){
            return 1
        }

        let set = [...new Set(nums)].sort((a, b)=> a-b);
        let max = 0;
        let count = 0;
        for(let i =0; i< set.length; i++){
            if(set[i+1]-set[i]===1){
                count++
                max = Math.max(max, count)
            }else{
                count =0
            }
        }
        return max===0?0:max+1
    }
}
