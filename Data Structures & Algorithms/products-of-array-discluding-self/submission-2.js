class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        if(nums.every((val)=>val===0)){
            return nums
        }
        for(let i=0;  i< nums.length; i++){
           result.push(createProduct(i))
        }

        function createProduct (val){
            let product = 1;
            for(let i =0; i<nums.length; i++){
                if(i!==val){
                    product*=nums[i]
                }
            };

            return product==-0?0:product
        }
         return result
    }
}
