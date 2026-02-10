import { describe, expect, it } from "vitest";
import { longestUniqueSubstringLength as working } from "./working";
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

describe("longestUniqueSubstringLength (working)", () => {
  it.each(cases)("returns correct length: %o", ({ input, expected }) => {
    expect(working(input)).toBe(expected);
  });
});

describe("longestUniqueSubstringLength (solution)", () => {
  it.each(cases)("returns correct length: %o", ({ input, expected }) => {
    expect(solution(input)).toBe(expected);
  });
});
