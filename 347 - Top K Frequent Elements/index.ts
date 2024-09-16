function topKFrequent(nums: number[], k: number): number[] {
    const hashmap = new Map<number, number>();
    for (const num of nums) {
        hashmap.set(num, (hashmap.get(num) ?? 0) + 1)
    }

    const hashmapSort: Map<number, number> = new Map([...hashmap.entries()].sort((a, b) => b[1] - a[1]));
    return [...hashmapSort.keys()].slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
