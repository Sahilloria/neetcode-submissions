class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       let map ={};

       for(let val of strs){
        let sort = val.split("").sort().join("");

        if(!map[sort]){
            map[sort]=[]
        }
        map[sort].push(val)
       };
     return Object.values(map)
    }
}
