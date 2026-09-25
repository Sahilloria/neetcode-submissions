class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let maxLength = 0;
        let pointer = 0;

        for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
                set.delete(s[pointer]);
                pointer++;
            }
            set.add(s[i]);
            maxLength = Math.max(maxLength, (i - pointer) + 1);
        }
        return maxLength;
    }
}
