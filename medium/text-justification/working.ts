export function justifyText(words: string[], k: number): string[] {
	const lines: string[][] = [[]];
	const latestLine = (lines: string[][]) => lines[lines.length - 1];

	const canAddWord = ({ word }: { word: string }) => {
		let currentLength: number = 0;
		const last = latestLine(lines);
		last?.forEach((word, i) => {
			const padding = i === last.length - 1 ? 0 : 1;
			currentLength += word.length + padding;
		});
		return word.length + currentLength <= k;
	};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (canAddWord({ word })) {
			if (lines.length > 0) {
				lines[lines.length - 1].push(word);
			} else {
				lines[0] = [word];
			}
		} else {
			lines.push([word]);
		}
	}

	return lines.map((line) => {
		const totalCharLength = line.reduce((acc, curr) => {
			return acc + curr.length;
		}, 0);
		const guaranteedSpaces =
			line.length > 1
				? Math.floor((k - totalCharLength) / (line.length - 1))
				: k - totalCharLength;
		const totalExtraSpaces =
			line.length > 1 ? (k - totalCharLength) % (line.length - 1) : 0;
		return line.reduce((acc, curr, i) => {
			const extraSpaces = i < totalExtraSpaces ? 1 : 0;
			const notLast = i < line.length - 1;
			const only = line.length === 1;
			const spaces = notLast || only ? guaranteedSpaces + extraSpaces : 0;
			return acc + curr + " ".repeat(spaces);
		}, "");
	});
}
