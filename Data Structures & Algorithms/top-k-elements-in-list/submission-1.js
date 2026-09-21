class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        const freq = Array.from({length:nums.length+1}, ()=>[]);
       
        for(let val of nums){
            if(val in map){
                map[val]+=1
            }else{
                map[val]=1
            }
        };

        for(let count in map){
            freq[map[count]].push(parseInt(count))
        }
       
        const res =[];

        for(let i =freq.length-1; i>0; i--){
            for(let key of freq[i] ){
                res.push(key)
            }
            if(res.length===k){
                return res
            }
        }
    }
}
