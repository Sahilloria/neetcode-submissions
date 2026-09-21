class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = ""
        for(let i =0; i<strs.length; i++){
            string+=strs[i].length+"*"+strs[i]
        };
        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let pointer = 0;
        const result = [];

        while(pointer<str.length){
            let j =pointer;

            while(str[j]!=="*"){
                j++
            }

            let wordLength = str.slice(pointer, j);
            let word = str.slice(j+1,j+1+ parseInt(wordLength) );
            result.push(word);
            pointer =j+1+parseInt(wordLength);

        };
        return result

    }
}
