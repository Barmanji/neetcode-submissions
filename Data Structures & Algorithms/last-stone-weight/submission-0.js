class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const minHeap = new MaxPriorityQueue();
        for (const stone of stones){
            minHeap.enqueue(stone)
        }
        if(minHeap.size()===1) return minHeap.front()
        while(minHeap.size()>1){
            minHeap.enqueue(Math.abs(minHeap.dequeue() - minHeap.dequeue()))
        }
        return minHeap.size() !== 0 ?  minHeap.front() : 0
    }
}
