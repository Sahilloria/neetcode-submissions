class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
       let result = new Array(temperatures.length).fill(0);
       let stack = [];

       for(let i =0; i<temperatures.length; i++){
            while(stack.length>0 && temperatures[i] > stack.at(-1)[0]){
                const [val, index ] = stack.pop();
                let diff = i-index;
                result[index] = diff
            }

        stack.push([temperatures[i], i])
       };
       return result
    }
}
