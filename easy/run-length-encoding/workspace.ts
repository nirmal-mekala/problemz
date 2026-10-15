/*

## Examples

- `encode("AAAABBBCCDAA")` returns `"4A3B2C1D2A"`
- `encode("ABCD")` returns `"1A1B1C1D"`
- `decode("4A3B2C1D2A")` returns `"AAAABBBCCDAA"`
- `decode("1A1B1C1D")` returns `"ABCD"`

*/

export function encode(input: string): string {
	let counter = 1;
	let result = "";

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		const next = input[i + 1];
		if (char !== next) {
			result += `${counter}${char}`;
			counter = 1;
		} else {
			counter++;
		}
	}

	return result;
}

export function decode(input: string): string {
	let result = "";
	let numberStr = "";

	const isNumericString = (str: string) => {
		return !isNaN(Number(str));
	};

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (isNumericString(char)) {
			numberStr += char;
		} else {
			result += char.repeat(Number(numberStr));
			numberStr = "";
		}
	}

	return result;
}
