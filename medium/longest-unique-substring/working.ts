export function longestUniqueSubstringLength(input: string): number {
	let max = 0;
	const lastSeenMap: Record<string, number> = {};
	let windowStart = 0;
	const registerMax = (windowEnd: number) => {
		max = Math.max(windowEnd + 1 - windowStart, max);
	};

	for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
		const char = input[windowEnd];
		const lastSeenIndex = lastSeenMap[char];
		const haveSeenInThisWindow =
			lastSeenIndex !== undefined && lastSeenIndex >= windowStart;
		if (haveSeenInThisWindow) {
			windowStart = lastSeenIndex + 1;
		}
		lastSeenMap[char] = windowEnd;
		registerMax(windowEnd);
	}
	return max;
}

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
