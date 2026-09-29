export function isBalancedBrackets(input: string): boolean {
	const closedOpeningMap: Record<string, string> = {
		"}": "{",
		"]": "[",
		")": "(",
	};
	const openings = Object.values(closedOpeningMap);
	const lastEl = <T>(v: Array<T>): T => {
		return v[v.length - 1];
	};
	const stack = [];

	for (const char of input) {
		if (openings.includes(char)) {
			stack.push(char);
		} else {
			if (closedOpeningMap[char] === lastEl(stack)) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
}

console.log(isBalancedBrackets("{}"));
