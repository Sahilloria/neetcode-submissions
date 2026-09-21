class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let r = heights.length-1;
        let l = 0;

        while(l<r){
            let minHeight = Math.min(heights[l], heights[r]);
            let area = minHeight * (r-l);
            res = Math.max(res,area);
            if(heights[l]<=heights[r]){
                l++
            }else{
                r--
            }
        };
        return res
    }
}
