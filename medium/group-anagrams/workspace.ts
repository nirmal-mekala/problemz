export function groupAnagrams(words: string[]): string[][] {
  const groups = new Map<string, Set<string>>();

  for (const word of words) {
    const key = word.split("").sort().join("");
    const group = groups.get(key);
    if (group) {
      group.add(word);
    } else {
      groups.set(key, new Set([word]));
    }
  }

  return Array.from(groups.values()).map((group) => Array.from(group));
}
