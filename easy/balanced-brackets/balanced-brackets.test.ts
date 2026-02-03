import { describe, expect, it } from "vitest";
import { isBalancedBrackets as working } from "./working";
import { isBalancedBrackets as solution } from "./solution";

describe("balanced-brackets", () => {
  const cases: Array<[string, boolean]> = [
    ["", true],
    ["([])[]({})", true],
    ["([)]", false],
    ["((()", false],
    ["()[]{}", true],
    ["({[]})", true],
    ["{[}]", false],
    ["[", false],
    ["]", false],
    ["([{}])()", true],
    ["([]))", false],
  ];

  it("solution passes all cases", () => {
    for (const [input, expected] of cases) {
      expect(solution(input)).toBe(expected);
    }
  });

  it("working fails at least one case", () => {
    const results = cases.map(([input, expected]) => working(input) === expected);
    expect(results.every(Boolean)).toBe(false);
  });
});
