class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {   let empStr = ""
    const lowerStr = s.toLowerCase()
    let filteredArr = [];
    for (let char of lowerStr) {
        if (
            (char >= 'a' && char <= 'z') ||
            (char >= '0' && char <= '9')
        ) {
            filteredArr.push(char);
        }
    }

    let l = 0, r = filteredArr.length - 1;
    while( l < r){
        if(filteredArr[l] !== filteredArr[r]) return false
        l+=1
        r-=1
    }
    // const oneLongString = filteredArr.join('')
    // // console.log(filteredArr.join(''))
    // // return oneLongString
    // for(const char of oneLongString){
    //     empStr = char+empStr
    // }
    // const revStr = empStr
    // if (revStr === oneLongString){
    //     return true
    // }
    return true
    }
}
