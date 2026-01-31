export function sumOfArray(nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
}
