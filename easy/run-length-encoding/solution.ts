export function encode(input: string): string {
	if (input.length === 0) {
		return "";
	}

	let result = "";
	let current = input[0];
	let count = 1;

	for (let i = 1; i < input.length; i++) {
		const char = input[i];
		if (char === current) {
			count += 1;
		} else {
			result += `${count}${current}`;
			current = char;
			count = 1;
		}
	}

	result += `${count}${current}`;
	return result;
}

export function decode(input: string): string {
	if (input.length === 0) {
		return "";
	}

	let result = "";
	let countStr = "";

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (char >= "0" && char <= "9") {
			countStr += char;
			continue;
		}

		const count = Number(countStr);
		result += char.repeat(count);
		countStr = "";
	}

	return result;
}
