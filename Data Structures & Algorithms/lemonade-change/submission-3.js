class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        if(bills[0] > 5) return false
        let chutta = 5
        for(let i = 1; i < bills.length; i++){
            if(chutta < (bills[i]-5)) return false
            else if (bills[i] > 5) chutta -= (bills[i]-5)
            else chutta += 5
            return true
        }
    }
}
