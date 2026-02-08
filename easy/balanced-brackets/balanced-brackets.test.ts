import { describe, expect, it } from "vitest";
import { isBalancedBrackets as working } from "./working";
import { isBalancedBrackets as solution } from "./solution";

describe("balanced-brackets", () => {
  const cases = [
    { input: "", expected: true, name: "empty string" },
    { input: "([])[]({})", expected: true, name: "multiple groups" },
    { input: "([)]", expected: false, name: "crossed pairs" },
    { input: "((()", expected: false, name: "missing closing paren" },
    { input: "()[]{}", expected: true, name: "three simple pairs" },
    { input: "({[]})", expected: true, name: "nested mixed" },
    { input: "{[}]", expected: false, name: "mismatched close" },
    { input: "[", expected: false, name: "single open" },
    { input: "]", expected: false, name: "single close" },
    { input: "([{}])()", expected: true, name: "nested then separate" },
    { input: "([]))", expected: false, name: "extra closing paren" },
  ];

  describe("working", () => {
    it.each(cases)("$name (input: $input)", ({ input, expected }) => {
      expect(working(input)).toBe(expected);
    });
  });

  describe("solution", () => {
    it.each(cases)("$name (input: $input)", ({ input, expected }) => {
      expect(solution(input)).toBe(expected);
    });
  });
});
