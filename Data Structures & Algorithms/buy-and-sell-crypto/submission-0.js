class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let buyingPrice = prices[0];

        for(let i =1; i< prices.length; i++){
            if(prices[i] < buyingPrice){
                buyingPrice = prices[i]
            }else{
                let sellingPrice = prices[i]- buyingPrice
                max = Math.max(max, sellingPrice)
            }
        };
        return max
    }
}
