import { describe, expect, it } from "vitest";
import { sumOfArray as workspaceSum } from "./workspace";
import { sumOfArray as solutionSum } from "./solution";

const cases = [
  { input: [], expected: 0 },
  { input: [1, 2, 3], expected: 6 },
  { input: [-2, 5, 7], expected: 10 },
  { input: [10], expected: 10 }
];

describe("sumOfArray (workspace)", () => {
  it.each(cases)("returns the correct sum: %o", ({ input, expected }) => {
    expect(workspaceSum(input)).toBe(expected);
  });
});

describe("sumOfArray (solution)", () => {
  it.each(cases)("returns the correct sum: %o", ({ input, expected }) => {
    expect(solutionSum(input)).toBe(expected);
  });
});
