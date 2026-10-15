export function groupAnagrams(words: string[]): string[][] {
  const order: string[] = [];
  const groups = new Map<string, string[]>();

  for (const word of words) {
    const key = word.split("").sort().join("");
    const group = groups.get(key);
    if (group) {
      group.push(word);
    } else {
      groups.set(key, [word]);
      order.push(key);
    }
  }

  return order.map((key) => groups.get(key)!);
}
