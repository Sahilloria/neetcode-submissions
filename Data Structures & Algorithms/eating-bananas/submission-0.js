class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left  = 1;
        let right = Math.max(...piles);
        let res = right;


        while(left <= right){
            let totalSteps = 0;
            let midValue = Math.floor((left+right)/2);

            for(let item of piles){
                totalSteps+= Math.ceil(item/midValue);
            };

            if(totalSteps <=h){
                res = midValue;
                right  = midValue - 1
            }else{
                left = midValue+1
            }
        };
        return res
    }
}
