/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     const counter = new Array(26).fill(0);
    
        for(let idx = 0; idx < s.length; idx++){
            counter[s.charCodeAt(idx)-97]++;
        }
        for(let idx = 0; idx < t.length; idx++){
            counter[t.charCodeAt(idx)-97]--;
        }
        
        for (let idx = 0; idx < 26; idx++) {
            if(counter[idx] != 0)
                return false;
        }
        return true;
};