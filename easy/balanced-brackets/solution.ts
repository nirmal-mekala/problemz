export function isBalancedBrackets(input: string): boolean {
  const stack: string[] = [];
  const closeToOpen: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const ch of input) {
    if (ch === "(" || ch === "[" || ch === "{") {
      stack.push(ch);
      continue;
    }
    if (ch === ")" || ch === "]" || ch === "}") {
      const expectedOpen = closeToOpen[ch];
      const last = stack.pop();
      if (last !== expectedOpen) return false;
    }
  }

  return stack.length === 0;
}
