import { describe, expect, it } from "vitest";
import { decode as workingDecode, encode as workingEncode } from "./working";
import { decode as solutionDecode, encode as solutionEncode } from "./solution";

const encodeCases = [
  { input: "", expected: "" },
  { input: "A", expected: "1A" },
  { input: "ABCD", expected: "1A1B1C1D" },
  { input: "AAAABBBCCDAA", expected: "4A3B2C1D2A" },
  { input: "AAABCCCCDD", expected: "3A1B4C2D" }
];

const decodeCases = [
  { input: "", expected: "" },
  { input: "1A", expected: "A" },
  { input: "1A1B1C1D", expected: "ABCD" },
  { input: "4A3B2C1D2A", expected: "AAAABBBCCDAA" },
  { input: "12Z", expected: "ZZZZZZZZZZZZ" }
];

function runEncodeCases(encodeFn: (input: string) => string) {
  it.each(encodeCases)("encodes runs: %o", ({ input, expected }) => {
    expect(encodeFn(input)).toBe(expected);
  });
}

function runDecodeCases(decodeFn: (input: string) => string) {
  it.each(decodeCases)("decodes runs: %o", ({ input, expected }) => {
    expect(decodeFn(input)).toBe(expected);
  });
}

describe("run-length-encoding (working)", () => {
  runEncodeCases(workingEncode);
  runDecodeCases(workingDecode);
});

describe("run-length-encoding (solution)", () => {
  runEncodeCases(solutionEncode);
  runDecodeCases(solutionDecode);
});
