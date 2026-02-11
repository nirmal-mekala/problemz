export function longestUniqueSubstringLength(input: string): number {
	let max = 0;
	let windowStart = 0;
	const seen = new Map<string, number>();
	for (let i = 0; i < input.length; i++) {
		const char = input[i];

		if (seenWithinWindow({ seen, windowStart, char })) {
			// move windowStart to after breaking character
			windowStart = seen.get(char)! + 1;
		}
		// update max
		max = Math.max(max, i - windowStart + 1);
		// update seen
		seen.set(char, i);
	}
	return max;
}

const seenWithinWindow = (payload: {
	seen: Map<string, number>;
	windowStart: number;
	char: string;
}) => {
	return (
		payload.seen.has(payload.char) &&
		(payload.seen.get(payload.char) ?? -Infinity) >= payload.windowStart
	);
};

/*
  *
  { input: "", expected: 0 },
  { input: "a", expected: 1 },
  { input: "abcabcbb", expected: 3 },
  { input: "bbbbb", expected: 1 },
  { input: "pwwkew", expected: 3 },
  { input: "dvdf", expected: 3 },





  { input: "aab", expected: 2 },
  { input: "anviaj", expected: 5 }
  * */
