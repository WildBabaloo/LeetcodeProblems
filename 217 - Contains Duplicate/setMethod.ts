function containsDuplicate(nums: number[]): boolean {
    // @ts-ignore
    return new Set(nums).size != nums.length;

}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
