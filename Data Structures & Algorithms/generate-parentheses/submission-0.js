class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        this.makeParanthesis(0,0,n,result, "");
        console.log("test", result)
        return result
    };

    makeParanthesis(close, open, total, result,braces){
        if(close===open && open+close ===2*total){
            result.push(braces);
            return
        }

        if(open< total){
            this.makeParanthesis(close, open+1, total, result,braces+"(")
        };

        if(close < open ){
            this.makeParanthesis(close+1, open, total, result,braces+")")
        };
        
    }
}
