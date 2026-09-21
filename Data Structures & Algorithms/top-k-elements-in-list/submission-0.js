class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
       
        for(let val of nums){
            if(val in map){
                map[val]+=1
            }else{
                map[val]=1
            }
        };
       
         const arr = Object.entries(map).map(([num, freq]) => [freq, parseInt(num)])
         arr.sort((a, b) => b[0] - a[0]);
         return arr.slice(0,k).map(val=>val[1])
    }
}
