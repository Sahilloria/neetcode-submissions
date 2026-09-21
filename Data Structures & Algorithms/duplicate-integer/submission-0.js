class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for(let val of nums){
            if(!map.hasOwnProperty(val)){
                map[val]=1
            }else{
                return true
            }
        }
        return false
    }
}
