var Heap = require('heap');

function mininum_sum(coins) {
    var sums = [];
    let heap = new Heap();
    for(let i=0;i<coins.length;i++) {
        let size = sums.length
        for(let j=0; j<size;j++ ) {
            sums.push(sums[j] + coins[i])
        }
        sums.push(coins[i])
    }
    for(let i=0; i<sums.length;i++) {
        heap.push(sums[i])
    }
    var minimum1 = 0
    while (!heap.empty()) {
        let minimum2 = heap.pop()
        if (minimum2 > minimum1 + 1) {
            return minimum1 + 1
        }
        minimum1 = minimum2
        if( heap.empty()) {
            return minimum1 + 1
        }
    }
}


console.log(mininum_sum([5, 7, 1, 1, 2, 3, 22]))

console.log(mininum_sum([1, 1, 1, 1, 1]))

console.log(mininum_sum([1, 5, 1, 1, 1, 10, 15, 20, 100]))
