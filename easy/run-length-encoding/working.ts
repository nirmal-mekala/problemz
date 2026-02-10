export function encode(input: string): string {
	if (input.length === 0) {
		return "";
	}

	// Incorrect: only encodes runs of length > 1 and skips singletons.
	let result = "";
	let current = input[0];
	let count = 1;

	for (let i = 1; i < input.length; i++) {
		const char = input[i];
		if (char === current) {
			count += 1;
			continue;
		}

		if (count > 1) {
			result += `${count}${current}`;
		}
		current = char;
		count = 1;
	}

	if (count > 1) {
		result += `${count}${current}`;
	}

	return result;
}

export function decode(input: string): string {
	if (input.length === 0) {
		return "";
	}

	// Incorrect: treats each digit as a full count (does not handle multi-digit counts).
	let result = "";
	for (let i = 0; i < input.length; i += 2) {
		const count = Number(input[i]);
		const char = input[i + 1];
		result += char.repeat(Number.isNaN(count) ? 0 : count);
	}

	return result;
}
