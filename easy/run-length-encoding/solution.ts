export function encode(input: string): string {
	let result: string = "";
	let lastSeenChar = "";
	let charsSeen = 0;

	const validatedCommit = (charsSeen: number, char: string) => {
		if (charsSeen > 0) {
			commit(String(charsSeen) + char);
		}
	};

	const commit = (v: string) => {
		result += v;
	};

	for (const char of input) {
		if (!lastSeenChar) {
			lastSeenChar = char;
			charsSeen = 1;
			continue;
		}
		if (char === lastSeenChar) {
			charsSeen++;
		} else {
			validatedCommit(charsSeen, lastSeenChar);
			lastSeenChar = char;
			charsSeen = 1;
		}
	}
	validatedCommit(charsSeen, lastSeenChar);
	return result;
}

export function decode(input: string): string {
	let lastSeenWasNumber = true;
	let numberChars = "";
	let result = "";

	const commit = (v: string) => {
		result += v;
	};

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		const charIsNumber = !isNaN(Number(char));

		if (!charIsNumber) {
			// LETTER
			commit(char.repeat(Number(numberChars)));
			numberChars = "";
			lastSeenWasNumber = false;
		} else {
			// NUMBER
			numberChars += char;
			lastSeenWasNumber = true;
		}
	}

	return result;
}
