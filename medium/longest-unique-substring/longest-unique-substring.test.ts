import { describe, expect, it } from "vitest";
import { longestUniqueSubstringLength as workspace } from "./workspace";
import { longestUniqueSubstringLength as solution } from "./solution";

const cases = [
  { input: "", expected: 0 },
  { input: "a", expected: 1 },
  { input: "abcabcbb", expected: 3 },
  { input: "bbbbb", expected: 1 },
  { input: "pwwkew", expected: 3 },
  { input: "dvdf", expected: 3 },
  { input: "aab", expected: 2 },
  { input: "anviaj", expected: 5 }
];

describe("longestUniqueSubstringLength (workspace)", () => {
  it.each(cases)("returns correct length: %o", ({ input, expected }) => {
    expect(workspace(input)).toBe(expected);
  });
});

describe("longestUniqueSubstringLength (solution)", () => {
  it.each(cases)("returns correct length: %o", ({ input, expected }) => {
    expect(solution(input)).toBe(expected);
  });
});
