import { describe, expect, it } from "vitest";
import { groupAnagrams as workspace } from "./workspace";
import { groupAnagrams as solution } from "./solution";

describe("group-anagrams", () => {
  const cases: Array<{ name: string; words: string[]; expected: string[][] }> = [
    {
      name: "mixed anagram groups",
      words: ["eat", "tea", "tan", "ate", "nat", "bat"],
      expected: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
    },
    {
      name: "empty input",
      words: [],
      expected: [],
    },
    {
      name: "empty string word",
      words: [""],
      expected: [[""]],
    },
    {
      name: "duplicate words stay in the same group",
      words: ["a", "a"],
      expected: [["a", "a"]],
    },
    {
      name: "every word in one group",
      words: ["abc", "bca", "cab"],
      expected: [["abc", "bca", "cab"]],
    },
    {
      name: "no anagrams at all",
      words: ["abc", "def", "ghi"],
      expected: [["abc"], ["def"], ["ghi"]],
    },
    {
      name: "same letters different counts are not anagrams",
      words: ["aab", "abb", "aab"],
      expected: [["aab", "aab"], ["abb"]],
    },
  ];

  const runCases = (fn: (words: string[]) => string[][]) => {
    for (const { words, expected } of cases) {
      expect(fn(words)).toEqual(expected);
    }
  };

  it("workspace passes all cases", () => {
    runCases(workspace);
  });

  it("solution passes all cases", () => {
    runCases(solution);
  });
});
