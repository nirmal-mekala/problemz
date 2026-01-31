export function longestUniqueSubstringLength(input: string): number {
  let maxLength = 0;
  const lastSeen = new Map<string, number>();
  let windowStart = 0;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const previousIndex = lastSeen.get(char);

    if (previousIndex !== undefined && previousIndex >= windowStart) {
      windowStart = previousIndex + 1;
    }

    lastSeen.set(char, i);
    const windowLength = i - windowStart + 1;
    if (windowLength > maxLength) {
      maxLength = windowLength;
    }
  }

  return maxLength;
}
