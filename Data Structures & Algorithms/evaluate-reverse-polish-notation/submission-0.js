class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack  = [];
        
        for(let val of tokens){
            if(val ==="+"){
                stack.push(stack.pop()+ stack.pop())
            }else if (val ==="-"){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(b-a)
            }else if( val ==="*"){
                stack.push(stack.pop()* stack.pop())
            }else if(val ==="/"){
                const a = stack.pop();
                const b = stack.pop();
                stack.push(Math.trunc(b/a))
            }else{
                stack.push(parseInt(val))
            }
        };
        return stack[0]
    }
}
