export function longestUniqueSubstringLength(input: string): number {
	console.log(`INPUT: ${input}`);
	let maxLength = 0;
	const seen = new Map<string, number>();
	let start = 0;

	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (seen.get(char) !== undefined && seen.get(char)! >= start) {
			start = seen.get(char)! + 1;
		}

		seen.set(char, i);
		const windowLength = i - start + 1;
		maxLength = Math.max(windowLength, maxLength);
	}

	return maxLength;
}
