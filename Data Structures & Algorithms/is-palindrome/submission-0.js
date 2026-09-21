class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let l =0; 
        let r = s.length-1;

        while(l < r){
            while(l < r && !checkCharacter(s[l])){
                l++
            };
            while(r > l && !checkCharacter(s[r])){
                r--
            }

            if(s[l].toLowerCase() !== s[r].toLowerCase()){
                return false
            }

            l++
            r--
        }
        
       
       function checkCharacter(char){
        return (
            (char>='A' && char<="Z") || (char>='a' && char <='z')||(char>='0' && char <='9')
        )
       };
 
    return true
    }
}