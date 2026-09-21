class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sMap = {};

        if(s.length!==t.length){
            return false;
        };

        for(let val of s){
            if(val in sMap){
                sMap[val]+=1
            }else{
                sMap[val] = 1
            }
        };

        for(let val of t){
            if(!sMap[val]){
                return false
            }
            sMap[val]--
        }

        return true
    }
}
