class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let max = 0
        for(let val of set){
            if(!set.has(val-1)){
                let length = 1;
                while (set.has(val+length)){
                    length++
                }
                max = Math.max(max, length)
            }
        };

        return max
    }
}
