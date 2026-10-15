# Group Anagrams

**Timebox: 15 min**

## Problem

Group words that are anagrams of each other, meaning they use the same letters
the same number of times. Input words are lowercase a–z.

Ordering:
- Groups appear in the order their first word appears in the input.
- Words inside a group keep their input order.

## Function Signature
`groupAnagrams(words: string[]): string[][]`

## Examples
```
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

groupAnagrams([]);          // []
groupAnagrams([""]);        // [[""]]
groupAnagrams(["a", "a"]);  // [["a", "a"]]
```

## Follow-ups
- Words are very long (around 10k characters each). Does your key strategy still work well?
- How would you handle uppercase letters or Unicode?
