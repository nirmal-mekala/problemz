import { describe, expect, it } from "vitest";
import { minStepsInGrid as working } from "./working";
import { minStepsInGrid as solution } from "./solution";

const exampleGrid = [
  [false, false, false, false],
  [true, true, false, true],
  [false, false, false, false],
  [false, false, false, false]
];

const cases = [
  {
    name: "example from prompt",
    grid: exampleGrid,
    start: [3, 0] as const,
    end: [0, 0] as const,
    expected: 7
  },
  {
    name: "start equals end",
    grid: [[false]],
    start: [0, 0] as const,
    end: [0, 0] as const,
    expected: 0
  },
  {
    name: "unreachable due to walls",
    grid: [
      [false, true, false],
      [true, true, true],
      [false, true, false]
    ],
    start: [0, 0] as const,
    end: [2, 2] as const,
    expected: null
  },
  {
    name: "simple open grid",
    grid: [
      [false, false, false],
      [false, false, false]
    ],
    start: [0, 0] as const,
    end: [1, 2] as const,
    expected: 3
  },
  {
    name: "blocked start or end",
    grid: [
      [true, false],
      [false, false]
    ],
    start: [0, 0] as const,
    end: [1, 1] as const,
    expected: null
  },
  {
    name: "out of bounds",
    grid: [
      [false, false],
      [false, false]
    ],
    start: [0, 0] as const,
    end: [2, 1] as const,
    expected: null
  }
];

describe("minStepsInGrid (working)", () => {
  it.each(cases)("returns correct steps: %s", ({ grid, start, end, expected }) => {
    expect(working(grid, start, end)).toBe(expected);
  });
});

describe("minStepsInGrid (solution)", () => {
  it.each(cases)("returns correct steps: %s", ({ grid, start, end, expected }) => {
    expect(solution(grid, start, end)).toBe(expected);
  });
});
