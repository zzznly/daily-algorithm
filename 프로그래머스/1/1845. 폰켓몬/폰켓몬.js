function solution(nums) {
    const uniquePonketmons = new Set(nums); // O(N)
    const maxLength = nums.length / 2
    return Math.min(uniquePonketmons.size, maxLength) // Greedy
}