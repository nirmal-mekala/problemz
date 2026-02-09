import { describe, expect, it } from "vitest";
import { justifyText as working } from "./working";
import { justifyText as solution } from "./solution";

describe("text-justification", () => {
  const cases: Array<{ words: string[]; k: number; expected: string[] }> = [
    {
      words: ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
      k: 16,
      expected: ["the  quick brown", "fox  jumps  over", "the   lazy   dog"],
    },
    {
      words: ["a", "b", "c", "d"],
      k: 3,
      expected: ["a b", "c d"],
    },
    {
      words: ["longword", "x", "y"],
      k: 8,
      expected: ["longword", "x      y"],
    },
    {
      words: ["one"],
      k: 5,
      expected: ["one  "],
    },
  ];

  const runCases = (fn: (words: string[], k: number) => string[]) => {
    for (const { words, k, expected } of cases) {
      expect(fn(words, k)).toEqual(expected);
    }
  };

  it("working passes all cases", () => {
    runCases(working);
  });

  it("solution passes all cases", () => {
    runCases(solution);
  });
});
