export function groupAnagrams(words: string[]): string[][] {
	const letterPositionMap: Record<string, number> = {};
	"abcdefghijklmnopqrstuvwxyz".split("").forEach((letter, index) => {
		letterPositionMap[letter] = index;
	});

	const resultMap: Record<string, string[]> = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const arrRepresentationOfWord: number[] = Array.from({ length: 26 }).fill(
			0,
		) as number[];
		for (let j = 0; j < word.length; j++) {
			const letter = word[j];
			arrRepresentationOfWord[letterPositionMap[letter]]++;
		}

		const key = arrRepresentationOfWord.join("");

		if (Array.isArray(resultMap[key])) {
			resultMap[key].push(word);
		} else {
			resultMap[key] = [word];
		}
	}

	return Object.values(resultMap);
}
