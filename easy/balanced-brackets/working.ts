export function isBalancedBrackets(input: string): boolean {
	const stack = [];
	const lastChar = (charArr: string[]) => charArr[charArr.length - 1];

	const bracketMap = new Map<string, string>([
		["{", "}"],
		["(", ")"],
		["{", "}"],
	]);
	const isOpening = (char: string) => bracketMap.has(char);
	// const closingBrackets = new Set([")", "}", "]"])
	//
	let result = true;

	for (let i = 0; i < input.length; i++) {
		const char = input[i];
		if (isOpening(char)) {
			stack.push(char);
		} else {
			const closesLastChar = bracketMap.get(lastChar(stack)) === char;
			if (closesLastChar) {
				stack.pop();
			} else {
				result = false;
				break;
			}
		}
	}

	if (stack.length > 0) {
		result = false;
	}

	return result;
}
