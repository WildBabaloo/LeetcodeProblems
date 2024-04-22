function groupAnagrams(strs: string[]): string[][] {
    let map: Map<string, string[]> = new Map();
    strs.sort();
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = [...strs[i]].sort((a, b) => a.localeCompare(b)).join("");
        if (map.has(sortedStr)) {
            map.get(sortedStr)!.push(strs[i]);
        } else {
            map.set(sortedStr, [strs[i]]);
        }
    }

    return Array.from(map.values()).sort((a, b) => a.length - b.length);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
