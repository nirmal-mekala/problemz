export function justifyText(words: string[], k: number): string[] {
	const lines = [];
	let currentLine: string[] = [];

	const wordCanFitOnLine = (word: string) => {
		// currentSpaces = numberOfWords - 1
		// totalWordLenghtOnCurrentLine + (numberOfWords) newWordLength + 1 < k
		const currentNumberOfWords = currentLine.length;
		const currentSpaces = currentNumberOfWords - 1;
		const totalWordCharactersOnCurrentLine = currentLine.join("").length;
		const totalCharactersOnCurrentLine =
			totalWordCharactersOnCurrentLine + currentSpaces;
		const hypotheticalAdditionalCharacters = word.length + 1;
		return totalCharactersOnCurrentLine + hypotheticalAdditionalCharacters <= k;
	};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (wordCanFitOnLine(word)) {
			currentLine.push(word);
		} else {
			lines.push(currentLine);
			currentLine = [word];
		}
	}

	lines.push(currentLine);

	const transformWordArrToStrLine = (wordArr: string[]) => {
		if (wordArr.length === 1) {
			return wordArr[0].concat(" ".repeat(k - wordArr[0].length));
		}
		const numberOfSpaces = wordArr.length - 1;
		const spacesToDistribute = k - wordArr.join("").length;
		const guaranteedSpaces = Math.floor(spacesToDistribute / numberOfSpaces);
		const numberOfWordsThatGetExtraSpaces = spacesToDistribute % numberOfSpaces;
		let strLineResult = "";
		for (let i = 0; i < wordArr.length; i++) {
			const word = wordArr[i];
			if (i === 0) {
				strLineResult += word;
			} else if (i <= numberOfWordsThatGetExtraSpaces) {
				strLineResult += " ".repeat(guaranteedSpaces + 1).concat(word);
			} else {
				strLineResult += " ".repeat(guaranteedSpaces).concat(word);
			}
		}
		return strLineResult;
	};

	return lines.map(transformWordArrToStrLine);
}
